import Input from "./Input";

export default function Login(props) {

    return (
    <div className="login-container">
        <form>
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            {!props.isRegistered && <Input type="password" placeholder="Confirm password"/>}

            <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>           
        </form>
    </div>
    )
}