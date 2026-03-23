import React from "react";
import { MdEmail } from "react-icons/md";

function InputEmail(data) {
    const { email, setEmail, typeError } = data

    return (
        <>
            <div className={typeError == "email" ? "inputError" : "email"}>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <MdEmail className="email-icon" />
            </div>
        </>
    );
}

export default InputEmail;
