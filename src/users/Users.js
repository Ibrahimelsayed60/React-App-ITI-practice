import React from "react";

export default class Users extends React.Component{

    constructor()
    {
        super();
        this.state = {
            isAuth:true,
            users:[
                {name:"hend", age:25, isAdmin:true},
                {name:"ali", age:22, isAdmin:true},
                {name:"mohamed", age:28, isAdmin:false},
            ]
        };
    }


    render()
    {
        return ( 
            <>
                <ul>
                    {(this.state.isAuth)? this.state.users.map((user, index)=>{
                        if(user.isAdmin)
                        {
                            return <li key={index}> {user.name}</li>
                        }
                    }): <h1>Please Login First</h1>
                    }
                </ul>
            </>
        );
    }

}