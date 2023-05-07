import { defineComponent, PropType, watch } from 'vue';
import s from './Button.module.scss';
export const Button = defineComponent({
  props: {
    index: {
      type: Number as PropType<number>,
      default: 0
    },
    onClick: {
      type: Function as PropType<(e: MouseEvent) => void>
    }
  },
  setup: (props, context) => {
    const bgImages = [
      "url('/src/assets/imgs/1.png')",
      "url('/src/assets/imgs/2.png')",
      "url('/src/assets/imgs/3.png')",
      "url('/src/assets/imgs/4.png')",
      "url('/src/assets/imgs/5.png')",
    ];
    const { slots } = context;
    watch(() => props.index, (newIndex) => {
      console.log(newIndex);
    })
    return () => (
      <button class={s.wrapper} onClick={props.onClick} style={`background: ${bgImages[props.index]};  background-size: container;`}>
        {slots.default?.()}
      </button>
    )
  }
})