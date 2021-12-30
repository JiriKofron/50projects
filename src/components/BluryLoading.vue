<template>
<section>
  <h3>Blury loading</h3>
  <article class="blury" :style="{filter: `blur(${blur / 2}px)`}">
  </article>
  <div class="blury__counter"> {{ percentage }} %</div>
</section>
</template>

<script>
export default {
  name: 'BluryLoading',
  data () {
    return {
      percentage: 0,
      blur: 100
    }
  },
  watch: {
    percentage: {
      handler (value) {
        if (value < 100) {
          setTimeout(() => {
            this.percentage++
            this.blur--
          }, 25)
        }
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/style/base";

  section {
    position: relative;
  }
  .blury {
    position: relative;
    width: 100%;
    height: 100vh;
    background-image: url("~@/assets/blury-loading/unsplash_bird.jpg");
    background-size: cover;

    &__counter {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3rem;
      color: $light-color;
     }
  }
</style>
