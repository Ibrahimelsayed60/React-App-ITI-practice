import { useEffect, useState } from "react";

export default function UsersFunctional()
{
    const[users, setUsers]= useState(
        [
            {name:"hend", age:25, isAdmin:true},
            {name:"ali", age:22, isAdmin:true},
            {name:"mohamed", age:28, isAdmin:false},
        ]
    );

    const[isAuth, setIsAuth] = useState(true);

    const handleToggleUsers = ()=>{
        setIsAuth(!isAuth);
    };

    useEffect(()=>{ // Component Did Mount
        console.log("From Did Mount");

        return ()=>{ // Component Will unmount
            console.log("Will Unmount");
        }
    },[]);

    useEffect(()=>{ // Component Did Update
        console.log("From Did Update");
    },[isAuth]);

    return (
        <>
            <ul>
                {(isAuth)?users.map((user, index) => {
                    if(user.isAdmin)
                    {
                        return <li key={index}>{user.name}</li>
                    }
                }):<h1>Please Login First</h1>}
            </ul>
            <button className="btn btn-success" onClick={() => {handleToggleUsers()}}>Toggle</button>
        </>
    );
}