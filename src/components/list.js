import React from 'react';

export default class List extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:["banana"]
        }
    }

    componentDidMount(){
        console.log("component did mount")
        this.setState({data:[...this.state.data, "apple"] })
    }

    render(){
        return(
            <ul>
                {this.state.data.map((datum)=>{
                    return(
                        <li>{datum}</li>
                    )
                })}
            </ul>
            )
    }
}