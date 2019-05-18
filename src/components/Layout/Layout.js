import React from 'react'
import classes from './Layout.module.css'

import Aux from '../../hoc/Aux'

function Layout(props) {
  return (
      <Aux>
    <div>
      Toolbar,Sidebar,Backdrop
    </div>
    <main className={classes.Content}>{props.children}</main>
    </Aux>
  )
}

Layout.propTypes = {

}

export default Layout

