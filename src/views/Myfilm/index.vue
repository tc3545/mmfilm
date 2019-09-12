<template>
    <div id="main" title="我的电影">
        <Header title="我的电影"/>
        <div class="movie_body" ref="movie_body">
    <Loading v-if='isLoading'/>
    
    <ul>
      <!-- <li class="pullDown">{{pullDownMsg}}</li> -->
      <li v-for="(item,index) in likefilm" :key="item.id">
        <div class="pic_show" @click="handleToDetail(item.id)" >
          <img  :src="item.img | setWH('128.180')" />
        </div>
        <div class="info_list">
          <h2 @cilck='handleToDetail(item.id)'>
            {{item.nm}}
            <img  v-if="item.version" src="../../assets/maxs.png" />
          </h2>
          <p>
            观众评
            <span class="grade">{{item.sc}}</span>
          </p>
          <p>{{item.star}}</p>
          <p>{{item.showInfo}}</p>
        </div>
        <div class="btn_mall">预售</div>
        <div ref='like'  @tap='rem(index)' 
        class="one" 
        >取消</div>
      </li>
    </ul>
    
  </div>
        <TabBar/>
        <router-view name='detail'/>
    </div>
    
</template>
<script>
import Header from '../../components/Header'
import TabBar from '../../components/TabBar'

export default {
    name:'Myfilm',
    data(){
       return{
           likefilm:[],
           pullDownMsg:'',
           isLoading:false,
       }
    },
    computed:{
    },
    methods:{
      handleToDetail(id){
     this.$router.push('/myfilm/detail/'+id)
     console.log(id);
     
    },
    rem(index){
         function indexOf(index){
           for(var i=0;i<this.likefilm.length;i++){}
         }
    }
    },
    beforeCreate(){},
    activated(){
        // this.likefilm = this.$store.state.likeList
        // var likefilm = window.localStorage.getItem('likefilm')
        // window.localStorage.setItem('likefilm',JSON.stringify(this.likefilm));
        // console.log(this.likefilm); 
        // if(this.likefilm.length<=0){
        //   this.likefilm = JSON.parse( window.localStorage.getItem('likeList'))
        // }
        this.likefilm = this.$store.state.likeList
    },
    mounted(){
        this.$nextTick(()=>{
          if(this.likefilm == ''){
          this.likefilm = JSON.parse( window.localStorage.getItem('likeList'))
        }
        })
        

    },
    components:{
        Header,
        TabBar,
    }
}
</script>
<style scoped>
 #content .movie_body {
   flex: 1;
   overflow: auto;
 }

 .movie_body ul {
   margin: 0 12px;
   overflow: hidden;
 }
 .movie_body ul li {
   position: relative;
   margin-top: 12px;
   display: flex;
   align-items: center;
   border-bottom: 1px #e6e6e6 solid;
   padding-bottom: 10px;
 }
 .movie_body .pic_show {
   width: 64px;
   height: 90px;
 }
 .movie_body .pic_show img {
   width: 100%;
 }
 .movie_body .info_list {
   margin-left: 10px;
   flex: 1;
   position: relative;
 }
 .movie_body .info_list h2 {
   font-size: 17px;
   line-height: 24px;
   width: 150px;
   overflow: hidden;
   white-space: nowrap;
   text-overflow: ellipsis;
 }
 .movie_body .info_list p {
   font-size: 13px;
   color: #666;
   line-height: 22px;
   width: 200px;
   overflow: hidden;
   white-space: nowrap;
   text-overflow: ellipsis;
 }
 .movie_body .info_list .grade {
   font-weight: 700;
   color: #faaf00;
   font-size: 15px;
 }
 .movie_body .info_list img {
   width: 50px;
   position: absolute;
   right: 10px;
   top: 5px;
 }
 .movie_body .btn_mall,
 .movie_body .btn_pre {
   width: 47px;
   height: 27px;
   line-height: 28px;
   text-align: center;
   background-color: yellow;
   color: #333;
   border-radius: 4px;
   font-size: 12px;
   cursor: pointer;
 }
 .movie_body .btn_pre {
   background-color: #3c9fe6;
 }
 .movie_body .pullDown{
    margin: 0;
    padding: 0;
   border: none;
 }

 .movie_body .one {
  position: absolute;
  bottom: 10px;
  right:  3%;
  color: #fff;
  text-align: center;
  font-size: 10px;
  line-height: 25px;
  height: 25px;
  width: 25px;
  border-radius:50%;
  border: 1px solid #3c9fe6; 
  background-color: #ccc;
}

</style>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
