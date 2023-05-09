import { h, render, ref } from 'vue'
import { Message } from './Message'
type Props = {
  type: 'success' | 'error' | 'warning' | 'info'
  message: string
  duration?: number
}
const div = document.createElement('div')
div.setAttribute('class', 'glmessage')
document.body.appendChild(div)
// 定时器
let timer = ref<any>(null)
export default function createMessage({ type, message, duration = 3000 }: Props) {
  setTimeout(() => {
    const vNode = h(Message, { type, message })
    render(vNode, div)
    timer && clearTimeout(timer.value)
    timer.value = setTimeout(() => {
      render(null, div)
    }, duration)
  }, 1000)
}

Message.sussess = (message: string, duration?: number) => {
  createMessage({ type: 'success', message, duration })
}
Message.error = (message: string, duration?: number) => {
  createMessage({ type: 'error', message, duration })
}
Message.warning = (message: string, duration?: number) => {
  createMessage({ type: 'warning', message, duration })
}
Message.info = (message: string, duration?: number) => {
  createMessage({ type: 'info', message, duration })
}

