<template>
  <aside>
    <h2>Guidepost</h2>
     <nav class="nav">
        <router-link v-for="project in projectList" v-bind:key="project.id" :to="project.route">{{project.name}} </router-link>
     </nav>
  </aside>
</template>

<script>

export default {
  name: 'GuidePost',
  data () {
    return {
      projectList: [
        {
          route: '/expanding-cards',
          name: 'Expanding Cards',
          id: 1
        },
        {
          route: '/progress-steps',
          name: 'Progress Steps',
          id: 2
        },
        {
          route: '/rotating-nav',
          name: 'Rotating navigation',
          id: 3
        },
        {
          route: 'hidden-search',
          name: 'Hidden search',
          id: 4
        },
        {
          route: 'blury-loading',
          name: 'Blury loading',
          id: 5
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/style/base";

aside {
  background-color: $imperial-red;
}

h2 {
    font-family: 'Cinzel', serif;
    color: $light-color;
}

.nav {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
</style>
