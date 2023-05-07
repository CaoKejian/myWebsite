import { defineComponent, PropType, ref } from 'vue';
import s from './SearchPage.module.scss';
import { TransitionMade } from './TransitionMade';
export const SearchPage = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const isShow = ref(false)
    const value = ref('')
    const inputClick = (event: MouseEvent) => {
      event.preventDefault()
    }
    const gotoSearch = () => {
      const url = `https://www.baidu.com/s?wd=${value.value}`;
      window.open(url);
    }
    return () => (<>
      {/* <TransitionMade /> */}
      <div class={s.wrapper}>
        <div class={s.center}>

          {
            isShow.value ? <>
              <div class={[s.data_active, s.date]}>
                <span class={s.time}>20:20</span>
                <span class={s.month}>5月7日 周日</span>
              </div>
              <div class={[s.search, s.active]}>
                <div class={s.ic1}><svg class={s.icon}><use xlinkHref='#baidu'></use></svg></div>
                <input type="text" v-model={value.value}
                  onClick={inputClick}
                  onFocus={() => isShow.value = true}
                  onBlur={() => isShow.value = false}
                  onKeydown={(e) => e.keyCode === 13 && gotoSearch()}
                  placeholder='想要搜索点什么呢' />
                <div class={s.ic2}><svg class={s.icon}><use xlinkHref='#search'></use></svg></div>
              </div> </> : <>
              <div class={s.date}>
                <span class={s.time}>20:20</span>
                <span class={s.month}>5月7日 周日</span>
              </div>
              <div class={s.search}>
                <div class={s.ic1}><svg class={s.icon}><use xlinkHref='#baidu'></use></svg></div>
                <input type="text" v-model={value.value}
                  onClick={inputClick}
                  onFocus={() => isShow.value = true}
                  onBlur={() => isShow.value = false}
                  placeholder='想要搜索点什么呢' />
                <div class={s.ic2} onClick={gotoSearch} ><svg class={s.icon}><use xlinkHref='#search'></use></svg></div>
              </div>
            </>
          }

        </div>

      </div>
    </>
    )
  }
})
export default SearchPage