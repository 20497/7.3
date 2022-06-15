import React from "react";
import {useParams} from 'react-router-dom'
import Error from "./error";

export default function Mul() {

    const {a, b} = useParams();

    return (
        <div>Result of multiplying {a} * {b} is {parseFloat(a)*parseFloat(b)}</div>
    )
}