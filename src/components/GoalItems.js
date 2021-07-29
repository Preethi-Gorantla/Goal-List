import './GoalItem.css';
const GoalItem = (props) =>{
    //console.log("GoalItem",props.goal);
    return(
            <h2 className="goal-item">{props.goal}</h2>
    );

}
export default GoalItem;