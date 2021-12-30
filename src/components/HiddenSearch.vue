<template>
<section class="search">
  <h3>Hidden Search</h3>
  <article class="search__field">
    <input class="search__field__input" :class="{active: isActive}" placeholder="Search..."/>
    <font-awesome-icon @click="isActive = !isActive" class="search__field__icon" :icon="['fas', 'search']" size="2x" />
  </article>
</section>
</template>

<script>
export default {
  name: 'HiddenSearch',
  data () {
    return {
      isActive: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/style/base";

.search {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;

  &__field {
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: center;

    &__input {
      border: none;
      font-size: 1.2rem;
      margin: 0;
      padding: 0;
      width: 0;
      max-width: 12rem;
      transition: width .5s;
    }

    &__input:focus {
      outline: none;
    }

    &__icon {
      background-color: white;
      cursor: pointer;
      padding: .5rem;
    }
  }
}

.active {
  width: 100%;
  padding: .5rem;
}

</style>
