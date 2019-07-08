<template>
  <div class="toast-box">
    <div class="toast-item" v-for="item in content" :key="item.name">{{item.msg}}</div>
  </div>
</template>
<script>
let count = 0
function uid () {
  return `_uid${count++}`
}
export default {
  name: 'toast',
  data () {
    return {
      content: []
    }
  },
  methods: {
    add (param) {
      console.log(param)
      const item = Object.assign(
        {
          name: uid()
        },
        param
      )
      this.content.push(item)
      const timing = item.time
      setTimeout(() => {
        this.remove(item.name)
      }, timing)
    },
    remove (name) {
      for (let i = 0; i < this.content.length; i++) {
        if (this.content[i].name === name) {
          this.content.splice(i, 1)
          // eslint-disable-next-line semi
          break;
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.toast-box {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 100px;
  z-index: 1000;
  .toast-item {
    padding: 10px 20px;
    box-shadow: 1px 2px 10px 1px #999;
    border-radius: 4px;
    font-size: 12px;
    background: rgba($color: #222, $alpha: 0.85);
    color: #fff;
    margin-bottom: 10px;
  }
}
</style>
