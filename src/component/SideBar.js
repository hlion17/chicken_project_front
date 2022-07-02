import {Link} from "react-router-dom";
import "../style/SideBar.css";

export default function SideBar() {
    return (
        <div className={"sideBar"}>
            <ul>
                <Link to="/goals/list">
                    <li>목표 조회</li>
                </Link>
                <Link to="/goals/create">
                    <li>목표 등록</li>
                </Link>
            </ul>
        </div>
    )
}