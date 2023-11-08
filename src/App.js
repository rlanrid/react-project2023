import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { smooth } from "./utils/smooth"
import { link } from "./utils/link"

import HomeView from "./views/HomeView"
const App = () => {
  useEffect(() => {
    smooth();
    link();
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeView />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
