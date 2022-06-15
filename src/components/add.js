import {useParams} from "react-router-dom";

export default function Add() {
    const {a, b} = useParams();

    return (
        <div>Result of adding {a} + {b} is  {parseFloat(a)+parseFloat(b)}</div>
    )
}