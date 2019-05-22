import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
    iconfont: 'md',
    theme: {
        primary: colors.purple, // #9C27B0
        secondary: colors.pink.darken1, // #D81B60
        accent: colors.indigo.base // #3F51B5
    },
})