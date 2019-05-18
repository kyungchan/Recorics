import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
    iconfont: 'md',
    theme: {
        primary: colors.purple, // #E53935
        secondary: colors.pink.darken1, // #FFCDD2
        accent: colors.indigo.base // #3F51B5
    },
})