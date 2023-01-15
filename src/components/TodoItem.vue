<template>
  <li class="todo-item">
      <input type="checkbox" v-model="complete"  @click="completeCheck(id)" >
       
      <span class="todo-text" :class="{'done' : completed}" v-if="!isEdit">{{title}}</span>
      <input type="text" v-else v-model="newTodo" class="edit-form" @keypress.enter="changeTodo(id)">

      <button class="btn-del" v-if="completed" @click="deleteTodo(id)">Delete</button>
      
      <button class="btn-edit" @click="editTodo" v-if="!isEdit">Edit</button>
      

      <div v-else class="btn-group">
        <button class="btn-change" @click="changeTodo(id)" >Change</button>
        <button class="btn-cancel" @click="cancelTodo" >Cancel</button>
      </div>
  </li>
</template>

<script>
export default {
    name: "TodoItem",
    props: ["id","title","completed"],
    data() {
      return {
        complete: this.completed,
        newTodo: this.title,
        isEdit: false
      }
    },
    methods: {
      completeCheck(id) {
        
        this.$store.commit("changeComplete", {
          complete: !this.complete, 
          id
        });
      },
      deleteTodo(id) {
        this.$store.commit("deleteTodo", id);
        this.$notify({
          type: "error",
          title: 'Successfully deleted',
          text: 'you deleted one todo item',
          duration: 500
        });
      },
      editTodo() {
        this.isEdit = true; 
      },
      cancelTodo() {
        this.isEdit = false;
      },
      changeTodo(id) {
        if(this.newTodo){
          this.isEdit = false;
          this.$store.commit("changeTodo", {id, text: this.newTodo});
          this.$notify({
            type: "info",
            title: 'Successfully changed',
            text: 'you changed one todo item',
            duration: 500
          });
        }
      }
    }
}
</script>

<style>
  .todo-item{
    list-style-type: none;
    margin-bottom: 10px;
  }
  .todo-text {
    margin: 0 2px;
    font-weight: bold;
    font-size: 18px;
    display: inline-block;
    width: 110px;
    word-break: break-all;
  }
  .btn-del {
    border: none;
    padding: 8px 15px;
    background-color: rgb(243, 39, 39);
    color: white;
    border-radius: 10px;
    margin-right: 5px;
  }
  .btn-edit {
    border: none;
    padding: 8px 15px;
    background-color: rgb(243, 192, 26);
    color: white;
    border-radius: 10px;
  }
  .btn-change {
    border: none;
    padding: 8px 15px;
    background-color: rgb(17, 179, 243);
    color: white;
    border-radius: 10px;
    margin-right: 5px;
  }
  .btn-cancel {
    border: none;
    padding: 8px 15px;
    background-color: #dfdede;
    color: black;
    border-radius: 10px;
  }
  .done {
    text-decoration: line-through;
  }

  .edit-form {
        padding: 10px;
        border: none;
        background-color: #dfdede;
        border-radius: 10px;
        margin-right: 10px;
        margin-left: 8px;
        width: 120px;
        
    }

    .edit-form:focus {
        outline: none;
    }
    .btn-group {
          margin-top: 8px;
        }
    

</style>