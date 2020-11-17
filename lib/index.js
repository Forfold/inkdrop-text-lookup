'use babel'
import App from './App'

module.exports = {
  activate() {
    inkdrop.components.registerClass(App)
    inkdrop.layouts.addComponentToLayout(
      'modal',
      'App'
    )
  },
  deactivate() {
    inkdrop.layouts.removeComponentFromLayout(
      'modal',
      'App'
    )
    inkdrop.components.deleteClass(App)
  }
}
