import Vue from 'vue/dist/vue.esm.js'
import Router from './router/router'
import Header from './components/header.vue'

var app = new Vue({
  router: Router,
  el: '#app',
  components: {
  'navbar': Header,
  }
});

var messageSwitch = new Vue({
  el: '#messageswitch',
  data: {
    toggle: true
  },
  methods: {
    toggleBtn: function(){
      this.toggle == true ? this.toggle = false : this.toggle = true
    }
  }
})

const VueCarousel  = window.VueCarousel.default
Vue.use(VueCarousel)
var slideContent = new Vue({
  el: '#slideContent',
  components:{
    'carousel': VueCarousel.Carousel,
    'slide': VueCarousel.Slide
  },
});