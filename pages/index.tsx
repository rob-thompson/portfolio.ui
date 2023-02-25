import Loader from "../components/Loader";
import Button from "react-bootstrap/Button";
import { toast } from '../components/Toast'

export default function Home() {
    return (
        <div>
            <Button onClick={() => toast.success('hello toast!')}>
                <Loader show={true}/>
            </Button>
        </div>
    )
}
