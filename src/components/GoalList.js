import GoalItem from './GoalItems';
import './GoalList.css';
const GoalList = (props) => {
    console.log("GoalList",props.items);

    return(
        <ul className="">
           {props.items.map(goal => (
               <GoalItem key={goal.id} goal={goal.goalName}/>
              
           ))}
        </ul>
    )

}
export default GoalList;