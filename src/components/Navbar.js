import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
const NavBar = () => {
    return(
        <div style={{}}>
        <AppBar style={{backgroundColor:"rgb(255, 168, 168)"}} position="fixed">
            <Toolbar>
                <Typography variant="title" color="inherit">
                    <img src="https://nobo.life/img/nobo/logo/logo-nobo-black-bold-cropped-padded-small.png" />
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;