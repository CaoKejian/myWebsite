import { defineComponent, PropType } from 'vue';
import { RouterView } from 'vue-router';
import s from './Welcome.module.scss';
export const Welcome = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <div><RouterView></RouterView>
      </div>
    )
  }
})
export default Welcome