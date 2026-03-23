import React from "react";
import { IoPerson } from "react-icons/io5";

function InputName(data) {
    const { name, setName, typeError } = data

    return (
        <>
            <div className={typeError == "name" ? "inputError" : "name"}>
                <input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <IoPerson className="person-icon" />
            </div>
        </>
    );
}

export default InputName;
