import React, {useState} from 'react';

const UserForm = (props) => {
    // [state var, fun to set state]
    const[username,setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmed, setConfirmed] = useState("");
    const[nameError, setNameError] = useState("");
    const[emailError, setEmailError] = useState("");
    const[passwordError, setPasswordError] = useState("");
    const[confirmedError, setConfirmedError] = useState("");

    const createUser = (e) =>{
        e.preventDefault();
        const newUser = {username, email, password, confirmed};
        console.log("Welcome", newUser);
    };

    //Validations
    const handleName = (e) => {
        setUsername(e.target.value);
        if (e.target.value.length < 3 ){
            setNameError("Must be greater than 2 characters")
        }
        else{
            setNameError("")
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5){
            setEmailError("Must be greater than 5 characters")
        }
        else{
            setEmailError("")
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 10){
            setPasswordError("Must be greater than 10 characters")
        }
        else{
            setPasswordError("")
        }  
    }
    const handleConfirmed = (e) => {
        setConfirmed(e.target.value);
        if (e.target.value !== password){
            setConfirmedError("Password does not match")
        }
        else{
            setPasswordError("")
        }
    }
    return(
        <form onSubmit={createUser}>
            <div>
                <label>Username:</label>
                <input type="text" onChange={handleName}/>
                {
                    nameError ?
                    <p style={{color:"darkcyan"}}>{nameError}</p>:""
                }
            </div>
            <div>
                <label>Email Address:</label>
                <input type="text" onChange={handleEmail} />
                {
                    emailError ?
                    <p style={{color:"darkcyan"}}>{emailError}</p>:""
                }
            </div>
            <div>
                <label>Password:</label>
                <input type="password" onChange={handlePassword} />
                {
                    passwordError ?
                    <p style={{color:"darkcyan"}}>{passwordError}</p>:""
                }
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="password" onChange={handleConfirmed} />
                {
                    confirmedError ?
                    <p style={{color:"darkcyan"}}>{confirmedError}</p>:""
                }
            </div>
            <input type="submit" value="Create User"/>
                <fieldset>
                    <p>User:{username}</p>
                    <p>Email:{email}</p>
                    <p>Password:{password}</p>
                    <p>Confirmed Password: {confirmed}</p>
                </fieldset>
        </form>
    )
}       
export default UserForm