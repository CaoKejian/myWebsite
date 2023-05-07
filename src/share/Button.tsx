import { defineComponent, PropType } from 'vue';
import s from './Button.module.scss';
export const Button = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const { slots } = context;
    return () => (
      <button class={s.wrapper}>
        {slots.default?.()}
      </button>
    )
  }
})