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