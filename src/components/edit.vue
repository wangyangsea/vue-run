<template>
  <div class="edit-box">
    <div class="btn-box">
      <button @click="handleClick">运行代码</button>
      <button class="edit" @click="edit">重新编辑</button>
    </div>
    <div class="style-box">
      <textarea :disabled="disabled" name="code" placeholder="请在此编写.vue文件" @input="handleChange"></textarea>
    </div>
  </div>
</template>
<script>
export default {
  name: 'edit',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      currentValue: this.value,
      disabled: false
    }
  },
  methods: {
    handleChange (e) {
      const val = e.target.value
      this.$emit('input', val)
    },
    handleClick () {
      this.$emit('running')
      if (this.currentValue) {
        this.disabled = true
      }
    },
    edit () {
      this.disabled = false
    }
  }
}
</script>
<style lang="scss" scoped>
.edit-box {
  width: 50%;
  height: 100%;
  .style-box {
    height: 100%;
    box-sizing: border-box;
    width: 100%;
    background: #222;
    padding-top: 60px;
    margin-top: -60px;
  }
  .btn-box {
    height: 60px;
    position: relative;
    display: flex;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
    background: #3f3f3f;
  }
  textarea {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: #222;
    color: #fff;
    outline: none;
    border: none;
    border-top: 2px solid #222;
    font-size: 14px;
    padding: 10px 20px;
    &:disabled {
      background: #3f3f3f;
    }
  }
  button {
    width: 150px;
    height: 38px;
    border-radius: 4px;
    background: #a7a708;
    color: #fff;
    font-size: 14px;
    border: none;
    outline: none;
    &.edit {
      width: 80px;
      height: 30px;
      background: rgb(199, 39, 39);
    }
  }
}
</style>
