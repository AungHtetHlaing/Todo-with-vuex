<template>
  <div class="app">
    <notifications/>
    <div>
      <h2 class="title">Let's write Todo <img src="./assets/activities.png" alt="" class="todo-img"></h2>
      <p v-if="total < 1" class="no-todo">There is no todo. Let's write</p>
      <h4 v-else>Todo {{total}} Item{{total > 1 ? "s" : ""}} </h4>
      <add-todo></add-todo>
      <todo-list></todo-list>
    </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import AddTodo from './components/AddTodo.vue';
export default {
  name: "App",
  components: {TodoList,AddTodo},
  computed: {
    total() {
      return this.$store.getters.getTodos.filter(todo => !todo.completed).length
    }
  },
  beforeMount() {
    this.$store.commit('initializeTodos');
  }
}
</script>

<style>
  .app {
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }
  .title {
    color: rgb(17, 179, 243);
      
  }
  .todo-img {
    width: 30px;

  }
</style>