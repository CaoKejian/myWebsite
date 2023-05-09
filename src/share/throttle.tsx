import createMessage from "../components/Message";

export const throttle = (fn: Function, time: number) => {
  let timer: NodeJS.Timeout | undefined
  return (...args: any) => {
    if (timer) {
      createMessage({ type: 'error', message: "不要点击太快哦~" })
      return
    } else {
      fn(...args)
      timer = setTimeout(() => {
        timer = undefined
      }, time)
    }
  }
}