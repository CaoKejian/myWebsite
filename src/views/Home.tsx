import { defineComponent, inject, onMounted, PropType, ref } from 'vue';
import { HomeLeft } from '../share/homeLeft';
import { HomeRight } from '../share/homeRight';
import s from './Home.module.scss';
import '../assets/imgs/1.png'
import { Button } from '../share/Button';
import { TransitionMade } from '../share/TransitionMade';
import createMessage from '../components/Message';

export const Home = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const currentIndex = ref(0)
    const bgImages = [
      "url('/src/assets/imgs/1.png')",
      "url('/src/assets/imgs/2.png')",
      "url('/src/assets/imgs/3.png')",
      "url('/src/assets/imgs/4.png')",
      "url('/src/assets/imgs/5.png')",
      "url('/src/assets/imgs/6.png')",
    ];
    const setPaper = () => {
      currentIndex.value = Math.floor(Math.random() * bgImages.length)
    }
    createMessage({ type: 'info', message: '欢迎来到我的主页' })
    return () => (<>
      <TransitionMade />
      <div class={s.wrapper} style={`background: ${bgImages[currentIndex.value]};  background-size: cover;`} key={"bgImages[currentIndex.value]"}>
        <Button onClick={setPaper} index={currentIndex.value} >切换壁纸</Button>
        <div class={s.wrapper_seciton}>
          <HomeLeft></HomeLeft>
          <HomeRight></HomeRight>
        </div>
      </div>
    </>
    )
  }
})
export default Home;