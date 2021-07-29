import './App.css';
import Card from './components/Card';
import GoalForm from './components/GoalForm';
import GoalList from './components/GoalList';
import React, {useState} from 'react';
const dummy_list = [
    {
      id:1,
      goalName:"Do all exercises!!"
    },
    {
      id:2,
      goalName:"Finish the course!!"
    },
  ];
function App(props) {
  const [goals,setNewGoals] = useState(dummy_list);
  console.log("goals",goals);
  const onAddGoalHandler = (goal) =>{
    setNewGoals (prevExpenses =>{
      console.log(goal);
      return [goal,...prevExpenses]});
  }
  return (
    <div className="App">
      <Card className="course-card">
        <GoalForm onAddGoal = {onAddGoalHandler}/>
      </Card>
      <GoalList items={goals}/>
    </div>
  );
}

export default App;
