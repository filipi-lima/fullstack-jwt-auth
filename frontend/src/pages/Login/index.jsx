import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/index.css";
import InputPassword from "../../components/InputPassword";
import InputEmail from "../../components/inputEmail";
import services from "../../services/api.js";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [typeError, setTypeError] = useState("");
    const [isLoad, setIsLoad] = useState(false)
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        setError("");
        setTypeError("");
        setIsLoad(true)

        try {
            const response = await services.userLogin(email, password);
            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", data.name)
                navigate("/");
            } else {
                setError(data.message);
                setTypeError(data.typeError);
            }
        // eslint-disable-next-line no-unused-vars
        } catch (error) {
            setError("Ocorreu um erro. Tente novamente mais tarde");
        } finally {
            setIsLoad(false)
        }
    };

    return (
        <section>
            <h1>Login</h1>

            <form onSubmit={handleLogin}>
                <InputEmail
                    email={email}
                    setEmail={setEmail}
                    typeError={typeError}
                />
                <InputPassword
                    password={password}
                    setPassword={setPassword}
                    typeError={typeError}
                />

                {error && <span className="error">{error}</span>}

                <span className="message">
                    Não tem uma conta? <Link to="/register">Cadastre-se</Link>
                </span>

                <button type="submit" disabled={isLoad}>Login</button>
            </form>
        </section>
    );
}

export default Login;
