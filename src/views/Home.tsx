import { defineComponent, PropType } from 'vue';
import { HomeLeft } from '../share/homeLeft';
import s from './Home.module.scss';
export const Home = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.wrapper_seciton}>
          <HomeLeft></HomeLeft>
          <section class={s.right}>
            <div class={s.info}>
              <div class={s.function}>
                <div class={[s.fn, s.cards]}>
                  <span> -「 山竹记账 」</span>
                  <svg class={s.svg}><use xlinkHref='#mangosteen'></use></svg>
                </div>
                <div class={[s.fn, s.cards]}>
                  <span> -「 唯你黄科 」</span>
                  <svg class={[s.svg, s.wnhk]}><use xlinkHref='#wnhk'></use></svg>
                </div>
              </div>
              <div class={s.links}>
                <div class={s.line}>
                  <svg class={s.svg}><use xlinkHref='#content'></use></svg>
                  <span>网站列表</span>
                </div>
                <div class={s.lis}>
                  <div class={s.el}>
                    <div class={[s.li, s.cards]}> <svg class={s.svg}><use xlinkHref='#resume'></use></svg>简历</div>
                  </div>
                  <div class={s.el}>
                    <div class={[s.li, s.cards]}>  <svg class={s.svg}><use xlinkHref='#blog'></use></svg>博客</div>
                  </div>
                  <div class={s.el}>
                    <div class={[s.li, s.cards]}>   <svg class={s.svg}><use xlinkHref='#item'></use></svg>项目</div>
                  </div>
                  <div class={s.el}>
                    <div class={[s.li, s.cards]}>  <svg class={s.svg}><use xlinkHref='#github'></use></svg>Github</div>
                  </div>
                  <div class={s.el}>
                    <div class={[s.li, s.cards]}> <svg class={s.svg}><use xlinkHref='#juejin'></use></svg>JueJin</div>
                  </div>
                  <div class={s.el}>
                    <div class={[s.li, s.cards]}> <svg class={s.svg}><use xlinkHref='#blog'></use></svg>
                      暂未开放</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
})
export default Home;