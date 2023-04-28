import { defineComponent, PropType} from 'vue';
import s from './Second.module.scss';
export const Second= defineComponent({
  props:{
    name:{
      type:String as PropType<string>
    }
  },
  setup:(props,context)=>{
    return ()=>(
        <div>
        </div>
    )
  }
})