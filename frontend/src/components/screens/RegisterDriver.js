import React from "react";
import { useState } from "react";

const RegisterDriver = ({ onCheck }) => {
    const [rf_tag, setTag] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        onCheck({ rf_tag });

        setTag("");
    };

    return (
        <div>
            <h2>Niko niko ni</h2>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label>RFID Tag</label>
                    <input
                        type="text"
                        placeholder="RFID Tag Number"
                        value={rf_tag}
                        onChange={(e) => setTag(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    value="Verify RFID Tag"
                    className="btn btn-block"
                />
            </form>
        </div>
    );
};

export default RegisterDriver;
