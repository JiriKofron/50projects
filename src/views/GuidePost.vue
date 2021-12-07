<template>
  <aside>
    <h2>Guidepost</h2>
     <nav>
        <router-link v-for="project in projectList" v-bind:key="project.id" :to="project.route">{{project.name}} </router-link>
     </nav>
  </aside>
</template>

<script>
import TheExpandingCards from '@/components/ExpandingCards.vue'

export default {
  name: 'GuidePost',
  components: [TheExpandingCards],
  data () {
    return {
      projectList: [
        {
          route: '/expanding-cards',
          name: 'Expanding Cards',
          id: 1
        }
      ]
    }
  }
}
</script>

<style scoped>
aside {
  background-color: #F2CD5C;
}
  h2 {
    font-family: 'Cinzel', serif;
  }
</style>
