import { defineComponent, PropType, ref } from 'vue';
// export const todayStr = () => {
//   const today = new Date();
//   const year = today.getFullYear();
//   const month = today.getMonth() + 1; // 月份从0开始，需要加1
//   const date = today.getDate();
//   const day = today.getDay(); // 周日是0，周一是1，以此类推
//   const daysOfWeek = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
//   const dayOfWeek = daysOfWeek[day];
//   const todayStr = `${month}月${date}日 ${dayOfWeek}`;
//   console.log(todayStr); // 例如：5月8日 周日
//   const currentTime = ref(new Date().toLocaleTimeString());
//   setInterval(() => {
//     currentTime.value = new Date().toLocaleTimeString();
//   }, 1000);
//   return todayStr;
// }
export const getDateTime = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // 月份从0开始，需要加1
  const date = today.getDate();
  const day = today.getDay(); // 周日是0，周一是1，以此类推
  const daysOfWeek = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  const dayOfWeek = daysOfWeek[day];
  const todayStr = `${month}月${date}日 ${dayOfWeek}`;
  const currentTime = new Date().toLocaleTimeString();
  return { date: todayStr, time: currentTime };
}
export const getDateNow = () => {
  let currentTime = new Date().toLocaleTimeString();
  setInterval(() => {
    currentTime = new Date().toLocaleTimeString();
  }, 1000);

  const h = Number(currentTime.slice(0, 2)) * 3600
  const m = Number(currentTime.slice(3, 5)) * 60
  const s = Number(currentTime.slice(6, 8))
  const a = ((h + m + s) / 86400).toFixed(2)
  const bit = Number(a) * 100 + '%'
  return { currentTime, bit }
}
