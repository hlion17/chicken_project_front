import {useEffect, useState} from "react";
import Goal from "../component/Goal";
import "../style/Home.css";

function GoalList() {
    const [goals, setGoals] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/api/goals')
            .then((response) => response.json())
            .then((json) => setGoals(json));
    },[])

    return (
        <div className={"cardWrapper"}>
            {
                goals.map((goal) => (
                    <div key={goal.id}>
                        <Goal
                            id={goal.id}
                            title={goal.title}
                            description={goal.description}
                            status={goal.status}
                            vote={goal.vote}
                        />
                    </div>
                ))
            }
        </div>
    );
}

export default GoalList;