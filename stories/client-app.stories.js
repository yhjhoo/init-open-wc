import { html } from 'lit';
import '../src/client-app.js';

export default {
  title: 'ClientApp',
  component: 'client-app',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <client-app
      style="--client-app-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </client-app>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
