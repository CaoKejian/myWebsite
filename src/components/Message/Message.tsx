import { ref, onMounted, PropType, defineComponent, Transition } from 'vue'
import s from './Message.module.scss';
import { getDateNow } from '../../share/Time';
export const Message = defineComponent({
  props: {
    type: {
      type: String as PropType<'success' | 'error' | 'warning' | 'info'>,
      default: 'success'
    },
    message: {
      type: String,
      default: '恭喜你，这是一条消息'
    },
    duration: {
      type: Number,
      default: 3000
    }
  },
  setup: (props, context) => {
    const isShow = ref(false)
    const mes = ref<string>()
    const handleShow = () => {
      isShow.value = true
      setTimeout(() => {
        isShow.value = false
      }, props.duration)
    }
    onMounted(handleShow)
    const time = getDateNow()
    const setTime = Number(time.slice(0, 2))
    if (setTime >= 0 && setTime < 6) {
      mes.value = '凌晨了'
    } else if (setTime <= 11) {
      mes.value = '早上好'
    } else if (setTime < 14) {
      mes.value = '中午好'
    } else if (setTime < 20) {
      mes.value = '晚上好'
    }
    const style = {
      warning: {
        icon: 'warning',
      },
      error: {
        icon: 'error',
      },
      success: {
        icon: 'success',
      },
      info: {
        icon: 'info',
      }
    }

    return () => (<>
      {isShow.value ? (
        <div class={s.glmessage}>
          <svg class={s.svg}><use xlinkHref={`#${style[props.type].icon}`}></use></svg>
          <i class="iconfont"></i>
          <span class={s.time}>{mes.value}</span>
          <span class={s.text}>{props.message}</span>
        </div>
      ) : (
        <div></div>
      )}
    </>
    )
  }
})