import logo from './logo.svg';
import './App.css';
import AppRouter from './Routes/Router';
import {Provider} from 'react-redux'
import store from './Redux/store'
// import Signup from './screens/signup'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter/>
      </Provider>
    
      
    </div>
  );
}

export default App;
