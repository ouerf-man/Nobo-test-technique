import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return(
        <div style={{}}>
        <AppBar style={{backgroundColor:"rgb(255, 168, 168)"}} position="fixed">
            <Toolbar>
                <Typography variant="title" color="inherit">
                <Link to="/">
                        <img src={"https://nobo.life/img/nobo/logo/logo-nobo-black-bold-cropped-padded-small.png"}  alt="logo" width={80}/>
                </Link>           
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;