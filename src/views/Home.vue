<template>
  <div class="home">
  <TheGuidepost class="home__navigation" />
    <section class="home__content">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import TheGuidepost from '@/views/GuidePost.vue'

export default {
  name: 'Home',
  components: {
    TheGuidepost
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  width: 100%;
  min-width: 320px;
  height: 100vh;
  margin: 0;
  padding: 0;

  &__navigation {
    max-width: 30%;
    width: 25rem;
  }

  &__content {
    width: 80%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #D9C7B8;
    overflow: hidden;
  }
}
</style>
