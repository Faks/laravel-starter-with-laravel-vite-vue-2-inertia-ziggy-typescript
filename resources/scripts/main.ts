import Vue from 'vue'
import {createInertiaApp} from '@inertiajs/inertia-vue'
// @ts-ignore
import {Ziggy} from '@/js/ziggy';
// @ts-ignore
import route from 'ziggy';

Vue.config.productionTip = true;

Vue.mixin({
    methods: {
        route: (name: string, params: any, absolute: any, config = Ziggy) => route(name, params, absolute, Ziggy),
    },
});

const pages: any = import.meta.glob(`../views/pages/**/*.vue`);

const inertiaApp = createInertiaApp({
    resolve: (name: string) => {
        const importPage = pages[`../views/pages/${name}.vue`];

        if (!importPage) {
            throw new Error(`Unknown page ${name}. Is it located under Pages with a .vue extension?`);
        }

        return importPage().then((module: any) => module.default)
    },
    setup({el, App, props}: any) {
        new Vue({
            render: h => h(App, props),
        }).$mount(el)
    },
})
