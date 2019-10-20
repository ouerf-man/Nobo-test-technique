import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Movie from './Movie';

class MoviesList extends Component {

    constructor() {
        super()
        this.state = {
            movies: [],
        
        }
    }

    
    componentDidMount() {
        fetch('https://api.tvmaze.com/search/shows?q=test')
            .then(res => res.json())
            .then((data) => {
                this.setState({ movies: data });
                console.log(this.state.movies);
            })
            .catch(console.log);
    }

onSearchInputChange = (event) => {
    var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("searchInput");
        filter = input.value.toUpperCase();
        li = document.getElementsByClassName("movie");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h2")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
render() {

    return (
        <div>
            {this.state.movies ? (
                <div>
                    <TextField style={{ padding: 24,marginLeft:"40%" }}
                        id="searchInput"
                        placeholder="Search for Movies"
                        margin="normal"
                        onChange={this.onSearchInputChange}
                    />
                    <Grid container spacing={24} style={{padding: 28,marginLeft:70}}>
                            { this.state.movies.map(currentMovie => (
                                <Grid className="movie" item xs={12} sm={6} lg={3} xl={3} style={{marginBottom:"70px",marginRight:50}}>
                                    <Movie movie={currentMovie} />
                                </Grid>
                            ))}
                    </Grid>
                </div>
            ) : "No movies found"}
        </div>
    )
}
}
export default MoviesList;