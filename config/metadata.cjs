const { author, dependencies, repository, version } = require('../package.json')

module.exports = {
  name: 'webpack-userscript-template',
  namespace: 'https://trim21.me/',
  version: version,
  author: author,
  source: repository.url,
  // 'license': 'MIT',
  include: [
    'http://www.dsl.sk/*',
    'https://www.sme.sk/*',
    'https://www.develhell.com/*'
  ],
  require: [
    `https://cdn.jsdelivr.net/npm/jquery@${dependencies.jquery}/dist/jquery.min.js`,
    `https://cdn.jsdelivr.net/npm/axios@${dependencies.axios}/dist/axios.min.js`,
    `https://cdn.jsdelivr.net/npm/axios-userscript-adapter@${dependencies['axios-userscript-adapter']}/dist/axiosGmxhrAdapter.min.js`,
  ],
  grant: [
    'GM.xmlHttpRequest',
    'GM.notification',
  ],
  connect: [
    'httpbin.org'
  ],
  'run-at': 'document-end'
}
