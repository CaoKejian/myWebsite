import { defineComponent, PropType } from 'vue';
import s from './Search.module.scss';
export const Search = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <div>search
      </div>
    )
  }
})
export default Search