import Form from './Components/formpart1.jsx';
import { AppProvider } from "./state";
function App() {
  return (
    <AppProvider>
    <div>
     <Form/>
    </div>
    </AppProvider>
  );
}

export default App;
