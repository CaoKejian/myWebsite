import { defineComponent, PropType } from 'vue';
import s from './homeLeft.module.scss';
export const HomeLeft = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <section class={s.left}>
        <div class={s.info}>
          <div class={s.logo}>
            <svg class={s.svg}><use xlinkHref='#clock'></use></svg>
            <div class={s.yuming}>
              <span class={s.span1}>caokejian</span>
              <span class={s.span2}>.top</span>
            </div>
          </div>
          <div class={[s.description, s.cards]}>
            <svg class={s.svg1}><use xlinkHref='#fmarks'></use></svg>
            <div class={s.text}>
              <p>Hello World !</p>
              <p style={"font-size:0.8em;"}>一个建立于 21 世纪的个人网站，存活于互联网的边缘</p>
            </div>
            <svg class={s.svg2}><use xlinkHref='#lmarks'></use></svg>
          </div>
        </div>

      </section>
    )
  }
})