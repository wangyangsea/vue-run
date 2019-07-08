<template>
  <div class="test-box">
    <p>这是一个Vue running 测试</p>
    <button @click="clickCount">我被点击了{{count || ''}}</button>
  </div>
</template>
<script>
export default {
  name: 'test',
  data () {
    return {
      count: 0
    }
  },
  methods: {
    clickCount () {
      this.count = this.count + 1
    }
  }
}
</script>
<style scoped>
button {
  width: 200px;
  height: 38px;
  background: #e22626;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 4px;
}
</style>
