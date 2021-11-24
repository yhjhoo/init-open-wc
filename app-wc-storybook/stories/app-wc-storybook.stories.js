import { html } from 'lit';
import '../src/app-wc-storybook.js';

export default {
  title: 'AppWcStorybook',
  component: 'app-wc-storybook',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <app-wc-storybook
      style="--app-wc-storybook-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </app-wc-storybook>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
