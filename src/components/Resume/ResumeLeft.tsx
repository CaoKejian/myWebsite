import { defineComponent, PropType, ref } from 'vue';
import { Button } from '../../share/Button';
import { Bar } from './Bar';
import s from './ResumeLeft.module.scss';
export const ResumeLeft = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  emits: ['update:show'],
  setup: (props, context) => {
    const showLeft = ref(true)
    const onClick = () => {
      showLeft.value = false
      context.emit('update:show', true)
    }
    const onTrue = () => {
      showLeft.value = true
      context.emit('update:show', false)
    }
    return () => (<>
      {showLeft.value ?
        <div class={s.left}>
          <div class={s.left_top}>
            <div class={s.info_a}>
              <img src="/src/assets/imgs/meself.jpg" alt="曹珂俭" />
              <span class={s.info_name}>曹珂俭</span>
              <div class={s.info_link}>
                <div ><svg class={s.svg}><use xlinkHref='#github_a'></use></svg><a href='https://github.com/CaoKejian' target="_blank">github</a></div>
                <div><svg class={s.svg}><use xlinkHref='#juejin'></use></svg><a href='https://juejin.cn/user/1438634830203342' target="_blank">掘金</a></div>
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
            <div class={s.button_bottom}>
              <svg onClick={onClick} class={s.svg}><use xlinkHref='#novisibility'></use></svg>
            </div>
          </div>
        </div>
        : <Button class={s.button} onClick={onTrue}>展开</Button>
      }
    </>
    )
  }
})