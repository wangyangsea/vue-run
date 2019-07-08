<template>
  <div class="hello">
    <h3 class="title">运行结果</h3>
    <div class="code-box" id="display"></div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'running',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      code: this.value,
      html: '',
      js: '',
      css: '',
      program: null
    }
  },
  watch: {
    value (val) {
      this.code = val
    }
  },
  methods: {
    getSource (source, type) {
      const regex = new RegExp(`<${type}[^>]*>`)
      let openingTag = source.match(regex)
      if (!openingTag) return ''
      else openingTag = openingTag[0]

      return source.slice(
        source.indexOf(openingTag) + openingTag.length,
        source.lastIndexOf(`</${type}>`)
      )
    },
    splitCode () {
      const script = this.getSource(this.code, 'script').replace(
        /export default/,
        'return '
      )
      const style = this.getSource(this.code, 'style')
      const template =
        '<div id="code-running">' +
        this.getSource(this.code, 'template') +
        '</div>'
      this.js = script
      this.css = style
      this.html = template
    },
    buildDom () {
      this.splitCode()
      if (this.html === '' || this.js === '') {
        alert('请在Vue编辑框内输入有效的代码')
        // eslint-disable-next-line semi
        return;
      }
      // eslint-disable-next-line no-new-func
      const common = new Function(this.js)()
      common.template = this.html
      const Template = Vue.extend(common)
      this.program = new Template()
      document.querySelector('#display').appendChild(this.program.$mount().$el)
      if (this.css !== '') {
        const styles = document.createElement('style')
        styles.type = 'text/css'
        styles.innerHTML = this.css
        document.getElementsByTagName('head')[0].appendChild(styles)
      }
    },
    reset () {
      document.getElementById('display').innerHTML = ''
      if (this.program) {
        this.program.$destroy()
      }
      this.program = null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello {
  width: 50%;
  box-sizing: border-box;
  .title {
    margin: 0;
    height: 60px;
    line-height: 60px;
    padding-left: 20px;
    border-bottom: 2px solid #222;
  }
  .code-box {
    padding: 20px;
  }
}
</style>
