<template>
  <li>
    <label>
      <!-- change事件也可以,表单中的value元素发生变化 -->
      <input
        type="checkbox"
        :checked="todo.done"
        @click="handleCheck(todo.id)"
      />
      <!-- 不建议v-model的方式,有点违背原则：修改props -->
      <!-- 只不过Vue检测不到v-model修改的props数据 -->
      <!-- <input
        type="checkbox"
        v-model="todo.done"
        @click="handleCheck(todo.id)"
      /> -->
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: ["todo", "checkTodo", "deleteTodo"],
  methods: {
    // 勾选
    handleCheck(id) {
      this.checkTodo(id);
    },
    // 删除
    handleDelete(id) {
      if (confirm("确认删除吗")) {
        this.deleteTodo(id);
      }
    },
  },
};
</script>

<style scope>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
}
</style>