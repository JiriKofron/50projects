<template>
  <section>
    <h3>Rotating navigation</h3>
      <article class="blogpost" :class="{turning: isTurned}">
        <svg class="blogspot__nav"  @click="isTurned = !isTurned">
          <g>
          <circle  r="80" cx="0" cy="0"></circle>
            <text x="20%" y="60%">ababa</text>
          </g>
        </svg>
        <h4>Some article</h4>
        <p class="blogpost__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img class="blogpost__img" src="https://images.unsplash.com/photo-1640454554012-bece16930865?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Metro station 15th Street black and white Photo by Tyler Sakil on Unsplash"/>
        <p class="blogpost__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </article>
      <div class="hidden" :class="{flying: isTurned}">
        <a href="#" @click="linkClicked">@</a>
      </div>
  </section>
</template>

<script>
export default {
  name: 'RotatingNav',
  data () {
    return {
      isTurned: false
    }
  },
  methods: {
    linkClicked () {
      alert('Přísně tajný objev!')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/style/base";

section {
  position: relative;
}

.turning {
  transform: rotate(-15deg);
  transform-origin: 0 0;
}

.blogpost {
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;
  transition: transform .5s;
  transform-origin: 0 0;
  z-index: 10;

  svg {
    width: 5rem;
    height: 5rem;
    transition: transform .5s;
    transform-origin: center;
    circle {
      fill: $imperial-red;
    }
  }

  h4 {
    font-size: 1.5rem;
    font-family: 'Cinzel', serif;
  }

  &__text {
    text-align: left;
  }

  &__img {
    width: 100%;
    height: auto;
    z-index: 10;
  }
}

.hidden {
  position: absolute;
  left: -10rem;
  bottom: 8rem;
  z-index: 1;
  transition: left .5s;

  a {
    text-decoration: none;
    font-size: 2rem;
    color: $imperial-red;
  }
}

.flying {
  left: 3rem;
}

</style>
