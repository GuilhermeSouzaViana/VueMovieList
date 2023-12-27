<template>
  <div id="app">
    <header>
      <h1> Movie List</h1>
    </header>
    <main>
      <MovieForm />
      <MovieList />
    </main>
  </div>
</template>

<script>
import MovieForm from './components/MovieForm.vue';
import MovieList from './components/MovieList.vue';

export default {
  components: {
    MovieForm,
    MovieList,
  },
};
</script>

<style>

body{
  background-image: url(./assets/cinema.jpg);
  background-repeat: no-repeat;
  background-position: center center;

}

#app {
  text-align: center;
  font-family: 'Arial', sans-serif;
}

header {
  padding: 20px;
  color: #0e0d0d; 
}

h1 {
  margin: 0;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
  margin-top: 20px;
}
</style>

