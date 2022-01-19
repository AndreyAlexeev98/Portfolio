<template lang='pug'>
  .user-component
    .avatar
      img(:src='userpic')
    .username {{username}}
  </div>
</template>
<script>
export default {
  props: ['userpic','username']
};
</script>
<style lang='postcss' scoped>
  .avatar {
    width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 10px;
  }

  .user-component {
    display: flex;
    align-items: center;
    color: #fff;
  }
</style>