import React from "react";
import {Rating} from "@material-ui/lab";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default class MovieInfo extends React.Component {
    constructor(props) {
        super(props);
        this.movieName = this.props.match.params.event;
        this.state = {
            movies: [],
        }
    }


    componentDidMount() {
        fetch('http://api.tvmaze.com/singlesearch/shows?q='+this.movieName)
            .then(res => res.json())
            .then((data) => {
                this.setState({ movies: data });
                console.log(this.state.movies);
                
            })
            .catch(console.log);
            window.scrollTo(0, 0);

    }
    

    render() {
        var html = this.state.movies.summary;
        var div = document.createElement("div");
        div.innerHTML = html;
        var text = div.textContent || div.innerText || "";
        return (
            <>{this.state.movie}
                <div style={{ marginTop: "10%" }}>
                    <Container>
                        <Grid container spacing={5}>
                            {/* Main content */}
                            <Grid item xs={12} md={8}>
                                <Typography variant="h4" gutterBottom>
                                    {this.movieName}
                                </Typography>
                                <Divider />
                                <img src={this.state.movies.image? this.state.movies.image.original : ""} width="100%" />

                                <Typography style={{marginTop:25}}>
                                {(text=='')? "No summary available" : text}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Paper elevation={0} style={{ backgroundColor: "rgb(238, 238, 238)",padding:15 }}>
                                    <Typography variant="h5" gutterBottom>
                                        About
                                    </Typography>
                                    <Typography>
                                        <Table aria-label="simple table">
                                            <TableBody>
                                                
                                                    {this.state.movies.language && 
                                                    <TableRow >
                                                        <TableCell component="th" scope="row">
                                                            Language
                                                        </TableCell>
                                                        <TableCell align="right">{this.state.movies.language}</TableCell>
                                                        
                                                    </TableRow>
                                                    
                                                    }
                                                    {this.state.movies.premiered && 
                                                    <TableRow >
                                                        <TableCell component="th" scope="row">
                                                            Premiered
                                                        </TableCell>
                                                        <TableCell align="right">{this.state.movies.premiered}</TableCell>
                                                        
                                                    </TableRow>
                                                    
                                                    }
                                                    {this.state.movies.type && 
                                                    <TableRow >
                                                        <TableCell component="th" scope="row">
                                                            Type
                                                        </TableCell>
                                                        <TableCell align="right">{this.state.movies.type}</TableCell>
                                                        
                                                    </TableRow>
                                                    
                                                    }
                                                    {this.state.movies.status && 
                                                    <TableRow >
                                                        <TableCell component="th" scope="row">
                                                            Status
                                                        </TableCell>
                                                        <TableCell align="right">{this.state.movies.status}</TableCell>
                                                        
                                                    </TableRow>
                                                    
                                                    }
                                                    {this.state.movies.rating && 
                                                    <TableRow >
                                                        <TableCell component="th" scope="row">
                                                            Rating
                                                        </TableCell>
                                                        <TableCell align="right"><Rating value={this.state.movies.rating} readOnly /></TableCell>
                                                        
                                                    </TableRow>
                                                    
                                                    }

                                                
                                            </TableBody>
                                        </Table>
                                    </Typography>
                                </Paper>
                                
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </>
        )
    }
}