import { defineComponent, PropType } from 'vue';
import { RouterView } from 'vue-router';
export const Wrapper = defineComponent({
  setup: (props, context) => {
    return () => (
      <div>
        <RouterView></RouterView>
      </div>
    )
  }
})
export default Wrapper 