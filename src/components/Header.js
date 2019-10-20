import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import NavBar from './Navbar'
const backgroundImage = "https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?cs=srgb&dl=cinema-food-movie-theater-33129.jpg&fm=jpg";
const styles = {
    height: "100vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingTop:"25%",
    boxSizing:"border-box",
    overflow:"hidden"
}
const Header = (props) => {

    return (
        <>
        <NavBar />
        <div style={styles}>
            <div>
                <Typography color="blue" align="center" variant="h2" marked="center">
                    Experience the good life
            </Typography>
                <Typography color="inherit" align="center" variant="h5">
                    Get the Scoop on the World's Biggest Movies.
            </Typography>
            </div>
        </div>
        </>
    )
}
export default Header;