import { defineComponent, PropType } from 'vue';
import { ResumeLeft } from '../components/Resume/ResumeLeft';
import s from './ResumePage.module.scss';
export const ResumePage = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <ResumeLeft></ResumeLeft>
        <div class={s.right}>2</div>
      </div >
    )
  }
})
export default ResumePage