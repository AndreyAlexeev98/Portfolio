import Vue from 'vue';
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);



new Vue ({
  el:'#reviews-comp-include',
  template: "#reviews-components",
  methods: {
    previous() {
      document.querySelector('.VueCarousel-navigation-prev').click();
    },
    next() {
      document.querySelector('.VueCarousel-navigation-next').click();
    }
  },
});