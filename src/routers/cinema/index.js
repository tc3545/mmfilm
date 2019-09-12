export default[
    {
        path : '/cinema',
        component : () => import('../../views/Cinema/index.vue'),
    },
    {
        path:'/cityfilm',
        component:()=> import('../../components/CiList/Cityfilm.vue'),
        children:[
            {
                path:'detail/:id',
                components:{
                    default:()=> import('../../components/CiList/Cityfilm.vue'),
                    detail:()=> import ('../../views/Movie/Detail.vue')
                },
                props:{
                    detail:true
                }
            },
        ]
    }
    
    
]
