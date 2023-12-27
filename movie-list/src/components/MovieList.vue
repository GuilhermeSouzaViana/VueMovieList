<template>
  <div class="movie-list">
    <ul v-if="movies.length === 0">
      <li>Nenhum filme na lista.</li>
    </ul>
    <transition-group name="fade" tag="ul">
      <li v-for="(movie, index) in movies" :key="index">
        <div class="movie-info">
          <span>{{ movie.title }} ({{ movie.year }})</span> 
          <span>Dirigido por: {{ movie.director }}</span>  
          <button @click="removeMovie(index)">Remover</button>
        </div> 
      
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  computed: {
    movies() {
      return this.$store.state.movies;
    },
  },
  methods: {
    removeMovie(index) {
      this.$store.dispatch('removeMovie', index);
    },
  },
};
</script>

<style scoped>
  .movie-list {
    width: 80%;
    margin: 20px auto;
    color: #333;
    padding: 20px;
  }

span{
  margin-left: 5px;
}

  h2 {
    text-align: center;
    color: #050505;
    
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 15px 0;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    text-align: center;
  }

  .movie-info {
    flex: 1;
  }

  button {
    margin-left: 10px;
    padding: 10px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: #e67070;
    color: #333;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  button:hover {
    background-color: #e0a800;
    transform: scale(1.1);
  }
</style>
