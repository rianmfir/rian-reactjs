import React from "react";
import '../../index.css'

const Footer = () => {

    let symbol = <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />

    return (
        <footer className="mt-5">
            <div className="text-center p-3 bg-Secondary text-white">{symbol} Copyright 2022 - <span className="fw-bold">Rian Muhammad Firdaus</span></div>
        </footer>
    )
}
export default Footer