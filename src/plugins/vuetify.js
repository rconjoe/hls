import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: colors.deepPurple.base,
                secondary: colors.green.base,
                accent: colors.shades.black,
                error: colors.red.base,
                info: colors.lightBlue.base,
                success: colors.lime.base,
                warning: colors.yellow.darken1
            }
        }
    }
});
