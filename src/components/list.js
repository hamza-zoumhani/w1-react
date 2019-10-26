import React from 'react';

export default class List extends React.Component{
    constructor(props){
        super(props);
        this.state={
            date:[]
        }
    }

    componentDidMount(){
        console.log("component did mount")
    }

    render(){
        return(
            <ul>
                <li>Placeholder</li>
                <li>Placeholder</li>                
                <li>Placeholder</li>
            </ul>
        )
    }
}