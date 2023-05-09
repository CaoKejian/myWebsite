import { defineComponent, PropType, ref, watch } from 'vue';
import { ResumeLeft } from '../components/Resume/ResumeLeft';
import s from './ResumePage.module.scss';
export const ResumePage = defineComponent({
  setup: (props, context) => {
    const isChange = ref(false)
    const ItemObj = ref([
      {
        name: '山竹记账(2023.01~2023.04)',
        technology: [
          { FrontEnd: 'Vue3+Vite3+Tsx+VueRouter+Pinia+VantUI+Echarts' },
          { BackEnd: 'Rails+PostgreSQL' }
        ],
        OnlineAddress: 'http://8.130.24.249:8080/',
        introduce: ['用Tsx来将一个简单的业务实现复杂化，为了提升自己封装水平以及尝试新语法。', '尽量不使用第三方库，所以封装了许多复用性高、体验好、自由度高的组件。封装了动画、手势Hooks方便用户在移动端更好地使用。', '路由守卫鉴权、JWT，对axios的封装有了更深的了解。', '通过踩坑了解到了vue3推荐使用的Pinia上的ID问题以及短暂持久化存储问题。', '手写了vite插件，封装了SVG Sprites，可以很方便的使用SVG。', '封装了功能比较完善的表单验证。', '通过动态import引入路由、Rollup chunk优化、还有根据定义一个command来使一部分代码不给用户看来实现条件编译三种方式来优化首屏加载、打包速度，并成功提升了20倍以上。', '后端采用Restful Api风格。', '阿里云一键远程部署前后端代码，非常利于前后端联调。', '后端中间件的实现。']
      },
      {
        name: '**后台管理（数据可视化、业务管理、权限管理等）(2022.11~2023.01)',
        technology: [
          { FrontEnd: 'Vue3+Vite+pinia+TypeScript+Element-plus+Echarts' },
          { BackEnd: 'Node.js+Express+Mongodb' }
        ],
        OnlineAddress: '暂无',
        introduce: ['按照后台管理网页的流程开发。其中包含了数据可视化、权限分配、路由动态分配、造轮子（拖拽、节流、防抖等）。 ', '封装全局进度条、svg 、api请求等组件。', '路由守卫鉴权、JWT，对axios的封装有了更深的了解。', '因路由动态引入刷新页面pinia存储为空，调用pinia第三方持久化存储不能使用，所以自己手写了pinia持久化插件。 ', '使用过js-cookie做登录功能。', '使用Express框架做后端开发。']
      },
      {
        name: '**大学校园便利生活系统—uniapp_唯你黄科(2022.10~2023.11)',
        technology: [
          { FrontEnd: 'Vue2+uView' },
          { BackEnd: 'uniCloud+callFunction+云数据库' }
        ],
        OnlineAddress: 'https://hhstu.caokejian.club/',
        introduce: ['补充自己小程序方面的经验，体验uniapp的高效率开发创建了唯你黄科这个项目，为黄河科技学院提供了校园便利和实用功能：博客系统（技术分享、失物招领等）、课程表、待办事项、专业介绍、图书馆指南等多项功能。 ', '因为uniapp不适配等各种不合适原因，封装了柱状图，使得业务更加自由便利的完成。', 'uniCloud、云函数与Vue组合开发，体验到了超快接口的实现。', '调用腾讯地图Api接口，实现校园地图。', '写了完整的UI设计图、设计文档、架构图、用例图、需求分析、工期排署以及设计文档。严格按照软件开发流程体验公司的协作开发。', '三端适配的问题比较多，总是很难匹配到完全适配的状态，所以体会到项目复杂度守恒。']
      }
    ])
    return () => (
      <div class={s.wrapper}>
        <ResumeLeft v-model:show={isChange.value}></ResumeLeft>
        {isChange.value ?
          <div>1</div> :
          <div class={s.right}>
            <div class={s.resume}>
              <div class={s.re1}>
                <span>曹珂俭</span>
                <span>应聘前端工程师</span>
              </div>
              <div class={s.hr}><span>教育经历</span><div class={s.bar}></div></div>
              <div class={s.re2}>
                <span class={s.school}>黄河科技学院</span>
                <span>数据科学与大数据技术（本科）</span>
                <span>2020.09~2024.07</span>
              </div>
              <div class={s.hr}><span>自我介绍</span><div class={s.bar}></div></div>
              <div class={s.re3}>
                <span><svg class={s.svg}><use xlinkHref='#circle'></use></svg>熟悉 HTML5 和 CSS3 标准，能够编写语义化、兼容性良好的页面布局，并能够使用 CSS 预处理器（sass、less）提高样式代码的效率和可维护性。</span>
                <span><svg class={s.svg}><use xlinkHref='#circle'></use></svg>
                  熟练掌握 JavaScript 和 TypeScript，熟练Es6新特性，理解浏览器的工作原理，能够编写高质量、可维护的 JavaScript 代码。
                </span>
                <span><svg class={s.svg}><use xlinkHref='#circle'></use></svg>
                  熟练掌握 Vue2、Vue3 框架及其生态系统，包括 Vue Router、Vuex、Axios 、pinia等，能够使用 Element-Plus 以及其他第三方库来构建高质量的前端应用程序。
                </span>
                <span><svg class={s.svg}><use xlinkHref='#circle'></use></svg>
                  熟悉Vue3+Tsx语法开发项目。
                </span>
                <span><svg class={s.svg}><use xlinkHref='#circle'></use></svg>熟悉前端工程化和模块化开发，了解 Webpack 和 Vite 等打包工具的使用和优化，能够使用模块化和组件化思想来组织前端代码和提高代码复用率。有从0到1开发项目并部署的经验。</span>
                <span><svg class={s.svg}><use xlinkHref='#circle'></use></svg>熟练掌握微信小程序和 uni-app 开发，有使用官方 API 和第三方库来开发高质量的小程序经验。</span>
                <span><svg class={s.svg}><use xlinkHref='#circle'></use></svg>使用过 Node.js 和 MongoDB，了解 Express 等后端框架的使用，能够搭建简单的后端服务和实现数据交互。</span>
                <span><svg class={s.svg}><use xlinkHref='#circle'></use></svg>熟悉Linux基础命令，在校期间读过计算机网络等计算机基础重要书籍。</span>
                <span><svg class={s.svg}><use xlinkHref='#circle'></use></svg>有博客记录习惯，会发布技术教程、项目经验、思考感悟等文章。</span>
                <span><svg class={s.svg}><use xlinkHref='#circle'></use></svg>熟练使用 Git 进行项目管理，了解 Git 工作流程和常用命令，能够使用 GitHub 等平台来管理代码和协作开发。</span>
              </div>
              <div class={s.hr}><span>项目经验</span><div class={s.bar}></div></div>
              <div class={s.re4}>
                {ItemObj.value.map(item => {
                  return <div class={s.mangosteen}>
                    <svg class={s.svg}><use xlinkHref='#circle'></use></svg>
                    <span class={s.name}>{item.name}</span><br />
                    <div class={s.technology}>项目技术栈:</div>
                    <div class={s.technology_item}>
                      &nbsp;&nbsp;前端：{item.technology[0].FrontEnd} <br />
                      &nbsp;&nbsp;后端：{item.technology[1].BackEnd}
                    </div>
                    <div>项目预览:&nbsp;<a href={item.OnlineAddress}>{item.OnlineAddress}</a></div><br />
                    <div>项目介绍:
                      <div class={s.str}>
                        {item.introduce.map(str => {
                          return <><h3>&nbsp;&nbsp;{str}</h3><br /></>
                        })}
                      </div>
                    </div>
                  </div>
                })}
              </div>
              <div class={s.hr}><span>自我评价</span><div class={s.bar}></div></div>
              <div class={s.re5}>
                <div class={s.str}>
                  <div class={s.item}>
                    <svg class={s.svg}><use xlinkHref='#circle'></use></svg>
                    <span>兴趣源于前端，我仍会持续努力</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div >
    )
  }
})
export default ResumePage