import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Nav } from 'components/nav'
import { StartPage } from './StartPage'
import { About } from './About'
import { Service } from './Service'
import { Contact } from './Contact'

export const Home = () => {
  return (

    <BrowserRouter>
      <main>
        <Nav />
        <Switch>
          <Route path='/' exact>
            <StartPage />
          </Route>
          <Route path='/about' exact>
            <About />
          </Route>
          <Route path='/service' exact>
            <Service />
          </Route>
          <Route path='/contact' exact>
            <Contact />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
}