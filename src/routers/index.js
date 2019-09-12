import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import mineRouter from './mine'
import cinemaRouter from './cinema'
import myfilm from './myfilm'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: 'cryy',
  routes: [
    movieRouter,
    mineRouter,
    ...cinemaRouter,
    myfilm,
    {
      path:'/*',
      redirect:'./movie'
    }
  ]
})
