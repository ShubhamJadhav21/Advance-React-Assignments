import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './component/pages/Home/Home'
import Navbar from './component/Molecules/Nav/Navbar'
import Favourite from './component/pages/Favourite/Favourite'
import { Provider } from 'react-redux'
import store from './redux/store'
export default function App() {
  return (
    <Provider store={store}>
    <div>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favourite' element={<Favourite/>}/>
      </Routes>
    </div>
    </Provider>
  )
}
