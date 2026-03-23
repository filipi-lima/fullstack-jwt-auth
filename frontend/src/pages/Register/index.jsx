import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/index.css";
import InputPassword from "../../components/InputPassword";
import InputEmail from "../../components/inputEmail";
import InputName from "../../components/InputName";
import services from "../../services/api.js";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [typeError, setTypeError] = useState("");
    const [isLoad, setIsLoad] = useState(false)
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        setError("");
        setTypeError("");
        setIsLoad(true)

        try {
            const response = await services.userRegister(name, email, password);
            const data = await response.json();

            if (response.ok) {
                navigate("/login");
            } else {
                setError(data.message);
                setTypeError(data.typeError);
            }
        // eslint-disable-next-line no-unused-vars
        } catch (error) {
            setError("Ocorreu um erro. Tente novamente mais tarde")
        } finally {
            setIsLoad(false)
        }
    };

    return (
        <section>
            <h1>Registrar</h1>

            <form onSubmit={handleRegister}>
                <InputName
                    name={name}
                    setName={setName}
                    typeError={typeError}
                />
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
                    Já tem uma conta? <Link to="/login">Conecte-se</Link>
                </span>

                <button type="submit" disabled={isLoad}>Registrar</button>
            </form>
        </section>
    );
}

export default Register;
