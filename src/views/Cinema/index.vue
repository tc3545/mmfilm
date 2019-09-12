<template>
    <div id="main" >
        <Header title="热映电影"/>
        <div id="content">
            <div class="cinema_menu">
				<div @click='ischange = !ischange' class="city_switch">
					全城 <i class="iconfont icon-lower-triangle"></i>
                    
				</div>
				<div class="brand_swtich">
					品牌 <i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="feature_switch">
					特色 <i class="iconfont icon-lower-triangle"></i>
				</div>
			</div>
            
            <transition name="move">
              <Ccity class="one" v-if='ischange' :List='List'/>   
            </transition>
            <CiList/>
            <!-- <keep-alive>
             <router-view></router-view>
            </keep-alive> -->
        </div>  
        <TabBar/>
        
    </div>
</template>
<script>
import Header from '../../components/Header'
import TabBar from '../../components/TabBar'
import CiList from '../../components/CiList'

import Ccity from '../../components/Down/Ccity'
export default {
    name:'Cinema',
    props:[
    ],
    data(){
        return{
            ischange:false,
            List:[
                {name:'番禺',id:1},
                {name:'黄埔',id:2},
                {name:'荔湾',id:3},
                {name:'天河',id:4},
                {name:'越秀',id:5},
                {name:'花都',id:6},
                {name:'增城',id:7},
                

            ]
        }
    },
    methods:{
        add(){
            this.ischange = !this.ischange
        }
    },
    components:{
        Header,
        TabBar,
        CiList,
        Ccity
    }
}
</script>

<style scoped >
#content .cinema_menu{ 
    width: 100%; 
    height: 45px; 
    border-bottom:1px solid #e6e6e6; 
    display: flex; 
    justify-content:space-around; 
    align-items:center; 
    background:white;
    }
.one{
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
    z-index: 100;
    
}

.move-enter,.move-leave-to{
    transform: translateY(-100%) 
}
.move-enter-active,.move-leave-active{
    transition: all .5s;
}
.move-enter-to,.move-leave{
    transform: translateY(100%-45px)
}

    
</style>