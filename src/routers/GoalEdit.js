import {useRef} from "react";

function GoalEdit({ match }) {
    const title = useRef();
    const description = useRef();
    const status = useRef();

    console.log(match.params.id)

    return (
        <div className={"goal-edit-section"}>
            <div className={"edit-box"}>
                <div>
                    <p>목표명</p>
                    <input
                        type="text"
                    />
                </div>
                <div>
                    <p></p>
                    <input
                        type="text"
                    />
                </div>
                <div>
                    <select name="" id="">
                        <option>진행중</option>
                        <option>성공</option>
                        <option>실패</option>
                    </select>
                </div>
                <div>
                    <button>수정</button>
                    <button>취소</button>
                </div>
            </div>
        </div>
    )
}

export default GoalEdit;