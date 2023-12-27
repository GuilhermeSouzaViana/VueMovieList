<template>
  <div class="movie-form">
    <h2>Adicionar Novo Filme</h2>
    <form @submit.prevent="addMovie">
      <div class="form-group">
        <label for="title">Título:</label>
        <input v-model="title" type="text" id="title" required />
      </div>

      <div class="form-group">
        <label for="director">Diretor:</label>
        <input v-model="director" type="text" id="director" required />
      </div>

      <div class="form-group">
        <label for="year">Ano:</label>
        <input v-model="year" type="number" id="year" required />
      </div>

      <button type="submit">Adicionar Filme</button>
    </form>
  </div>
</template>

<script>
import Movie from "../models/Movie";

export default {
  data() {
    return {
      title: "",
      director: "",
      year: null,
    };
  },
  methods: {
    addMovie() {
      if (this.title && this.director && this.year) {
        const newMovie = new Movie(this.title, this.director, this.year);
        this.$store.dispatch("addMovie", newMovie);
        this.resetForm();
      }
    },
    resetForm() {
      this.title = "";
      this.director = "";
      this.year = null;
    },
  },
};
</script>

<style scoped>
.movie-form {
  width: 35%;
  margin: 20px auto;
  color: #0a0a0a;
  padding: 20px;
  background-color: rgb(8, 8, 8, 0.4);
  border-radius: 20px;
}

h2 {
  text-align: center;
  color: #fff;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
  color: #fff;
}

input {
  background-color: #f1ebdb;
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  box-sizing: border-box;
  border: 1px solid #000000;
  border-radius: 5px;
}

button[type="submit"] {
  margin-top: 10px;
  background-color: #ffc107;
  color: #333;
  border: none;
  border-radius: 5px;
  padding: 12px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #e0a800;
}
</style>
