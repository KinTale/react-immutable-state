import { useState } from "react"
import { initialWorkouts, generateWorkout } from "./Workouts.js"
import "./App.css"

function App() {
  const [workouts, setWorkouts] = useState(initialWorkouts)

  const addNewWorkout = () => { setWorkouts([...workouts, generateWorkout()]) }
  // const newWorkout = [...workouts]
  // newWorkout.push(generateWorkout())
  // setWorkouts(newWorkout)
  //console.log("addNewWorkout:", newWorkout)


  const deleteWorkout = (workout) => { setWorkouts(workouts.filter(x => x !== workout)) }
  //const remove = workouts.filter((x) => x !== workout)
  // setWorkouts(remove)
  //console.log("deleteWorkout:", workout)


  const completeWorkout = (workout) => {

    const complete = workouts.map((x) => {
      if (x === workout) {
        return { ...workouts, done: true }
      }
      return x
    })
    setWorkouts(complete)

  }

  //EXTENTION 1
  const showDoneOnly = () => { setWorkouts(workouts.filter(x => x.done === true)) }

  //EXTENTION 2
  const replaceWorkout = (workout) => {

    const replace = workouts.map((x) => {
      if (x === workout) {
        return generateWorkout()
      }
      return x
    })
    setWorkouts(replace)
console.log(workouts)

  }

  return (
    <div className="App">
      <h1>🏋️‍♀️Workout Generator</h1>
      <button onClick={addNewWorkout}>Add New Workout</button>
      <label onChange={showDoneOnly}>
        <input type="checkbox"></input>Show Done Only
      </label>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            
            <p>
              {workout.sets}x sets of <strong>{workout.reps}x{workout.exercise}</strong> with {workout.rest} seconds rest
            </p>
            {!workout.done &&
              <button onClick={e => completeWorkout(workout)}>Done</button>}
            {workout.done &&
              <p>✅</p>}
            <button onClick={e => deleteWorkout(workout)}>Delete</button>
            <button onClick={e => replaceWorkout(workout)}>Replace Workout</button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default App
