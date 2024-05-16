import React from "react"
import { Routes, Route } from "react-router-dom"
import './App.css'
import Welcome from './components/Welcome'
import MoviesAdd from './components/MoviesAdd'
import MoviesList from "./pages/MoviesList"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome username="Oscar" />} />
        <Route path="/movies/list" element={<MoviesList />} />
        <Route path="/movies/add" element={<MoviesAdd />} />
      </Routes>
    </>
  )
}

export default App
