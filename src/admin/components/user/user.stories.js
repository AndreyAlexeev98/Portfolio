import user from './user.vue';
import '../../default.pcss';

export default {
  title: "user",   
}

export const defaultView = () => ({
  components: {user},
  template: `
    <user
      userpic='https://picsum.photos/300/300'
      username='Андрей Алексеев'  
    />
  `
});