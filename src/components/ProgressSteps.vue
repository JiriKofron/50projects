<template>
  <section>
    <h3>Progress Steps</h3>
    <article>
      <div
        class="number"
        :class="{active: index === this.step}"
        v-for="(number, index) in numbers"
        :key="index">
        <svg viewBox="-5 -5 110 110">
        <circle r="50" cx="50" cy="50" fill="none" stroke="black" stroke-width="3">
        </circle>
        </svg>
        <div class="number__symbol">{{number}}</div>
      </div>
    </article>
    <div class="controlers">
      <button
        @click="prev"
        class="controlers__previous"
        :disabled="this.step === 0"
        >Prev
      </button>
      <button
        @click="next"
        class="controlers__next"
        :disabled="this.step > 2"
      >Next
      </button>
    </div>
  </section>
</template>

<script>

export default {
  name: 'ProgressSteps',
  data () {
    return {
      step: 0,
      numbers: [
        1, 2, 3, 4
      ],
      prevDisabled: true,
      nextDisabled: false
    }
  },
  methods: {
    prev () {
      console.log('před')
      this.step--
    },
    next () {
      console.log('pak')
      this.step++
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/style/base";

  article {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 2rem;

    .number {
      font-size: 2rem;
      width: 5rem;
      height: 5rem;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      circle {
        stroke: $light-color;
      }

      &__symbol {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $light-color;
      }
    }
  }

  .active {
    color: $imperial-red !important;
    circle {
      stroke: $imperial-red !important;
    }
  }

  .controlers {
    margin: 2rem;

    button {
      width: 5rem;
      margin: 1rem;
      padding: 0.5rem;
      background-color: $imperial-red;
      border: none;
      color: $light-color;
    }
  }
</style>
