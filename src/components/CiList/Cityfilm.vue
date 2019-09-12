<template>
<div class="main">
<Header title="本场电影">
  <i class="iconfont icon-right" @touchstart='handleToBack'></i>
</Header>
    <Lunbo/>
  <div class="main-line">
    <div class="left">
      本场电影
    </div>
    <div class="right">更多</div>
  </div>
  <div class="movie_body" ref="movie_body">
      <!-- <Loading v-if='isLoading'/>s -->
      <!-- <Scroller> -->
        <!-- v-else :handleToScroll='handleToScroll' :handleToTouchEnd='handleToTouchEnd' -->   
    <ul>
      <li v-for="item in moveList" :key="item.id">
        <div class="pic_show" @click="handleToDetail(item.id)">
          <img :src="item.img | setWH('128.180')" />
        </div>
        <div class="info_list">
          <h2 @click="handleToDetail(item.id)">
            {{item.nm}}
            <img v-if="item.version" src="../../assets/maxs.png" />
          </h2>
          <p>
            观众评'
            <span class="grade">{{item.sc}}</span>
          </p>
          <p>{{item.star}}</p>
        </div>
        <div class="btn_mall">购票</div>
      </li>
    </ul>
    
    <!-- </Scroller> -->
  </div>
  <router-view name='detail'/>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'

import Header from "../../components/Header";
import TabBar from "../../components/TabBar";
import Lunbo from '../../components/Lunbo'
export default {
  name: "NowPlaying",
  data() {
    return {
      moveList: [],
      pullDownMsg:'',
      isLoading:false,
      prevCityId:-1,
      index:0,
      pic:[]
    };
  },
  activated() {
    
    var cityId = this.$store.state.city.id
    if(this.prevCityId === cityId){
      return;
    }
    this.isLoading= true

    this.axios.get("/api/movieOnInfoList?cityId="+cityId).then(res => {
      var Msg = res.data.msg;
      if (Msg === "ok") {
         this.moveList = res.data.data.movieList;
         this.isLoading = false;
         this.prevCityId = cityId
		
      }

      for(let i =0;i<this.moveList.length;i++){
          this.pic.push(this.moveList[i].img)
          // console.log(this.pic);
          
      }
    });
  },
  methods:{
    handleToDetail(id){
  
     this.$router.push('/cityfilm/detail/'+id)
     console.log(id);
     
    },
    handleToScroll(pos){
      if(pos.y>30){
              this.pullDownMsg = '正在更新中'
            }
    },
    handleToTouchEnd(pos){
       if(pos.y>30){
                this.axios.get("/api/movieOnInfoList?cityId=10").then(res =>{
                  var Msg = res.data.msg;
                   if (Msg === "ok") {
                     this.pullDownMsg = '更新成功'
                     setTimeout(()=>{
                       this.moveList = res.data.data.movieList;
                       this.pullDownMsg=''
                       },1000)


                   }

                })
    }
  },
  handleToBack(){
			this.$router.back()
    },
  changeIndex(index) {
                if (index >= this.pics.length) {
                  index = 0
                }
                this.index = index
            }
  },
  components: {
    Header,
    TabBar,
    Lunbo
  }
};
</script>

<style scoped>
#content .movie_body {
  flex: 1;
  overflow: auto;
}
 .one{
    height: 600px;
}

.main-line{
  position: relative;
  height: 26px;
  line-height: 26px;
  font-weight: 700;
  color: #ef4238;
  background-color: azure;
  border-top: 3px solid #555;
  border-bottom: 3px solid #555;
}
.main-line .left{
  position: absolute;
  top: 0;
  left: 10px;
}
.main-line .right{
  position: absolute;
  top: 0;
  right: 10px;
}
.movie_body ul {
  /* height: 600px; */
  margin: 0 12px;
  overflow: hidden;
}
.movie_body ul li {
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
  background-color: #ef4238;
  color: #fff;
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
</style>