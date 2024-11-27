import React from 'react';

export default class Navbar extends React.Component{

    constructor()
    {
        super();
        console.log("From Constructor");
        this.state = {
            name:"Ibrahim",
            title:"Developer"
        };
    }

    componentDidMount()
    {
        console.log("From ComponentDidMount");
    }

    componentDidUpdate()
    {
        console.log("From componentDidUpdate");
    }

    componentWillUnmount()
    {

    }

    render()
    {
        console.log("From Render");
        return <>
                    <h1>My name is {this.state.name}</h1>
                    
                </>;
    }

}