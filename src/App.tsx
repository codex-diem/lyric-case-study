
import './App.css'
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core'
import { theme } from './theme';

function App() {
  

  return (
    <MantineProvider theme={theme}>
      <div className="Development-App">Use story book to develop everything in isolation!</div>;
    </MantineProvider>
  )
}

export default App
