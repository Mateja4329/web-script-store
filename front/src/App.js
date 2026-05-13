import React from 'react'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header/>
      <main className="py-3">
        <Container>
          <Outlet/>
          <HomeScreen/>
          <h1>Dobro dosli u skriptarnicu FTN!</h1>
        </Container>
      </main>
      <Footer/>
    </>
  )
}

export default App;