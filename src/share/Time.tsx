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
  const today = new Date();
  const day = today.getDay(); // 周日是0，周一是1，以此类推
  const daysOfWeek = [7, 1, 2, 3, 4, 5, 6];
  const dayOfWeek = daysOfWeek[day];
  const weekS = ((dayOfWeek - 1) * 86400 + (h + m + s)) / 804800
  const week = Number(weekS.toFixed(2)) * 100 + '%'
  const date = today.getDate();
  const month = today.getMonth() + 1;
  const monthBit = Number((date / 30).toFixed(2)) * 100 + '%'
  const yearBit = Number((month / 12).toFixed(2)) * 100 + '%'
  return { currentTime, bit, week, dayOfWeek, month, date, monthBit, yearBit }
}
