const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return <p>{props.part.name} {props.part.exercises}</p>
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Total units: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </p>
  )
}

const Footer = (props) => {
  return (
    <footer>
      <p>{props.fullName} - {props.courseCode} - {props.section}</p>
    </footer>
  )
}

const App = () => {
  const course = 'Industry Elective'
  const parts = [
    { name: 'Information Management 2', exercises: 3 },
    { name: 'Data Analytics', exercises: 3 },
    { name: 'App Development', exercises: 3 }
  ]

  const fullName = 'Chirsten Raye A. Rizal'
  const courseCode = 'CSIT340'
  const section = 'G7'

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer fullName={fullName} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App