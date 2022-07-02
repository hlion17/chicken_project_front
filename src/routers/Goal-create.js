import "../style/GoalCreate.css";
import axios from "axios";
import {useState, useRef} from "react";

function GoalCreate({history}) {
    const title = useRef();
    const description = useRef();
    const create = () => {
        console.log(title.current.value, description.current.value)
        axios
            .post("http://localhost:8080/api/goals", {
                title: title.current.value
                , description: description.current.value
            })
            .then((response) => {
                console.log(response)
                alert("성공적으로 등록되었습니다.")
                history.push("/goals/list")
            })
            .catch((error) => {
                console.log(error)
                if (error.response.data !== null) {
                    const response = error.response.data
                    alert(response.message)
                }
            })
    }

    return (
        <div className={"goal-create-section"}>
            <div className={"create-box"}>
                <div className={"create-box-row"}>
                    <p>목표명</p>
                    <input
                        type="text"
                        ref={title}
                    />
                </div>
                <div className={"create-box-row"}>
                    <p>목표 설명</p>
                    <input
                        type="text"
                        ref={description}
                    />
                </div>
                <div className={"create-box-row"}>
                    <button onClick={create}>등록</button>
                </div>
            </div>
        </div>
    );
}

export default GoalCreate;