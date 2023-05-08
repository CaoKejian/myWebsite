import { defineComponent, PropType } from 'vue';
import s from './ResumePage.module.scss';
export const ResumePage = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.left}>1</div>
        <div class={s.right}>2</div>
      </div>
    )
  }
})
export default ResumePage