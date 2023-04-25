import { defineComponent, PropType } from 'vue';
import s from './Login.module.scss';
export const Login = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <div>login
      </div>
    )
  }
})
export default Login