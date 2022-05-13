import React, { useState } from "react";
import QRCode from "react-qr-code";

export default function Qrcode() {
    let [code, setCode] = useState("")
    const [displayCode, setDisplayCode] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault();
        setDisplayCode(true);
        alert(`The name you entered was: ${ code }`)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Enter the subject code:
                    <input
                        type="text"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                </label>
                <input type="submit" />
            </form><br /><br />
            {displayCode ? <QRCode value={code} size={200} /> : null}

        </>
    )

}