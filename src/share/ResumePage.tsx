import { defineComponent, PropType, ref, watch } from 'vue';
import { ResumeLeft } from '../components/Resume/ResumeLeft';
import s from './ResumePage.module.scss';
export const ResumePage = defineComponent({
  setup: (props, context) => {
    const isChange = ref(false)
    return () => (
      <div class={s.wrapper}>
        <ResumeLeft v-model:show={isChange.value}></ResumeLeft>
        {isChange.value ?
          <div>1</div> :
          <div class={s.right}>
            <div class={s.resume}></div>
          </div>
        }
      </div >
    )
  }
})
export default ResumePage