<template>
  <section class="split">
    <h3>Split landing page</h3>
    <div class="split-wrapper">
      <div class="split-item split-item--one">
        <button>Button one</button>
      </div>
      <div class="split-item split-item--two">
        <button>Button two</button>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'SplitLandingPage'
}
</script>

<style lang="scss" scoped>
@import "./src/style/base";

.split-wrapper {
  width: 100%;
  height: 90vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.split-item {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 2s height;

  &--one {
    background: $light-color;

    &:hover {
      height: 100%;
    }
  }

  &--two {
    background: $dark-blue;

    &:hover {
      height: 100%;
    }
  }

  button {
    background: transparent;
    color: $imperial-red;
    font-size: 2.2rem;
    border: 3px solid $imperial-red;
    border-radius: 0.5rem;
    padding: 1rem;
  }
}
</style>
