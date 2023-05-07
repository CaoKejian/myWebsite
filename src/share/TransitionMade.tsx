import { defineComponent, PropType } from 'vue';
import s from './TransitionMade.module.scss';
export const TransitionMade = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <div class={s.doorwrapper} >
        <div class={[s.door, s.left]}></div>
        <div class={[s.door, s.right]}></div>
      </div>
    )
  }
})