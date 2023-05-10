import { defineComponent, PropType } from 'vue';
import s from './Bar.module.scss';
export const Bar = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
      default: '试添加一个进度条吧~'
    },
    process: {
      type: String as PropType<string>,
      default: "50%"
    }
  },
  setup: (props, context) => {
    return () => (
      <div class={s.normal_info}>
        <span>{props.name}</span>
        <div class={s.bar}>
          <div class={s.process} style={{ width: `${props.process}` }}></div>
        </div>
      </div>
    )
  }
})

export const BigBar = defineComponent({
  props: {
    process: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <div class={s.process}>
        <div class={s.bar} style={{ width: `${props.process}` }}>{props.process}</div>
      </div>
    )
  }
})