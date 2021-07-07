import { App } from 'vue-demi';
import Tree from './tree/tree.vue';

function install(app: App, options = {}){
    app.component('vue-quick-tree', Tree)
}

export default { install }

export { Tree as VueQuickTree }