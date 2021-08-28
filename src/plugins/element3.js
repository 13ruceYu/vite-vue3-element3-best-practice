// element3 全局引入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 按需引入
// import { ElButton, ElInput } from 'element-plus'
// import 'element-plus/dist/index.css'

export default function (app) {
  // 全局
  app.use(ElementPlus)

  // 按需
  // app.use(ElButton)
  // app.use(ElInput)
}