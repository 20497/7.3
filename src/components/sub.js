import {useParams} from "react-router-dom";

export default function Sub() {
    const {a, b} = useParams();

    return (
        <div>Result of substracting {a} - {b} is {parseFloat(a)-parseFloat(b)}</div>
    )
}