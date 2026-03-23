import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import services from "../../services/api.js";

function PrivateRoute() {
    const [isAuthorized, setIsAuthorized] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        const handlingAuth = async () => {
            const token = localStorage.getItem("token");

            try {
                const response = await services.authentication(token);
                if (response.ok) {
                    const data = await response.json();
                    localStorage.setItem("user", data.name);
                    setIsAuthorized(true);
                } else {
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                    setIsAuthorized(false);
                    navigate("/login", {
                        replace: true
                    })
                }
            // eslint-disable-next-line no-unused-vars
            } catch (error) {
                setIsAuthorized(false);
            }
        };

        handlingAuth();
    }, []);

    return isAuthorized ? <Outlet /> : <div></div>;
}

export default PrivateRoute;