import {Spinner} from "react-bootstrap";

export default function Loader({ show }) {
    return show ? <Spinner /> : null;
}
