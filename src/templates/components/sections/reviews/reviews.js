import Vue from 'vue';
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);



new Vue ({
  el:'#reviews-comp-include',
  template: "#reviews-components",
  data: () => ({
    slidesPerPage: 1
  }),
  methods: {
    previous() {
      document.querySelector('.VueCarousel-navigation-prev').click();
    },
    next() {
      document.querySelector('.VueCarousel-navigation-next').click();
    },
    calcSlidesPerPage() {
      this.slidesPerPage = 1;
      // this.slidesPerPage = (window.innerWidth <= 768) ? 1 : 2;
    }
  },
  mounted() {
    window.addEventListener('load', this.calcSlidesPerPage);
  }
});