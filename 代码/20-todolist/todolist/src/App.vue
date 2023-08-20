<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- 添加数据 -->
        <my-header :addTodo="addTodo" />
        <!-- 渲染数据 -->
        <List :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
        <MyFooter
          :todos="todos"
          :checkAllTodo="checkAllTodo"
          :clearAllTodo="clearAllTodo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MyFooter from "./components/MyFooter.vue";
import MyHeader from "./components/MyHeader.vue";
import List from "./components/List.vue";

export default {
  name: "App",
  components: {
    MyFooter,
    MyHeader,
    List,
  },
  data() {
    return {
      // 解决没有本地存储,返回值是null没有length属性的错误问题.
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    // 添加一个todo
    addTodo(todoObj) {
      // 保存接受到的数据
      this.todos.unshift(todoObj);
    },
    // 勾选or取消勾选一个todos
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    // 删除数据
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    // 全选or取消全选
    checkAllTodo(done) {
      this.todos.forEach((todo) => (todo.done = done));
    },
    // 清楚所有已经完成的Todo
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },
  watch: {
    // 监视属性下的函数可以有两个参数,第一个是新值,第二个是旧值
    // 每次变化存储的都是整个权限的todos,而不是其中的一条.
    todos: {
      // 需要使用深度监视,可以监视数组里面的每一项是否发生变化
      deep:true,
      handler(newValue) {
        localStorage.setItem('todos',JSON.stringify(newValue))
      },
    },
  },
};
</script>

<style>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
