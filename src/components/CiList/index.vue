<template>
  <div class="cinema_body">
    <Loading v-if="isLoading"/>
    <Scroller v-else>
    <ul>
      <li v-for='item in cinemaList' :key='item.id'>
        <div>
          <span @tap='add'>{{item.nm}}</span>
          <span class="q">
            <span class="price">{{item.sellPrice}}</span> 元起
          </span>
        </div>
        <div class="address">
          <span>{{item.addr}}</span>
          <span>{{item.distance}}</span>
        </div>
        <div class="card">
          <div :class="key | classCard" v-for='(num,key) in item.tag' v-if="num===1" :key='key'>{{key | formatCard}}</div>
        </div>
      </li>
    </ul>
    </Scroller>
    
  </div>
</template>

<script>
import Ccity from '../Down/Ccity.vue'
export default {
  name:'CiList',
  data(){
    return{
       cinemaList:[],
       isLoading:true,
       prevCityId:-1
      
    }
  },
  
  activated(){
    var cityId = this.$store.state.city.id
    if(this.prevCityId === cityId){
      return;
    }
    this.isLoading= true
    
    
    this.axios.get('/api/cinemaList?cityId='+cityId).then((res)=>{
      var msg = res.data.msg
      if(msg==='ok'){
         this.cinemaList = res.data.data.cinemas
         this.isLoading=false
         this.prevCityId = cityId
      }
    })
  },
  methods:{
    add(){
     this.$router.push({
       path:'/cityfilm'
     })
    },
  },
  filters:{
    formatCard(key){
        var card =[
          {key:'allowRefund',value:'改签'},
          {key:'endorse',value:'退'},
          {key:'sell',value:'折扣卡'},
          {key:'snack',value:'小吃'},
        ]

        for(var i=0;i<card.length;i++){
                if(card[i].key===key){
                  return card[i].value
                }
        }
        return '';
    },
    classCard(key){
      var card =[
          {key:'allowRefund',value:'bl'},
          {key:'endorse',value:'bl'},
          {key:'sell',value:'or'},
          {key:'snack',value:'or'},
        ]

        for(var i=0;i<card.length;i++){
                if(card[i].key===key){
                  return card[i].value
                }
        }
        return '';
    }
  }
};
</script>

<style scoped>
#content .cinema_body {
  flex: 1;
  overflow: auto;
}
.cinema_body ul {
  padding: 20px;
}
.cinema_body li {
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 20px;
}
.cinema_body div {
  margin-bottom: 10px;
}
.cinema_body .q {
  font-size: 11px;
  color: #f03d37;
}
.cinema_body .price {
  font-size: 18px;
}
.cinema_body .address {
  font-size: 13px;
  color: #666;
}
.cinema_body .address span:nth-of-type(2) {
  float: right;
}
.cinema_body .card {
  display: flex;
}
.cinema_body .card div {
  padding: 0 3px;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  color: red;
  border: 1px solid red;
  font-size: 13px;
  margin-right: 5px;
}
.cinema_body .card div.or {
  color: #f90;
  border: 1px solid #f90;
}
.cinema_body .card div.bl {
  color: #589daf;
  border: 1px solid #589daf;
}

/* .one{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    
}
.move-enter,.move-leave-to{
    transform: translateY(-100%);
}
.move-enter-active,.move-leave-active{
    transition: all .5s;
}
.move-enter-to,.move-leave{
    transform: translateY(100%)
} */
</style>