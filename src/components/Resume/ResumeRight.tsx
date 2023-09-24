import { computed, defineComponent, onMounted, onUnmounted, PropType, ref } from 'vue';
import { Button } from '../../share/Button';
import s from './ResumeRight.module.scss';
export const ResumeRight = defineComponent({
  props: {
    isChange: {
      type: Boolean as PropType<boolean>
    }
  },
  setup: (props, context) => {
    const isShowButton = ref(false)
    const handleScroll = () => {
      const windowTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const triggerDistance = windowHeight / 2;
      isShowButton.value = windowTop > triggerDistance;
    };
    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });
    const returnTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const ItemObj = ref([
      {
        name: '交作业啦(2023.07~至今)',
        introduct: '针对学生与教师的一款作业提交与发布平台、设计权限控制、文件提交与下载、提交作业与批改等功能模块。添加数据分析大模块，进行对用户行为的分析与预测。',
        technology: [
          { FrontEnd: 'Vue3、Vite3、Tsx、Axios、VueRouter、Pinia、VantUI、Echarts' },
          { port: 'React、React Router、hooks、sass' },
          { BackEnd: 'Express、mongoDB、mocha、Python(Flask)' },
          { server: 'COS、CosCli、cdn、Bash脚本、nginx、ubuntu' },
        ],
        OnlineAddress: 'http://8.130.24.249:8080/',
        introduce: ['封装复用性高的组件，如：表单、表单验证、遮罩层、消息提示等；Tabs、Main等layout；及手势、鼠标滚动、一键复制hooks。', '使用路由守卫进行权限控制;封装请求以及请求拦截器。', '路由守卫鉴权、JWT，对axios的封装有了更深的了解。', '使用Pinia状态管理库封装组件，请求用户信息。', '使用CDN、减少网络请求、Rollup chunk、动态路由来优化首屏加载速度。', '使用Echarts来配合数据分析的可视化界面。', '使用jwt校验登录，并进行全局鉴权和续期', '使用mocha、chai、mongodb-memory-server进行单元测试。', 'nodemailer结合express实现验证码、提醒及反馈服务', '自动化部署Bash脚本，一键部署及同步数据库至远端。']
      },
      {
        name: '山竹记账(2023.01~2023.04)',
        introduct: '个性化emoji标签、可视化收入与支出来以简单直观的方式记录用户的财务信息。无论是食品、娱乐、交通还是其他任何类型的开支，您都可以创建相应的标签，并将相关的账目与之关联。',
        technology: [
          { FrontEnd: 'Vue3、Vite3、Tsx、VueRouter、Pinia、VantUI、Echarts' },
          { port: '' },
          { BackEnd: 'Rails、PostgreSQL' },
          { server: 'ubuntu、Bash脚本、nginx、docker' },
        ],
        OnlineAddress: 'http://8.130.24.249:8080/',
        introduce: ['使用Vue3+TSX+vite3开发。', '封装了动画、表单验证、手势Hooks方便用户在移动端更好地使用。', '使用CSS Modules使CSS模块化、CSS层叠样式表产生CSS全局变量', '使用 JWT 进行登录鉴权，并用axios的拦截器携带token。', '使用Pinia状态管理库封装组件，请求用户信息。', '制作vite插件，封装了SVG Sprites，优化了SVG加载。', '通过动态import引入路由、Rollup chunk优化来优化首屏加载、打包速度，并成功提升了20倍以上。', '引入Echarts图标，可视化的展现用户的收支情况。', '使用vue-router进行路由鉴权，添加路由白名单。', '使用axios拦截器自制Mock数据。', '后端使用Rails,通过Docker一键部署前后端代码。', '使用Rails的Actionmailer模块结合qq邮箱完成验证码登陆功能。', '使用JWT进行登录鉴权并封装JWT中间件自动处理每次请求头中的JWT。']
      },
      {
        name: 'React大屏可视化(2023.04~2023.04)',
        introduct: '这个项目是我在学习前端可视化与 echarts 时，仿照方应杭的开源项目制作而成的。页面布局使用了 Grid 和 Flex 布局，为了适应所有屏幕，我使用了动态 rem 方案。项目中包含的图例有柱形图、折线图、饼图、地图和表格等，并且所有图例都可以实时更新数据,并辅以动画交互。',
        technology: [
          { FrontEnd: 'React、ReactRouter、Echarts' },
          { port: '' },
          { BackEnd: '' },
          { server: 'COS' },
        ],
        OnlineAddress: 'https://rs.caokejian.club/',
        introduce: []
      },
      {
        name: '**校园生活小程序（博客系统、AI智能审核文章后台）(2022.10~2023.11)',
        introduct: '一款便于大学生活的小程序（内含博客系统、AI智能文章审核系统以及众多小模块功能），用来提升学生的时间安排、工作效率等。',
        technology: [
          { FrontEnd: 'Vue2、uView' },
          { port: '' },
          { BackEnd: 'uniCloud、callFunction、云数据库' },
          { server: 'uniapp后台、腾讯云' },
        ],
        OnlineAddress: 'https://hhstu.caokejian.club/',
        introduce: ['封装了柱状图，使得业务更加自由便利的完成。 ', 'uniCloud、云函数与Vue组合开发，体验到了超快接口的实现。', '调用腾讯地图Api接口，实现校园地图。', '写了完整的UI设计图、设计文档、架构图、用例图、需求分析、工期排署以及设计文档。严格按照软件开发流程体验公司的协作开发。']
      }
    ])
    const re3 = () => {
      return (
        <div class={s.re3}>
          <span><svg class={s.svg}><use xlinkHref='#circle'></use></svg>熟练vue3+TSX/Template写法、vue2及其生态（vue-Router、Vuex、Axios等）</span>
          <span><svg class={s.svg}><use xlinkHref='#circle'></use></svg>
            熟练React、React Router;熟悉Redux、Hooks的写法
          </span>
          <span><svg class={s.svg}><use xlinkHref='#circle'></use></svg>
            熟练JS及Es6语法；熟悉Ts；熟练使用css module开发，了解css3
          </span>
          <span><svg class={s.svg}><use xlinkHref='#circle'></use></svg>
            有微信小程序及uni-app框架开发经验，有比赛获奖记录
          </span>
          <span><svg class={s.svg}><use xlinkHref='#circle'></use></svg>了解 Webpack 和 Vite 等打包工具的使用和优化。熟悉第三方库的使用，如：Ant Design、Echarts</span>
          <span><svg class={s.svg}><use xlinkHref='#circle'></use></svg>熟悉node.js(Express框架)、python(Flask框架)，能够实现基本的服务端；熟悉mongoDB数据库</span>
          <span><svg class={s.svg}><use xlinkHref='#circle'></use></svg>使用过 Node.js 和 MongoDB，了解 Express 等后端框架的使用，能够搭建简单的后端服务和实现数据交互。</span>
          <span><svg class={s.svg}><use xlinkHref='#circle'></use></svg>熟悉Linux基本命令，有<span class={s.action}>Bash脚本(shell)</span>、<span class={s.action}>npm插件</span>有一定的了解；<span class={s.action}>前后端自动化部署</span>有实践经验；了解计算机网络</span>
          <span><svg class={s.svg}><use xlinkHref='#circle'></use></svg>熟练使用Git进行项目管理，了解Git工作流程和常用命令及<span class={s.action}>提交规范。</span></span>
          <span><svg class={s.svg}><use xlinkHref='#circle'></use></svg>社区活跃记录：<a class={[s.action, s.a]} href='https://juejin.cn/user/1438634830203342/posts' target='_blank'>博客</a>、<a href='https://github.com/CaoKejian' target='_blank' class={[s.action, s.a]}>github</a>、<a href='https://space.bilibili.com/1930084978?spm_id_from=333.1007.0.0' target='_blank' class={[s.action, s.a]}>bilibili</a> </span>
        </div>
      )
    }
    const work = ref([
      {
        name: '弹层落地页',
        technology: ['React、ReactHooks、React-Router、Ant-Design、Mobx'],
        introduce: ['负责对接页面的开发与维护'],
        get: ['了解团队开发模式和规范，对webpack的v4升级至v5.8.0有一定的经验。']
      },
      {
        name: '媒体后台',
        technology: ['React、ReactHooks、React-Router、Ant-Design、Mobx'],
        introduce: ['负责日常需求，例如：改变出价方式、基于antd组件完成部分组件更改'],
        get: ['补充了B端产品的开发经验，熟悉了antd组件在项目中的使用。']
      },
      {
        name: '火眼监控',
        technology: ['React、ReactHooks、React-Router、Ant-Design、Echarts'],
        introduce: ['负责维护实时数据模块的图表及组件的更改'],
        get: ['更加熟悉了Echarts在大型项目的多样性、自定义。']
      },
      {
        name: 'jssdk发布平台',
        technology: ['React、unocss、vite、Ant-Design、koa'],
        introduce: ['负责前端界设计与前后端联调'],
        get: ['了解React+vite+unocss的简便开发，去熟悉企业项目从0开始的规范。']
      }
    ])
    return () => (<>
      {props.isChange ?
        <div class={[s.right, s.active]}>
          <div class={s.resume}>
            <div class={s.re1}>
              <span>曹珂俭</span>
              <span>应聘前端工程师</span>
            </div>
            <div class={s.hr}><span>教育经历</span><div class={s.bar}></div></div>
            <div class={s.re2}>
              <span class={s.school}>黄河科技学院</span>
              <span>数据科学与大数据技术(本科)</span>
              <span>2020.09~2024.07</span>
            </div>
            <div class={s.re2}>
              <span style={{ fontWeight: 'bold' }}>中国大学生计算机设计大赛</span>
              <span>国赛二等奖</span>
            </div>
            <div class={s.re2}>
              <span style={{ fontWeight: 'bold' }}>英语</span>
              <span>CET-4</span>
            </div>
            <div class={s.hr}><span>自我介绍</span><div class={s.bar}></div></div>
            {re3()}
            <div class={s.hr} ><span>工作经验</span><div class={s.bar}></div></div>
            <div class={s.work}>
              <h1>杭州**集团（2023-7~至今）</h1>
              <div style={{margin:'0.4rem 0'}}>职位：前端实习生</div><br />
              {
                work.value.map((item,index) => {
                  return <div key={index} style={{margin:'0.2rem'}}>
                    <div style={{margin:'0.1rem 0'}}><svg class={s.svg}><use xlinkHref='#circle'></use></svg>
                    {item.name}</div><br />
                    <div style={{margin:'0.1rem 1rem'}}>
                      技术栈：{item.technology}
                    </div><br />
                    <div style={{margin:'0.1rem 1rem'}}>
                      职　责：{item.introduce}
                    </div><br />
                    <div style={{margin:'0.1rem 1rem'}}>
                      收　货：{item.get}
                    </div><br />
                  </div>
                })
              }
            </div>
            <div class={s.hr} ><span>项目经验</span><div class={s.bar}></div></div>
            <div class={s.re4}>
              {ItemObj.value.map(item => {
                return <div class={s.mangosteen}>
                  <svg class={s.svg}><use xlinkHref='#circle'></use></svg>
                  <span class={s.name}>{item.name}</span><br />
                  <div style={{ marginTop: '1rem' }}>项目介绍：</div>
                  <div class={s.item_introduct}>&nbsp;&nbsp;{item.introduct}</div>
                  <div class={s.technology}>项目技术:</div>
                  <div class={s.technology_item}>
                    &nbsp;&nbsp;前端：{item.technology[0].FrontEnd} <br />
                    &nbsp;&nbsp;接口文档：{item.technology[1].port} <br />
                    &nbsp;&nbsp;后端：{item.technology[2].BackEnd}<br />
                    &nbsp;&nbsp;服务：{item.technology[3].server}
                  </div>
                  <div>项目预览:&nbsp;<a href={item.OnlineAddress}>{item.OnlineAddress}</a></div><br />
                  <div>项目职责:
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
        </div> :
        <div class={s.right}>
          <div class={s.resume}>
            <div class={s.re1}>
              <span>曹珂俭</span>
              <span>应聘前端工程师</span>
            </div>
            <div class={s.info}>
              <div class={s.list}>
                <span><svg class={s.svg}><use xlinkHref='#myHome'></use></svg><span class={s.link}>https://caokejian.club (个人网页)</span></span>
                <span><svg class={s.svg}><use xlinkHref='#myPhone'></use></svg><span class={s.link}>18339296532 (联系方式)</span></span>
                <span><svg class={s.svg}><use xlinkHref='#myEmail'></use></svg><span class={s.link}>1849201815@qq.com (邮箱)</span></span>
                <span><svg class={s.svg}><use xlinkHref='#myGithub'></use></svg><span class={s.link}>https://github.com/CaoKejian (github活跃)</span></span>
                <span><svg class={s.svg}><use xlinkHref='#myBlog'></use></svg><span class={s.link}>https://juejin.cn/user/1438634830203342 (博客)</span></span>
                <span><svg class={s.svg}><use xlinkHref='#myBilibili'></use></svg><span class={s.link}>https://space.bilibili.com/1930084978?spm_id_from=333.1007.0.0 (b站)</span></span>
              </div>
            </div>
            <div class={s.hr}><span>教育经历</span><div class={s.bar}></div></div>
            <div class={s.re2}>
              <span class={s.school}>黄河科技学院</span>
              <span>数据科学与大数据技术(本科)</span>
              <span>2020.09~2024.07</span>
            </div>
            <div class={s.re2}>
              <span style={{ fontWeight: 'bold' }}>中国大学生计算机设计大赛</span>
              <span>国赛二等奖</span>
            </div>
            <div class={s.re2}>
              <span style={{ fontWeight: 'bold' }}>英语</span>
              <span>CET-4</span>
            </div>
            <div class={s.hr}><span>自我介绍</span><div class={s.bar}></div></div>
            {re3()}
            <div class={s.hr} ><span>工作经验</span><div class={s.bar}></div></div>
            <div class={s.work}>
              <h1>杭州**集团（2023-7~至今）</h1>
              <div style={{margin:'0.4rem 0'}}>职位：前端实习生</div><br />
              {
                work.value.map((item,index) => {
                  return <div key={index} style={{margin:'0.2rem'}}>
                    <div style={{margin:'0.1rem 0'}}><svg class={s.svg}><use xlinkHref='#circle'></use></svg>
                    {item.name}</div><br />
                    <div style={{margin:'0.1rem 1rem'}}>
                      技术栈：{item.technology}
                    </div><br />
                    <div style={{margin:'0.1rem 1rem'}}>
                      职　责：{item.introduce}
                    </div><br />
                    <div style={{margin:'0.1rem 1rem'}}>
                      收　货：{item.get}
                    </div><br />
                  </div>
                })
              }
            </div>
            <div class={s.hr} ><span>项目经验</span><div class={s.bar}></div></div>
            <div class={s.re4}>
              {ItemObj.value.map(item => {
                return <div class={s.mangosteen}>
                  <svg class={s.svg}><use xlinkHref='#circle'></use></svg>
                  <span class={s.name}>{item.name}</span><br />
                  <div style={{ marginTop: '1rem' }}>项目介绍：</div>
                  <div class={s.item_introduct}>&nbsp;&nbsp;{item.introduct}</div>
                  <div class={s.technology}>项目技术:</div>
                  <div class={s.technology_item}>
                    &nbsp;&nbsp;前端：{item.technology[0].FrontEnd} <br />
                    &nbsp;&nbsp;接口文档：{item.technology[1].port} <br />
                    &nbsp;&nbsp;后端：{item.technology[2].BackEnd}<br />
                    &nbsp;&nbsp;服务：{item.technology[3].server}
                  </div>
                  <div>项目预览:&nbsp;<a href={item.OnlineAddress}>{item.OnlineAddress}</a></div><br />
                  <div>项目职责:
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
      {isShowButton.value ?
        <Button class={s.button} index={100} onClick={returnTop}>回到<br />顶部</Button>
        : <div></div>
      }
    </>
    )
  }
})