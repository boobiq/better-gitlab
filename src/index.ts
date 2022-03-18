import $ from 'jquery'
import { get } from './utils'
import './style/main.less'
import { add } from './example'

import avatars from './avatars/avatars'

async function main () {
  // console.log('script starting haha')
  // console.log(`1 + 2 = ${add(1, 2)}`)
  // const res = await get<{ uuid: string, haha: boolean }>('/uuid', {
  //   baseURL: 'https://httpbin.org',
  // })
  // console.log(`uuid: ${res.data.uuid}`)

  await avatars.run()
  // GM_notification({})
  // await GM.notification({
  //   text: 'asd',
  //   highlight: true,
  //   ondone: clicked => {
  //     console.log(clicked)
  //   },
  //   onclick: () => {
  //     console.log('click')
  //   }
  // })
}

main().catch((e) => {
  console.log(e)
})
