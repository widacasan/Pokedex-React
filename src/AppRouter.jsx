import React from 'react'
import { Navegate, Route, Routes } from 'react-router-dom'
import { Navegation } from './components/Navegation'
import { HomePage, PokemonPage, SearchPage } from './pages'

export const AppRouter = () => {
  return( <Routes>
    <Route path='/' element= {<Navegation />}>
      <Route index element={<HomePage />}/>
      <Route path='pokemon/:id' element={<PokemonPage />}/>
      <Route path='search' element={<SearchPage />}/>

    </Route>

    <Route path='*' element={<Navegate to='/' />}/>
  </Routes>
  );
}
