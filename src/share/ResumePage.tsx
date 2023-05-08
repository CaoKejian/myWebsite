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
      <div>
      </div>
    )
  }
})
export default ResumePage