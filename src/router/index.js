import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Editar from '@/components/Editar'
import Criar from '@/components/Criar'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/criar',
            name: 'Criar',
            component: Criar
        },
        {
            path: '/editar/:id',
            name: 'Editar',
            component: Editar
        }
    ]
})
