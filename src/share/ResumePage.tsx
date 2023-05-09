import { defineComponent, PropType, ref, watch } from 'vue';
import createMessage from '../components/Message';
import { ResumeLeft } from '../components/Resume/ResumeLeft';
import { ResumeRight } from '../components/Resume/ResumeRight';
import s from './ResumePage.module.scss';
import { TransitionMade } from './TransitionMade';
export const ResumePage = defineComponent({
  setup: (props, context) => {
    const isChange = ref(false)
    createMessage({ type: 'info', message: "欢迎来到我的简历" })
    return () => (
      <div class={s.wrapper} >
        <TransitionMade />
        <ResumeLeft v-model:show={isChange.value}></ResumeLeft>
        <ResumeRight isChange={isChange.value}></ResumeRight>
      </div >
    )
  }
})
export default ResumePage