module.exports = function (plop) {
  // 创建一个生成器
  plop.setGenerator('component', {
    description: '新增一个公共组件', //描述，在终端里生成器后面显示的内容
    prompts: [], // 提示，用于捕获用户输入
    actions: [] // 行为，具体执行的内容
  })
}
