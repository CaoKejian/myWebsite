import { ref, onMounted, PropType, defineComponent } from 'vue'
import s from './Message.module.scss';
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
    const handleShow = () => {
      isShow.value = true
      setTimeout(() => {
        isShow.value = false
      }, props.duration)
    }

    onMounted(() => {
      handleShow()
    })
    const style = {
      warning: {
        icon: 'icon-warning',
      },
      error: {
        icon: 'icon-shanchu',
      },
      success: {
        icon: 'search',
      },
      info: {
        icon: 'icon-info',
      }
    }
    return () => (<>
      {isShow.value ?
        <div class={s.glmessage}>
          <svg class={s.svg}><use xlinkHref={`#${style[props.type].icon}`}></use></svg>
          <i class="iconfont"></i>
          <span>晚上好</span>
          <span class={s.text}>{props.message}</span>
        </div > :
        <div></div>
      }
    </>
    )
  }
})