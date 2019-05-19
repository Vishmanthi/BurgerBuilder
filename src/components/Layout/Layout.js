import React from 'react'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Aux from '../../hoc/Aux'

function Layout(props) {
  return (
      <Aux>
    <Toolbar/>
    <main className={classes.Content}>{props.children}</main>
    </Aux>
  )
}

Layout.propTypes = {

}

export default Layout

