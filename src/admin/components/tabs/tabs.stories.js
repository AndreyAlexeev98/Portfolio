import tabs from './tabs.vue'
import {action} from "@storybook/addon-actions"

const methods = {
  onTabChanged: action('onTabChanged')
}

export default {
  title: 'tabs'
}

export const defaultView = () => ({
  components: {tabs},
  methods,
  template: `
    <tabs
      @tabChanged="onTabChanged"
    />
  `
});