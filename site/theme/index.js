/* eslint-disable */
const path = require('path')
const homeTmpl = './template/Home'
const contentTmpl = './template/Content'

function pickerGenerator() {
  const tester = new RegExp("^docs/")
  return (markdownData) => {
    const { filename } = markdownData.meta
    if (tester.test(filename)
        && !/\/demo$/.test(path.dirname(filename))) {
      return {
        meta: markdownData.meta,
      }
    }
  }
}

module.exports = {
  plugins: ['bisheng-plugin-react?lang=jsx'],
  lazyLoad(nodePath, nodeValue) {
    if (typeof nodeValue === 'string') {
      return true
    }
    return nodePath.endsWith('/demo')
  },
  pick: {
    components(markdownData) {
      const { filename } = markdownData.meta
      if (!/^components/.test(filename)
          || /[/\\]demo$/.test(path.dirname(filename))) return

      return {
        meta: markdownData.meta,
      }
    },
    changelog(markdownData) {
      if (/CHANGELOG/.test(markdownData.meta.filename)) {
        return {
          meta: markdownData.meta,
        }
      }
    },
    'docs': pickerGenerator(),
  },
  routes: {
    path: '/',
    component: './template/Layout',
    indexRoute: { component: homeTmpl },
    childRoutes: [
      {
        path: 'index',
        component: homeTmpl,
      },
      {
        path: 'docs/:children',
        component: contentTmpl,
      },
      {
        path: 'components/:children',
        component: contentTmpl,
      },
      {
          path: 'docs/spec/:children',
          component: contentTmpl,
      },
      {
        path: 'changelog',
        component: contentTmpl,
      }
      // {
      //   path: 'docs/pattern/:children',
      //   component: redirectTmpl,
      // }, {
      //   path: 'docs/react/:children',
      //   component: contentTmpl,
      // }, {
      //   path: 'docs/spec/feature',
      //   component: redirectTmpl,
      // }, {
      //   path: 'docs/spec/feature-cn',
      //   component: redirectTmpl,
      // }, {
      //   path: 'docs/spec/:children',
      //   component: contentTmpl,
      // }, {
      //   path: 'docs/resource/:children',
      //   component: redirectTmpl,
      // }
    ],
  }
}
