import React from 'react'
import { Provider } from "react-redux";
import "./App.css";
// import Loader from "./components/Loader";
import store from '../src/store/store'
import Loader from './components/wrappedComponent/Loader_w'

function App() {
  return(
  <Provider store={store}>
    <Loader />
  </Provider>
  )
}

export default App;
