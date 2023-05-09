import { defineComponent, PropType, ref, watch } from 'vue';
import { ResumeLeft } from '../components/Resume/ResumeLeft';
import { ResumeRight } from '../components/Resume/ResumeRight';
import s from './ResumePage.module.scss';
export const ResumePage = defineComponent({
  setup: (props, context) => {
    const isChange = ref(false)
    return () => (
      <div class={s.wrapper}>
        <ResumeLeft v-model:show={isChange.value}></ResumeLeft>
        <ResumeRight></ResumeRight>
      </div >
    )
  }
})
export default ResumePage