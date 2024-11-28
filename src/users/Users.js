import React from "react";

export default class Users extends React.Component{

    constructor()
    {
        super();
        this.state = {
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
                    {this.state.users.map((user, index)=>{
                        if(user.isAdmin)
                        {
                            return <li> {user.name}</li>
                        }
                    })
                    }
                </ul>
            </>
        );
    }

}