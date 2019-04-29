// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import "~/assets/styles/index.scss"
import DefaultLayout from '~/layouts/Default.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEye, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSignInAlt)
library.add(fab)

export default function (Vue, { router, head, isClient }) {

  Vue.component('font-awesome-icon', FontAwesomeIcon)
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
