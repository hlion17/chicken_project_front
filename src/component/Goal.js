import {Link} from "react-router-dom";
import "../style/Goals.css"
import axios from "axios";
import {useHistory} from "react-router-dom"

function Goal({id, title, description, status, vote}) {

    const history = useHistory();

    const deleteGoal = function () {
        // axios
        //     .delete("http://localhost:8080/api/goals/" + id)
        //     .then((response) => {
        //         console.log(response)
        //         history.push("/goals/list")
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })

        fetch("http://localhost:8080/api/goals/" + id, {
                method: "DELETE",
                mode: 'cors',
                credentials: 'same-origin',
                crossDomain: true,
            })
            .then((response) => {
                console.log(response)
                alert("삭제되었습니다.")
                window.location.replace("/goals/list")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className={"goalCard"}>
            <div>
                <span className={"goalStatus"}>{status}</span>
            </div>
            <h2 className={"goalTitle"}>{title}</h2>
            <p>{description}</p>
            <div className={"cardMenu"}>
                <button
                    style={{background: "tomato"}}
                    onClick={deleteGoal}
                >삭제
                </button>
                <button>수정</button>
            </div>
        </div>
    )
}

export default Goal;