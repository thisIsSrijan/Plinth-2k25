import { createRoot } from 'react-dom/client'
import { EventProvider } from "./Context/EventContext.jsx"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <EventProvider>
    <App />
  </EventProvider>,
)
