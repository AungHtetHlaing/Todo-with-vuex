<template>
  <div  class="todo-list">
    <transition-group enter-active-class=" animate__animated animate__fadeInDown animate__fast" leave-active-class=" animate__animated animate__shakeX animate__faster"  >
        <todo-item v-for="todo in getTodos" :key="todo.id" :id="todo.id" :title="todo.title" :completed="todo.completed"></todo-item>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TodoItem from "./TodoItem.vue";
export default {
    name: "TodoList",
    components: {TodoItem},
    computed: {
        ...mapGetters(["getTodos"])
    }   
}
</script>

<style>
  .todo-list {
    padding: 0;
    margin-top: 5px;
  }
  .no-todo {
    color: rgb(17, 179, 243);
    font-size: 18px;
  }
</style>