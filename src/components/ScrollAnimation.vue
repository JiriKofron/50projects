<template>
<section class="scroll-animation">
  <h3>Scroll Animation</h3>
  <div class="scroll-wrapper">
    <div class="scroll-item"></div>
    <div class="scroll-item"></div>
    <div class="scroll-item"></div>
    <div class="scroll-item"></div>
    <div class="scroll-item"></div>
    <div class="scroll-item"></div>
    <div class="scroll-item"></div>
    <div class="scroll-item"></div>
    <div class="scroll-item"></div>
    <div class="scroll-item"></div>
    <div class="scroll-item"></div>
    <div class="scroll-item"></div>
  </div>
</section>
</template>

<script>
export default {
  name: 'ScrollAnimation'
}
</script>

<style lang="scss" scoped>
body {
  overflow: initial !important;
}

.scroll-wrapper, .scroll-animation {
  width: 100%;
  height: 3000px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .scroll-item {
    margin: 1rem 0;
    width: 20rem;
    height: 10rem;
    background: white;
    border-radius: 1rem;
  }
}

</style>
