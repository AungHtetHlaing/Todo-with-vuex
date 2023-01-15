<template>
  <div>
    <input type="text" class="input-form" v-model="todo" @keypress.enter="add">
    <button class="btn-add" @click="add">Add</button>
  </div>
</template>

<script>
export default {
    name: "AddTodo",
    data() {
        return {
            todo: ""
        }
    },
    methods: {
        add() {
            if(this.todo) {
                let todoItem = {title: this.todo, completed: false};
                this.$store.commit("addTodo", todoItem);
                this.todo = "";
                this.$notify({
                    type: "success",
                    title: 'Successfully created',
                    text: 'you created one todo item',
                    duration: 500
                });
            }
        }
    }
}
</script>

<style>
    .input-form {
        padding: 10px;
        border: none;
        background-color: #dfdede;
        border-radius: 10px;
        margin-right: 10px;
    }
    .input-form:focus {
        outline: none;
    }
    .btn-add {
        border: none;
        padding: 8px 15px;
        background-color: rgb(17, 179, 243);
        color: white;
        border-radius: 10px;
    }
</style>