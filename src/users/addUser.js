import { useState } from "react"

export default function AddUser()
{
    const[user,setUser]=useState({
        name:"mona",
        email:"mona@gmail.com"
    });

    const[errors,setErrors] = useState({
        nameError:null,
        emailError: null
    });

    const handleChange = (evt) =>{

        if(evt.target.name == "name")
        {
            setUser({...user,name:evt.target.value});
        }else if(evt.target.name == "email")
        {
            setUser({...user,email:evt.target.value});
        }


        if (evt.target.name == "name") {
            setErrors({
              ...errors,
              nameError:
                evt.target.value.length == 0
                  ? "This field is required"
                  : evt.target.value.length > 10
                  ? "Character must be less than 10"
                  : null,
            });
        }
    };

    return (
        <>
        <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
            <input type="text" className={`form-control ${(errors.nameError)?'border-danger':''}`} id="formGroupExampleInput" placeholder="Enter your name" value={user.name} name="name" onChange={(e) => {handleChange(e)}}/>
            <small className="text-danger">{errors.nameError}</small>
        </div>
        <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter your email" value={user.email} name="email" onChange={(e) => {handleChange(e)}}/>
        </div>
        </>
    )
}