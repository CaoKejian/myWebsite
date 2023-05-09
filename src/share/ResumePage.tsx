import { defineComponent, PropType } from 'vue';
import { Bar } from '../components/Resume/Bar';
import s from './ResumePage.module.scss';
export const ResumePage = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.left}>
          <div class={s.left_top}>
            <div class={s.info_a}>
              <img src="/src/assets/imgs/meself.jpg" alt="曹珂俭" />
              <span class={s.info_name}>曹珂俭</span>
              <div class={s.info_link}>
                <div><svg class={s.svg}><use xlinkHref='#github_a'></use></svg>github</div>
                <div><svg class={s.svg}><use xlinkHref='#juejin'></use></svg>掘金</div>
              </div>
            </div>
          </div>
          <div class={s.left_bottom}>
            <div class={s.normalInfo}>
              <span class={[s.normal]}>基础信息</span>
              <div class={s.normal_info}>学历：本科（应届）</div>
              <div class={s.normal_info}>电话：18339296532</div>
              <div class={s.normal_info}>邮箱：1849201815@qq.com</div>
              <div class={s.normal_info}>专业：数据科学与大数据技术</div>
            </div>
            <hr />
            <div class={s.normalInfo}>
              <span class={[s.normal]}>专业技能</span>
              <Bar name={"Html"} process={'75%'}></Bar>
              <Bar name={"CSS3"} process={'65%'}></Bar>
              <Bar name={"Vue2"} process={'65%'}></Bar>
              <Bar name={"JavaScript"} process={'55%'}></Bar>
              <Bar name={"TypeScript"} process={'25%'}></Bar>
              <Bar name={"Node.js"} process={'25%'}></Bar>
              <Bar name={"Express"} process={'25%'}></Bar>
              <Bar name={"工程化"} process={'25%'}></Bar>
            </div>
            <hr />
            <div class={s.normalInfo}>
              <span class={[s.normal]}>学校经历</span>
              <div class={s.normal_info}>英语4级</div>
              <div class={s.normal_info}>学校-青基智能科技工作室</div>
              <div class={s.normal_info}>全国大学生计算机设计大赛</div>
            </div>
          </div>
        </div>
        <div class={s.right}>2</div>
      </div >
    )
  }
})
export default ResumePage