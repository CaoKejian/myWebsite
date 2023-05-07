import { defineComponent, PropType } from 'vue';
import { HomeLeft } from '../share/homeLeft';
import { HomeRight } from '../share/homeRight';
import s from './Home.module.scss';
export const Home = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const bgImages = [
      '../assets/imgs/1.png',
      '../assets/imgs/2.png',
      '../assets/imgs/3.png',
      '../assets/imgs/4.png',
      '../assets/imgs/5.png',
    ];
    return () => (
      <div class={s.wrapper}>
        <div class={s.wrapper_seciton}>
          <HomeLeft></HomeLeft>
          <HomeRight></HomeRight>
        </div>
      </div>
    )
  }
})
export default Home;