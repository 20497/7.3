import React from "react";
import {useParams} from 'react-router-dom'
import Error from "./error";

export default function Div() {

    const {a, b} = useParams();

    if (parseFloat(b) === 0) {
        return <h1>Cannot divide by 0</h1>
    }

    return (
        <div>Result of dividing {a} / {b} is {parseFloat(a)/parseFloat(b)}</div>
    )
}