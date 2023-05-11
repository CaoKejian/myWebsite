import { defineComponent, ref } from 'vue';
import { getAssetsFile } from '../utils/pushPic';
import s from './WrapperPage.module.scss';
export const WrapperPage = defineComponent({
  setup: (props, context) => {
    const imageUrl = getAssetsFile('1.png')
    const photos = ref<{
      src: string,
      alt: string,
      height: number,
    }[]>([
      {
        src: `${getAssetsFile('index/7p39gy.jpg')}`,
        alt: '火炉',
        height: 250,
      },
      {
        src: `${getAssetsFile('index/e7jj6r.jpg')}`,
        alt: '世界之门',
        height: 250,
      },
      {
        src: `${getAssetsFile('index/Google Earth 中的偶遇.webp')}`,
        alt: 'Google Earth 中的偶遇',
        height: 450,
      },
      {
        src: `${getAssetsFile('index/kx98xd.jpg')}`,
        alt: '海峡',
        height: 250,
      },
      {
        src: `${getAssetsFile('index/m9xyg8.jpg')}`,
        alt: '人文',
        height: 250,
      },
      {
        src: `${getAssetsFile('index/l3xk6q.jpg')}`,
        alt: '钓鱼',
        height: 250,
      },
      {
        src: `${getAssetsFile('index/wallhaven-6d2jd7.jpg')}`,
        alt: '手柄',
        height: 250,
      },
      {
        src: `${getAssetsFile('index/wallhaven-kx1mgd.jpg')}`,
        alt: '女仆',
        height: 250,
      },
      {
        src: `${getAssetsFile('index/wallhaven-m318wk.png')}`,
        alt: 'F1',
        height: 250,
      },
      {
        src: `${getAssetsFile('index/wallhaven-m31l2y.jpg')}`,
        alt: '电脑壁纸',
        height: 250,
      },
      {
        src: `${getAssetsFile('index/wallhaven-rryv81.jpg')}`,
        alt: '风景',
        height: 250,
      },
      {
        src: `${getAssetsFile('index/wallhaven-vqo7ll.jpg')}`,
        alt: '千与千寻',
        height: 250,
      },
      {
        src: `${getAssetsFile('index/wallhaven-zyqo8o.png')}`,
        alt: '猫',
        height: 450,
      },
      {
        src: `${getAssetsFile('index/yxqzpd.jpg')}`,
        alt: 'no',
        height: 250,
      },
      {
        src: `${getAssetsFile('index/下雨.webp')}`,
        alt: 'drop',
        height: 250,
      },
      {
        src: `${getAssetsFile('index/光芒万丈.webp')}`,
        alt: '光芒万丈',
        height: 250,
      },
      {
        src: `${getAssetsFile('index/7p39gy.jpg')}`,
        alt: '火炉',
        height: 250,
      },
      {
        src: `${getAssetsFile('index/e7jj6r.jpg')}`,
        alt: '世界之门',
        height: 250,
      },
      {
        src: `${getAssetsFile('index/Google Earth 中的偶遇.webp')}`,
        alt: 'Google Earth 中的偶遇',
        height: 450,
      },
      {
        src: `${getAssetsFile('index/kx98xd.jpg')}`,
        alt: '海峡',
        height: 250,
      },
      {
        src: `${getAssetsFile('index/m9xyg8.jpg')}`,
        alt: '人文',
        height: 250,
      },
      {
        src: `${getAssetsFile('index/l3xk6q.jpg')}`,
        alt: '钓鱼',
        height: 250,
      },
      {
        src: `${getAssetsFile('index/wallhaven-6d2jd7.jpg')}`,
        alt: '手柄',
        height: 250,
      },
      {
        src: `${getAssetsFile('index/wallhaven-kx1mgd.jpg')}`,
        alt: '女仆',
        height: 250,
      },
      {
        src: `${getAssetsFile('index/wallhaven-m318wk.png')}`,
        alt: 'F1',
        height: 250,
      },
      {
        src: `${getAssetsFile('index/wallhaven-m31l2y.jpg')}`,
        alt: '电脑壁纸',
        height: 250,
      },
      {
        src: `${getAssetsFile('index/wallhaven-rryv81.jpg')}`,
        alt: '风景',
        height: 250,
      },
      {
        src: `${getAssetsFile('index/wallhaven-vqo7ll.jpg')}`,
        alt: '千与千寻',
        height: 250,
      },
      {
        src: `${getAssetsFile('index/wallhaven-zyqo8o.png')}`,
        alt: '猫',
        height: 450,
      },
      {
        src: `${getAssetsFile('index/yxqzpd.jpg')}`,
        alt: 'no',
        height: 250,
      },
      {
        src: `${getAssetsFile('index/下雨.webp')}`,
        alt: 'drop',
        height: 250,
      },
      {
        src: `${getAssetsFile('index/光芒万丈.webp')}`,
        alt: '光芒万丈',
        height: 250,
      }
    ])
    return () => (
      <div class={s.photoWall} >
        {photos.value.map(item => {
          return <div class={s.photoItem} style={{ height: `${item.height}px` }}>
            <img src={item.src} alt={item.alt} title={item.alt} style={{ height: `${item.height}px` }} />
            <span>{item.alt}</span>
          </div>
        })}
      </div>
    )
  }
})
export default WrapperPage