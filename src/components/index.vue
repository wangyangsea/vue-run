<template>
  <div class="box">
    <edit v-model="code" @running="running"></edit>
    <running :value="code" ref="run"></running>
  </div>
</template>
<script>
import Edit from './edit'
import Running from './running'
export default {
  name: 'index',
  components: {
    Edit,
    Running
  },
  data () {
    return {
      code: ''
    }
  },
  methods: {
    running () {
      this.$refs.run.reset()
      this.$refs.run.buildDom()
    }
  }
}
</script>
<style lang="scss" scoped>
.box {
  height: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
