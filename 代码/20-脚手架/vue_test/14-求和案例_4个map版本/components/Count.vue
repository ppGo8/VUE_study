<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <h3>使用getters扩大10倍：{{ bigSum }}</h3>
    <h3>我在{{ school }}学习{{ study }}</h3>
    <select v-model.number="n">
      <!-- 需求:让输入的n是数字类型 -->
      <!-- 方法1:在value前面添加冒号,冒号可以让数字变成数字类型,不加冒号就是字符串类型 -->
      <!-- 方法2:使用修饰符,在v-model后使用number -->
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1, // 用户选择输入,默认1
    };
  },
  computed: {
    ...mapState(["sum", "school", "study"]), // 数组方法
    ...mapGetters(["bigSum"]),
  },
  methods: {
    // increment() {
    //   //  this.$store.dispatch("jia", this.n);
    //   //  不需要在actions处理,因此直接在此处调用commit;简化写法
    //   this.$store.commit("JIA", this.n);
    // },
    // decrement() {
    //   //   this.$store.dispatch("jian", this.n);
    //   this.$store.commit("JIAN", this.n);
    // },
    ...mapMutations({ increment: "JIA", decrement: "JIAN" }),
    // incrementOdd() {
    //   this.$store.dispatch("jiaOdd", this.n);
    // },
    // incrementWait() {
    //   this.$store.dispatch("jiaWait", this.n);
    // },
    ...mapActions({ incrementOdd: "jiaOdd", incrementWait: "jiaWait" }),
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>