import { defineComponent, PropType, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { http } from '../../share/http';
import s from './First.module.scss';
export const First = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const router = useRouter()
    const state = reactive({
      FormData: {
        email: '1849201815@qq.com',
        code: ''
      }
    })
    const { FormData } = toRefs(state)
    const onClick = async () => {
      const encodedEmail = encodeURIComponent(FormData.value.email);
      await http.get('/send_verification_code', {
        email: encodedEmail
      })
    }
    const onSubmit = async () => {
      await http.post('/verify_verification_code', {
        code: FormData.value.code
      }).catch(error => {
        if(error.response.status === 401){
          alert(error.response.data)
        }
      })
      router.push('/home')
    }
    return () => (<>
      <input class={s.email} type="email" v-model={FormData.value.email} />
      <input class={s.email} type="number" v-model={FormData.value.code} />
      <button onClick={onClick} class={s.putEmail}>
        点我发送邮箱
      </button >
      <button onClick={onSubmit} class={s.putEmail}>登录</button>
    </>
    )
  }
})