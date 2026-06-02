import type { Preview } from '@storybook/react-vite'
import '../src/index.css'
import { Provider } from 'react-redux'
import store from '../src/store/store'
import { MemoryRouter } from 'react-router-dom'
import React from 'react'

const preview: Preview = {
  decorators: [
    (Story, context) => (
      <Provider store={store}>
        <MemoryRouter initialEntries={[context.parameters.routerPath || "/"]}>
          <Story />
        </MemoryRouter>
      </Provider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;