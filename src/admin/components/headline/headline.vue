<template lang='pug'>
  .headline-component
    .content
      slot
    .desc Панель администратора
    button(type='button', @click='').logout Выйти
</template>

<script>

</script>

<style lang='postcss' scoped>
  .headline-component {
    background: linear-gradient(90deg, #3d3d59 0%, #444472 100%);
    padding: 17px 60px;
    display: flex;
    align-items: center;
    justify-content: space-between
  }
  .desc,.logout {
    color: #88889d;
  }
  .logout {
    text-decoration: underline;
    margin-left: auto;
  }
</style>