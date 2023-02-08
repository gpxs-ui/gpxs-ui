//generators/index.js
const componentExists = require('./componentExists')
//componentExists是一个工具方法，用来验证是否已存在同名
module.exports = plop => {
  // 创建一个生成器
  plop.setGenerator('component', {
    description: '新增一个组件',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: '请输入组件名：',
        default: 'Button',
        validate: value => {
          if (/.+/.test(value)) {
            return componentExists(value)
              ? '已经存在相同的容器名或者组件名'
              : true
          }
          return '组件名为必填'
        }
      }
    ],
    actions: () => {
      const actions = [
        {
          type: 'add',
          path: '../src/components/{{properCase componentName}}/index.vue',
          templateFile: './index.vue.hbs',
          abortOnFail: true
        }
      ]
      return actions
    }
  })
}
