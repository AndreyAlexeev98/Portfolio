<template lang="pug">
  div.root-wrapper-container
    div.root-container
      template
        header.header-container
          headline
            user(
              userpic='https://picsum.photos/300/300'
              username='Андрей Алексеев'  
            )
        section.tabs-container
          tabs(
            @tabChanged='handleTabChange'
          )
        main.content-container
          router-view
</template>

<script>
import headline from './components/headline'
import user from './components/user'
import tabs from './components/tabs'

export default {
  components: {
    headline, tabs, user
  },
  methods: {
    handleTabChange(tab) {
      this.$router.push(tab.href);
    }
  }
};
</script>
