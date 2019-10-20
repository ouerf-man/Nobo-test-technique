import React from "react";
import Header from "../components/Header";
import MoviesList from "../components/MoviesList";

export default class Home extends React.Component{
    constructor(props){
        super(props);
        const posts = [

            {
             title: "My first post",
             excerpt: "This is my first post with more content inside",
             image: "https://bit.ly/2WNi2Ml"
            },
           
            {
             title: "My second post",
             excerpt: "This is my second post with more content inside",
             image: "https://bit.ly/2WNi2Ml"
            },
           
            {
             title: "My third post",
             excerpt: "This is my third post with more content inside",
             image: "https://bit.ly/2WNi2Ml"
            },
           
            {
             title: "My fourth post",
             excerpt: "This is my fourth post with more content inside",
             image: "https://bit.ly/2WNi2Ml"
            },
           
            {
             title: "My fifth post",
             excerpt: "This is my fifth post with more content inside",
             image: "https://bit.ly/2WNi2Ml"
            },
           
            {
             title: "My sixth post",
             excerpt: "This is my sixth post with more content inside",
             image: "https://bit.ly/2WNi2Ml"
            }
           ]
    }

    render(){
        return(
            <>
                <MoviesList/>
            </>
        )
    }
}