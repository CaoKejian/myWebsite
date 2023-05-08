import axios from 'axios';
import { defineComponent, PropType, reactive, ref, watch } from 'vue';
import s from './SearchPage.module.scss';
import { TransitionMade } from './TransitionMade';
import fetchJsonp from 'fetch-jsonp';
import { Button } from './Button';
import { useRouter } from 'vue-router';
import { getDateTime, getDateNow } from './Time';
type SResults = {
  q: string
  sa: string
  type: string
}
export const SearchPage = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const isShow = ref(false)
    const value = ref('')
    const searchResults = ref<SResults[]>([]);
    const { date } = getDateTime()
    const time = getDateNow()
    const currentTime = ref(time)
    currentTime.value = new Date().toLocaleTimeString();
    setInterval(() => {
      currentTime.value = new Date().toLocaleTimeString();
    }, 1000);
    const inputClick = (event: MouseEvent) => {
      event.preventDefault()
    }
    const inputOn = (e: Event) => {
      if (e) {
        searchResults.value = []
      }
      const url = `https://www.baidu.com/sugrec?prod=pc&from=pc_web&json=1&wd=${value.value}`;
      fetchJsonp(url, {
        jsonpCallback: 'cb',
      })
        .then(response => response.json())
        .then(data => {
          handleSearchResults(data);
        })
        .catch(error => {
          alert(error)
        });
    }
    const handleSearchResults = (data: any) => {
      searchResults.value = data.g;
    };

    const gotoSearch = (q?: string) => {
      if (q) {
        setTimeout(() => {
          searchResults.value = []
        }, 500)
        const url = `https://www.baidu.com/s?wd=${q}`;
        window.open(url);
        return
      }
      const url = `https://www.baidu.com/s?wd=${value.value}`;
      window.open(url);
    };
    const closeIsShow = () => {
      value.value = ''
      isShow.value = false
    }
    const router = useRouter()
    return () => (<>
      <TransitionMade />
      <div class={s.wrapper}>
        <Button class={s.button} index={1} onClick={() => router.push('/home')}>去首页</Button>
        <div class={s.center}>
          {
            isShow.value ? <>
              <div class={[s.data_active, s.date]}>
                <span class={s.time}>{currentTime.value}</span>
                <span class={s.month}>{date}</span>
              </div>
              <div class={[s.search, s.active]}>
                <div class={s.ic1}><svg class={s.icon}><use xlinkHref='#baidu'></use></svg></div>
                <input type="text" v-model={value.value}
                  onClick={inputClick}
                  onFocus={() => isShow.value = true}
                  onBlur={closeIsShow}
                  onInput={(e) => inputOn(e)}
                  onKeydown={(e) => e.keyCode === 13 && gotoSearch()}
                  placeholder='想要搜索点什么呢' />
                <div class={s.ic2}><svg class={s.icon}><use xlinkHref='#search'></use></svg></div>
              </div>
              {searchResults.value.length === 0 ?
                <div></div> :
                <div class={s.li}>
                  <ul>
                    {searchResults.value.map(item => <li onClick={() => gotoSearch(item.q)}>{item.q}</li>)}
                  </ul>
                </div>
              }
            </> : <>
              <div class={s.date}>
                <span class={s.time}>{currentTime.value}</span>
                <span class={s.month}>{date}</span>
              </div>
              <div class={s.search}>
                <div class={s.ic1}><svg class={s.icon}><use xlinkHref='#baidu'></use></svg></div>
                <input type="text" v-model={value.value}
                  onClick={inputClick}
                  onFocus={() => isShow.value = true}
                  onBlur={closeIsShow}
                  placeholder='想要搜索点什么呢' />
                <div class={s.ic2} onClick={() => gotoSearch()} ><svg class={s.icon}><use xlinkHref='#search'></use></svg></div>
              </div>
              {searchResults.value.length === 0 ?
                <div></div> :
                <div class={[s.liActive, s.li]}>
                  <ul>
                    {searchResults.value.map(item => <li onClick={() => gotoSearch(item.q)}>{item.q}</li>)}
                  </ul>
                </div>
              }
            </>
          }
        </div>

      </div>
    </>
    )
  }
})
export default SearchPage