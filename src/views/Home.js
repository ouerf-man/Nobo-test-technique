import React from "react";
import Header from "../components/Header";
import MoviesList from "../components/MoviesList";

export default class Home extends React.Component{
    constructor(props){
        super(props);
        
    }

    componentDidMount(){
            window.scrollTo(0, 0);
    }

    render(){
        return(
            <>
                <MoviesList/>
            </>
        )
    }
}