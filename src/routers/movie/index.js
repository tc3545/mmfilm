export default{
    path : '/movie',
    component : () => import('../../views/Movie'),
    children:[
        {
            path:'city',
            component:()=> import('../../components/City')
        },
        {
            path:'nowPlaying',
            component:()=> import('../../components/NOwPlaying'),
            
        },
        {
            path:'comingSoon',
            component:()=> import('../../components/ComingSoon')
        },
        {
            path:'search',
            component:()=> import('../../components/Search')
        },
        {
            path:'detail/1/:id',
            components:{
                default:()=> import('../../components/NOwPlaying'),
                detail:()=> import ('../../views/Movie/Detail.vue')
            },
            props:{
                detail:true
            }
        },
        {
            path:'detail/2/:id',
            components:{
                default:()=> import('../../components/ComingSoon'),
                detail:()=> import ('../../views/Movie/Detail.vue')
            },
            props:{
                detail:true
            }
        },
        {
            path:'/movie',
            redirect:'/movie/nowPlaying'
        }
    ]
}