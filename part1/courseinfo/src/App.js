const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }

  const Content = (props) => {
    return (
      <div>
        <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
        <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
        <Part part={props.parts[1].name} exercises={props.parts[2].exercises} />
      </div>
    )
  }

  const Total = (props) => {
    return (
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    )
  }

  const Part = (props) => {
    return (
      <p>{props.part} {props.exercise}</p>
    )
  }


  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total />
    </div>
  )
}

export default App