import { Divider } from 'vant';
import { defineComponent, PropType, reactive, ref, watch } from 'vue';
import s from './homeLeft.module.scss';
import { throttle } from './throttle';
type CardInfo = {
  msg: string
  dayMsg: string
}
export const HomeLeft = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  emits: ['update:show'],
  setup: (props, context) => {
    const currentIndex = ref(-1)
    const isShow = ref(false)
    const state = reactive<{
      cardsInfo: CardInfo
    }>({
      cardsInfo: {
        msg: 'Hello world',
        dayMsg: '一个建立于 21 世纪的个人网站，存活于互联网的边缘'
      }
    })
    const linkMap: Record<number, string> = {
      0: '访问我的github吧',
      1: '请联系我wx：YYik021',
      2: '这是我学习的地方~',
      3: '打开QQ吧！',
    }
    // emit[]
    const cardsClick = throttle(() => {
      isShow.value = !isShow.value
      context.emit('update:show', isShow.value)
      if (isShow.value) {
        Object.assign(state.cardsInfo, {
          msg: 'Hello world',
          dayMsg: '一个建立于 21 世纪的个人网站，存活于互联网的边缘'
        })
        return
      } else {
        Object.assign(state.cardsInfo, {
          msg: '你怎么知道可以点呀',
          dayMsg: '快点去学习吧~'
        })
      }
    }, 1000)
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
            <div class={s.text} onClick={cardsClick}>
              <p>{state.cardsInfo.msg}</p>
              <p style={"font-size:0.8em;"}>{state.cardsInfo.dayMsg}</p>
            </div>
            <svg class={s.svg2}><use xlinkHref='#lmarks'></use></svg>
          </div>
          <div class={s.social}>
            <div class={s.link}>
              <a href="https://github.com/CaoKejian" target="_blank" onMouseover={() => (currentIndex.value = 0)}
                onMouseleave={() => (currentIndex.value = -1)}
              >
                <svg class={[s.svg, s.curson]}><use xlinkHref='#github'></use></svg>
              </a>
              <a href="weixin://" target="_blank" onMouseover={() => (currentIndex.value = 1)}
                onMouseleave={() => (currentIndex.value = -1)}>
                <svg class={[s.svg, s.curson]}><use xlinkHref='#wechat'></use></svg>
              </a>
              <a href="https://space.bilibili.com/1930084978?spm_id_from=333.1007.0.0" target="_blank" onMouseover={() => (currentIndex.value = 2)}
                onMouseleave={() => (currentIndex.value = -1)}>
                <svg class={[s.svg, s.curson]}><use xlinkHref='#bilibili'></use></svg>
              </a>
              <a href="https://im.qq.com/index/" target="_blank" onMouseover={() => (currentIndex.value = 3)}
                onMouseleave={() => (currentIndex.value = -1)}>
                <svg class={[s.svg, s.curson]}><use xlinkHref='#qq'></use></svg>
              </a>
            </div>
            {
              currentIndex.value !== -1 ?
                <div>{
                  linkMap[currentIndex.value]
                }</div> : <div></div>
            }
          </div>
        </div>

      </section>
    )
  }
})