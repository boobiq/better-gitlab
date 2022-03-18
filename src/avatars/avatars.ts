import { AxiosResponse } from 'axios'
import $ from 'jquery'

import { get } from '../utils'

const classes = {
  MrItemAvatar: 'gml--MrItemAvatar',
}

const paths = {
  mrListContainer: '.mr-list',
  mrListItem: '.merge-request',
  mrListItemAuthor: '.author-link',
}

interface IGitlabUser {
  avatarUrl: string;
  bio: any;
  createdAt: string;
  id: number | string;
  linkedin: string;
  location: any;
  name: string;
  organization: any;
  publicEmail: string;
  skype: string;
  state: string;
  twitter: string;
  username: string;
  webUrl: string;
  websiteUrl: string;
}

type IUserCache = Map<IGitlabUser['id'], Promise<IGitlabUser>>;

async function run () {
  const users: IUserCache = new Map()
  const items = document.querySelector(paths.mrListContainer).querySelectorAll(paths.mrListItem).forEach(value => {
    addAvatarToMrItem(this, users))
  }

  return Promise.all(operations)
}

async function addAvatarToMrItem ($listItem: JQuery<Element>, users: IUserCache) {
  const userId = $listItem.find(paths.mrListItemAuthor).attr('data-user-id')!

  const user = await (async () => {
    if (users.has(userId)) {
      return users.get(userId)!
    }

    const userPromise = fetchUser(userId)

    users.set(userId, userPromise)

    return userPromise
  })()

  const $avatar = $(`<img
    src="${user.avatarUrl}"
    width="50" height="50"
    alt="user avatar"
    data-src="${user.avatarUrl}"
    class="avatar s50 mr-2 ${classes.MrItemAvatar}"
  />`)

  // TODO: add it better than this
  $listItem.prepend($avatar)

  return $avatar
}

async function fetchUser (userId: IGitlabUser['id']): Promise<AxiosResponse<IGitlabUser>> {
  return get<IGitlabUser>(`/api/v4/users/${userId}`, { headers: { accept: 'application/json' } })
}

export default { run }
