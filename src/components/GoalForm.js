import './GoalForm.css';
import React, {useState} from 'react';
const GoalForm = (props) =>{
    const [newGoal,setNewGoal] = useState('');
    const formSubmitHandler = (event) =>{
        event.preventDefault();
        const goal = [
            {
                id:Math.random(),
                goalName:newGoal
            }
        ]
        props.onAddGoal(...goal);
        setNewGoal(' ');

    }
    const goalAddHandler = (event) =>{
        setNewGoal(event.target.value);
        console.log(event.target.value);
    };
    
    return (
        <form value={newGoal} onSubmit={formSubmitHandler}>
        <div>
          <label><h3>Course Goal</h3></label>
          <input className="input-ele" type="text" onChange={goalAddHandler}/>
        </div>
        <div>
            <button className="buttn" type="submit">Add Goal</button>
        </div>
        </form>
    );
}
export default GoalForm;