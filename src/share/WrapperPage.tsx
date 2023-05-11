import { defineComponent, PropType, ref } from 'vue';
import s from './WrapperPage.module.scss';
export const WrapperPage = defineComponent({
  setup: (props, context) => {
    const photos = ref<{
      src: string,
      alt: string,
      height: number,
    }[]>([
      {
        src: '/src/assets/imgs/1.png',
        alt: 'Photo 1',
        height: 250,
      },
      {
        src: '/src/assets/imgs/1.png',
        alt: 'Photo 1',
        height: 250,
      },
      {
        src: '/src/assets/imgs/1.png',
        alt: 'Photo 1',
        height: 250,
      },
      {
        src: '/src/assets/imgs/1.png',
        alt: 'Photo 1',
        height: 250,
      },
      {
        src: '/src/assets/imgs/1.png',
        alt: 'Photo 1',
        height: 250,
      },
      {
        src: '/src/assets/imgs/1.png',
        alt: 'Photo 1',
        height: 250,
      },
      {
        src: '/src/assets/imgs/1.png',
        alt: 'Photo 1',
        height: 250,
      },

    ])
    return () => (
      <div class={s.photoWall}>
        {photos.value.map(item => {
          return <div class={s.photoItem} style={{ height: `${item.height}px` }}>
            <img src={item.src} alt={item.alt} title={item.alt} style={{ height: `${item.height}px` }} />
            <span>{item.alt}</span>
          </div>
        })}
      </div >
    )
  }
})
export default WrapperPage