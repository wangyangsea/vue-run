import ToastComponent from './toast'

const Toast = {}

Toast.install = function (Vue) {
  const ToastConstrustor = Vue.extend(ToastComponent)
  const instance = new ToastConstrustor().$mount()
  document.body.appendChild(instance.$el)
  Vue.prototype.$toast = (obj) => {
    const param = Object.assign({
      time: 1500
    }, obj)
    console.log(instance)
    instance.add(param)
  }
}

export default Toast
