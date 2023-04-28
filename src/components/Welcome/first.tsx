import { defineComponent, PropType } from 'vue';
import s from './First.module.scss';
export const First = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <div>111
      </div>
    )
  }
})