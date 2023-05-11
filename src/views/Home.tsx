import { defineComponent, inject, onMounted, PropType, ref } from 'vue';
import { HomeLeft } from '../share/homeLeft';
import { HomeRight } from '../share/homeRight';
import s from './Home.module.scss';
import '../assets/imgs/1.png'
import { Button } from '../share/Button';
import { TransitionMade } from '../share/TransitionMade';
import createMessage from '../components/Message';
import { Bar, BigBar } from '../components/Resume/Bar';
import { getDateNow, getDateTime } from '../share/Time';
import { getAssetsFile } from '../utils/pushPic';

export const Home = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {

    const currentIndex = ref(0)
    const overflowShow = ref(false)
    const bgImages = [
      `url(${getAssetsFile('1.png')})`,
      `url(${getAssetsFile('2.png')})`,
      `url(${getAssetsFile('3.png')})`,
      `url(${getAssetsFile('4.png')})`,
      `url(${getAssetsFile('5.png')})`,
      `url(${getAssetsFile('6.png')})`,
    ];
    const setPaper = () => {
      currentIndex.value = Math.floor(Math.random() * bgImages.length)
    }
    const { currentTime, bit, week, dayOfWeek, date, monthBit, month, yearBit } = getDateNow()
    createMessage({ type: 'info', message: '欢迎来到我的主页' })
    return () => (<>
      <TransitionMade />
      <div class={s.wrapper} style={`background: ${bgImages[currentIndex.value]};  background-size: cover;`} key={"bgImages[currentIndex.value]"}>
        <Button onClick={setPaper} index={currentIndex.value} >切换壁纸</Button>
        <div class={s.wrapper_seciton}>
          <HomeLeft v-model:show={overflowShow.value}></HomeLeft>
          <HomeRight></HomeRight>
        </div>
      </div>
      {
        overflowShow.value ?
          <div class={s.overflow}>
            <h1>时光胶囊</h1>
            <span>今日已度过了 {currentTime.slice(0, 2)} 小时</span>
            <BigBar process={bit}></BigBar>
            <span>本周已度过了 {dayOfWeek} 天</span>
            <BigBar process={week}></BigBar>
            <span>本月已度过了 {date} 天</span>
            <BigBar process={monthBit}></BigBar>
            <span>今年已度过了 {month} 个月</span>
            <BigBar process={yearBit}></BigBar>
          </div>
          : <div></div>
      }
    </>
    )
  }
})
export default Home;