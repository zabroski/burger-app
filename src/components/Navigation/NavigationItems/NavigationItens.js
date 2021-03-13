import React from 'react';
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Buider</NavigationItem>
        {props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
        { !props.isAuthenticated
             ? <NavigationItem link="/auth">Authenticated</NavigationItem>
            :<NavigationItem link="/auth">Logout</NavigationItem>}
    </ul>
)

export default navigationItems;