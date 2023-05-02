import { defineComponent, PropType } from 'vue';
import { http } from '../../share/http';
import s from './First.module.scss';
export const First = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const onClick = async () => {
      const encodedEmail = encodeURIComponent('1849201815@qq.com');
      const response = await http.get('/send_verification_code', {
        email: encodedEmail
      })
      console.log(response);
    }
    return () => (
      <div onClick={onClick}>
        first
      </div >
    )
  }
})