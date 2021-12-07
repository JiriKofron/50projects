<template>
  <section>
<h3>Expanding Cards</h3>
    <article class="container">
        <figure v-for="(card, index) in cards" v-bind:key="card.id" class="card" @click="activeCard(index)" :class="{card__active: card.active === true}">
          <img :src='card.image' :alt="card.title" />
          <div class="card__caption" v-if="card.active === true">
          <figcaption >{{card.title}}</figcaption>
          <a :href="card.authorLink" target="_blank">{{card.author}}</a>
          </div>
        </figure>
    </article>
  </section>
</template>

<script>
export default {
  name: 'ExpandingCards',
  data () {
    return {
      isActive: true,
      cards: [
        {
          id: 1,
          image: 'https://bit.ly/31zdr3G',
          title: 'Troja chatteau',
          author: 'Maxime Vandenberge',
          authorLink: 'https://unsplash.com/@mxvandeberge',
          active: false
        },
        {
          id: 2,
          image: 'https://bit.ly/31uduOw',
          title: 'Tokyo moment',
          author: 'Rafael Hoyos Weht',
          authorLink: 'https://unsplash.com/@rhweht',
          active: false
        },
        {
          id: 3,
          image: 'https://bit.ly/3rJt3MF',
          title: 'Golden gate bridge',
          author: 'Anton Palmqvist',
          authorLink: 'https://unsplash.com/@apq',
          active: false
        },
        {
          id: 4,
          image: 'https://bit.ly/3lJe2Xk',
          title: 'Calm woods',
          author: 'Mathew Schwartz',
          authorLink: 'https://unsplash.com/@cadop',
          active: false
        },
        {
          id: 5,
          image: 'https://bit.ly/3rI2F63',
          title: 'Vietnam cave',
          author: 'Andrew Svk',
          authorLink: 'https://unsplash.com/@andrew_svk',
          active: false
        }
      ]
    }
  },
  methods: {
    activeCard (id) {
      for (const item of this.cards) {
        item.active = item.id === id + 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  h3 {
    font-family: 'Cinzel', serif;
    font-size: 2rem;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;

    .card {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 1;
      width: 15%;
      height: 40rem;
      margin: 0 1rem;
      padding: 0;
      overflow: hidden;
      cursor: pointer;
      transition: width .5s ease;
      border-radius: 2rem;
      position: relative;

      &__active{
        flex-shrink: 0;
        width: 60%;
      }

      img:hover {
        transform: scale(1.1);
        filter: blur(0.2rem);
      }

      &__caption {
        background-color: rgba(darkgrey, .5);
        position: absolute;
        z-index: 10;
        left: 1rem;
        bottom: 5rem;
        padding: 0.5rem 1rem;
        box-shadow: 0 0 5px darkgrey;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
      }

      figcaption {
        text-align: center;
        color: whitesmoke;
        font-size: 2rem;
      }

      a {
        font-family: 'Josefin Slab', serif;
        color: whitesmoke;
        text-decoration: none;
        font-size: 1.2rem;

        &:visited {
          text-decoration: none;
        }
      }

    }
  }

</style>
