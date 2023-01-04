import React from 'react'
import PlantList from '../components/PlantList'
import SearchForm from '../components/SearchForm'

const Home = () => {
  return (
    <main>
      <SearchForm />
      <PlantList/>
    </main>
  )
}

export default Home
