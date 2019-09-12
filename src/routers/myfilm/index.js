export default{
    path : '/myfilm',
    component : () => import('../../views/Myfilm/index.vue'),
    children:[
        {
            path:'detail/:id',
            components:{
                default:()=> import('../../components/ComingSoon'),
                detail:()=> import ('../../views/Movie/Detail.vue')
            },
            props:{
                detail:true
            }
        },
    ]

}