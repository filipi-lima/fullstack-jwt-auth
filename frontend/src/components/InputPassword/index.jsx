import React, { useState } from "react";
import { FaLock } from "react-icons/fa6";
import { FaUnlock } from "react-icons/fa6";

function InputPassword(data) {
    const { password, setPassword, typeError } = data;
    const [showPassword, setShowPassword] = useState(false);

    const viewLock = () => setShowPassword((prevState) => !prevState);

    return (
        <>
            <div
                className={typeError == "password" ? "inputError" : "password"}
            >
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="button">
                    {showPassword ? (
                        <FaUnlock className="unlock-icon" onClick={viewLock} />
                    ) : (
                        <FaLock className="lock-icon" onClick={viewLock} />
                    )}
                </button>
            </div>
        </>
    );
}

export default InputPassword;
