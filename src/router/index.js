import Vue from 'vue'
import Router from 'vue-router'

import Homepage from '../home/HomePage.vue'
import RobotBuilder from '../build/RobotBuilder.vue'
import PartInfo from '../parts/PartInfo.vue'
import BrowseParts from '../parts/BrowseParts.vue'
import RobotHeads from '../parts/RobotHeads.vue'
import RobotArms from '../parts/RobotArms.vue'
import RobotTorsos from '../parts/RobotTorsos.vue'
import RobotBases from '../parts/RobotBases.vue'
import ShoppingCart from '../cart/ShoppingCart.vue'

import SidebarStandard from '../sidebars/SidebarStandard.vue'
import SidebarBuilder from '../sidebars/SidebarBuild.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {            
            path: '/',
            name: 'Home',
            components: {
                default: Homepage,
                sidebar: SidebarStandard
            }
        },
        {
            path: '/build',
            name: 'Build',
            components: {
                default: RobotBuilder,
                sidebar: SidebarBuilder
            }
        },
        {
            path: '/parts/browse',
            name: 'BrowseParts',
            component: BrowseParts,
            props: true,
            children:[{
                path: 'heads',
                name: 'heads',
                component: RobotHeads                  
            },
            {
                path: 'arms',
                name: 'arms',
                component: RobotArms                  
            },
            {
                path: 'torsos',
                name: 'torsos',
                component: RobotTorsos                 
            },
            {
                path: 'bases',
                name: 'bases',
                component: RobotBases                 
            }]
        },
        {
            path: '/parts/:partType/:id',
            name: 'Parts',
            component: PartInfo,
            props: true,
            beforeEnter(to, from, next){
                const isValid = Number.isInteger(Number(to.params.id));
                next(isValid);   
            }
        },
        {
            path: '/cart',
            name: 'Cart',
            component: ShoppingCart
        },
    ]
});