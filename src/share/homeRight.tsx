import axios from 'axios';
import { defineComponent, onMounted, PropType, ref } from 'vue';
import { useRouter } from 'vue-router';
import s from './homeRight.module.scss';
import { getDateNow, getDateTime } from './Time';
import fetchJsonp from 'fetch-jsonp';
import createMessage from '../components/Message';
export const HomeRight = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const router = useRouter()
    const city = ref('')
    const localCity = ref('')
    const stopGet = ref(false)
    const cityTemp = ref({
      air: '',
      wea: '', //天气
      win: '', //风
      tem: '' //温度
    })
    const toWebPage = (url: string) => {
      window.open(url, '_blank');
    }
    const gotoDeatil = (url: string) => {
      router.push(url)
    }
    const handleSearchResults = (data: any) => {
      city.value = data.city
      localStorage.setItem('city', data.city)
    };
    // 获取地理位置（高德）
    const getLocation = () => {
      const localInfo = localStorage.getItem('city')
      if (localInfo !== null) return
      const url = 'https://restapi.amap.com/v3/ip?key=7ef462c39299f921a8a2557ad84c2cb2';
      fetchJsonp(url, { jsonpCallback: 'callback' })
        .then(response => response.json())
        .then(data => handleSearchResults(data))
        .catch(error => createMessage({ type: "error", message: "获取地理位置错误" }))
    }
    const getAppId = () => '99368856'
    const getAppSecret = () => 'yJf63oaQ'
    // 获取位置对应的城市id（易客云）
    const getCityId = async (cityName: string) => {
      const localInfo = localStorage.getItem('appid')
      if (localInfo !== null) return
      const url = `https://tianqiapi.com/api?version=v6&appid=${getAppId()}&appsecret=${getAppSecret()}&city=${cityName}`;
      const response = await fetchJsonp(url, {
        jsonpCallback: 'callback',
      });
      const data = await response.json();
      localStorage.setItem('appid', data.cityid)
      return data.cityid;
    };
    // 获取城市天气（易客云）
    const getWeather = async (cityName: string) => {
      try {
        const currentTimestamp = new Date().getTime();
        const timeStamp = Number(localStorage.getItem('timeStamp'))
        const weatherLocal = localStorage.getItem('weather')
        const diff = (currentTimestamp - timeStamp) / 1000 / 60;
        if (diff > 30) localStorage.removeItem('weather')
        if (weatherLocal !== null) {
          const { win, win_speed, tem, wea } = JSON.parse(weatherLocal)
          Fuvalue(win, win_speed, tem, wea)
          return
        }
        const appidLocal = localStorage.getItem('appid')
        const cityId = await getCityId(cityName);
        const weatherUrl = `https://tianqiapi.com/free/day?appid=${getAppId()}&appsecret=${getAppSecret()}&cityid=${appidLocal || cityId}`;
        const response = await Promise.race<unknown>([
          fetchJsonp(weatherUrl, { jsonpCallback: 'callback' }),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error('请求超时')), 5000)
          ),
        ]);
        const data = await (response as Response).json();
        const { win, win_speed, tem, wea } = data;
        localStorage.setItem('weather', JSON.stringify(data))
        localStorage.setItem('timeStamp', JSON.stringify(currentTimestamp))
        Fuvalue(win, win_speed, tem, wea)
      } catch (error) {
        createMessage({ type: "error", message: "获取天气信息错误" })
      }
    };
    const Fuvalue = (win: string, win_speed: string, tem: string, wea: string) => {
      Object.assign(cityTemp.value, {
        air: win_speed,
        wea: wea,
        win: win,
        tem: tem
      })
    }
    onMounted(() => {
      localCity.value = localStorage.getItem('city') as string;
      getLocation()
      getWeather(localCity.value || city.value)
    })
    const { currentTime, date, month, year } = getDateNow()
    const time = ref(currentTime)
    time.value = new Date().toLocaleTimeString();
    setInterval(() => {
      time.value = new Date().toLocaleTimeString();
    }, 1000)
    const { dayOfWeek } = getDateTime()
    return () => (
      <section class={s.right}>
        <div class={s.info}>
          <div class={s.function}>
            <div class={[s.fn, s.cards]} onClick={() => toWebPage('http://8.130.24.249:8080/#')}>
              <span> -「 山竹记账 」</span>
              <svg class={s.svg}><use xlinkHref='#mangosteen'></use></svg>
            </div>
            <div class={[s.fn, s.cards]} onClick={() => toWebPage('https://hhstu.caokejian.club/#')}>
              <span>{year} 年 0{month} 月 {date} 日 {dayOfWeek}</span>
              <span class={s.time}>{time.value}</span>
              <span>{localCity.value || city.value} {cityTemp.value.wea} {cityTemp.value.tem}°C {cityTemp.value.win} {cityTemp.value.air}</span>
            </div>
          </div>
          <div class={s.links}>
            <div class={s.line}>
              <svg class={s.svg}><use xlinkHref='#content'></use></svg>
              <span>网站列表</span>
            </div>
            <div class={s.lis}>
              <div class={s.el} onClick={() => gotoDeatil('/resume')}>
                <div class={[s.li, s.cards]}><svg class={s.svg}><use xlinkHref='#resume'></use></svg><span>简历</span></div>
              </div>
              <div class={s.el}>
                <div class={[s.li, s.cards]} onClick={() => gotoDeatil('/wrapper')}><svg class={s.svg}><use xlinkHref='#blog'></use></svg>照片墙</div>
              </div>
              <div class={s.el}>
                <div class={[s.li, s.cards]} onClick={() => toWebPage('https://hhstu.caokejian.club')}><svg class={s.svg}><use xlinkHref='#wnhk'></use></svg>唯你黄科</div>
              </div>
              <div class={s.el}>

                <div class={[s.li, s.cards]} onClick={() => toWebPage('https://github.com/CaoKejian')}><svg class={s.svg}><use xlinkHref='#github'></use></svg>Github</div>
              </div>
              <div class={s.el}>

                <div class={[s.li, s.cards]} onClick={() => toWebPage('https://juejin.cn/user/1438634830203342')}><svg class={s.svg}><use xlinkHref='#juejin'></use></svg>掘金</div>
              </div>
              <div class={s.el} onClick={() => gotoDeatil('/search')}>
                <div class={[s.li, s.cards]}><svg class={s.svg}><use xlinkHref='#search'></use></svg>
                  搜索引擎</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
})