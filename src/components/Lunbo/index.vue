<template>
   <div class="slide" :mouseover="stop()" :mouseout="move()">
    <div class="slideshow">
      <transition-group tag="ul" name="image">
        <li v-for="(img, index) in imgArray" v-show="index===mark" :key="index">
          <a href="#">
            <img :src='img.url'>
          </a>
        </li>
      </transition-group>
    </div>
    <div class="bullet">
      <span v-for="(item, index) in imgArray" :class="{ 'active':index===mark }"
      @click="change(index)" :key="index"></span>
    </div>
  </div>
</template>

<script>
export default {
    props: {
            picWidth: {
                type: Number,
                default: 590
            }
        },
        data: () => ({
            mark: 0,
            timer: null,
            imgArray: [
      { url: ' http://plf-bucket.zhuishushenqi.com/management/images/20190820/0f76924d79b041a8bf7c8121df6fe140.jpg'},
      { url: 'http://plf-bucket.zhuishushenqi.com/management/images/20190820/e3a9f890cceb4a78892879384f166cd0.jpg'},
      { url: ' http://plf-bucket.zhuishushenqi.com/management/images/20190820/c4fed54241b64dba8f1bfc7f7d5f5df1.jpg'},
      { url: ' http://plf-bucket.zhuishushenqi.com/management/images/20190718/3f95918726994398bda126b882828850.jpg'},

      
        // require('../public/timg4.jpg')
      ]
        }),
methods: {
    autoPlay () {
      this.mark++;
      if (this.mark === this.imgArray.length) {
        this.mark = 0
      }
      
    },
    play () {
      this.timer = setInterval(this.autoPlay, 1500)
    },
    change (i) {
      this.mark = i
    },
    stop () {
      clearInterval(this.timer)
    },
    move () {
      // this.timer = setInterval(this.autoPlay, 1500)
    }
         },
created () {
    this.play()
  }
}
</script>

<style scoped>
.slide {
    width: 100%;
    height: 128px;
    margin: 0 auto;
    /* margin-top: 75px; */
    overflow: hidden;
    position: relative;
  }
  .slideshow {
    width: 1000%;
    height: 128px;
  }
  li {
    width: 100%;
    position: absolute;
  }
  img {
    width: 100%;
    height: 128px;
  }
  .bullet {
    position: absolute;
    width: 100%;
    bottom: 10px;
    margin: 0 auto;
    z-index: 10;
    text-align: center;
  }
  .bullet span {
    width: 20px;
    height: 5px;
    border: 1px solid;
    background: white;
    display: inline-block;
    margin-right: 10px;
  }
  .active {
    background: red !important;
  }
.image-enter-active {
    transform: translateX(0);
    transition: all 1.5s ease;
  }
  .image-leave-active {
    transform: translateX(-100%);
    transition: all 1.5s ease;
  }
  .image-enter {
    transform: translateX(100%);
  }
  .image-leave {
    transform: translateX(0);
  }
</style>