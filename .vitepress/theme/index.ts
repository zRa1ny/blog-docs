import {
    computed,
    defineComponent,
    h,
    inject,
    onMounted,
    onUnmounted,
    provide,
    reactive,
    ref
} from 'vue'
import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress'
import './custom.css';
import Home from '../components/home.vue'
export default {
    ...DefaultTheme,
    Layout: defineComponent({
        setup(_, { slots }) {
            console.log(slots)
            return () => h(Home, null, slots)
        }
    })
} as Theme;