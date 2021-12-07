<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;700&family=Josefin+Slab:ital,wght@0,300;0,400;0,700;1,300&display=swap');

body {
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  font-size: 15px;
  margin: 0;
  padding: 0;
}

#nav {
  padding: 30px;

  a {
    font-family: 'Cinzel',serif;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
