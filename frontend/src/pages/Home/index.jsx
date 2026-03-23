import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    useEffect(() => setName(localStorage.getItem("user")), []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login", {
            replace: true
        });
    };

    return (
        <>
            {name && (
                <h1>
                    Olá{" "}
                    <strong title="Clique para sair" onClick={handleLogout}>
                        {name}
                    </strong>
                    , seja bem vindo(a)!
                </h1>
            )}
        </>
    );
}

export default Home;
