import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {Link} from "react-router-dom";

const Movie = (props) => {
    var img = props.movie.show.image ? props.movie.show.image.medium : null;
    return(
        <div>
            { props.movie ? (
                <Card >
                    <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                    image={img}
                    title={props.movie.show.name}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {props.movie.show.name}
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Link to={"/"+props.movie.show.name}>
                    <Button size="small" color="primary" target="_blank">
                        Go To Movie
                    </Button>
                    </Link>
                    </CardActions>
                </Card>
            ) : null}
        </div>
    )
}
export default Movie