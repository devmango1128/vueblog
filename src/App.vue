<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Blog</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">목록</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">글쓰기</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container mt-4 mb-4">
    <h5> Vue로 만든 블로그</h5>
  </div>
  <List :blogData="blogData"/>
</template>

<script>
import List from '@/components/List.vue'
import blogData from '@/assets/blog.js'

export default {
  name: 'App',
  data() {
    return {
      blogData 
    }
  },
  components: {
    List
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
