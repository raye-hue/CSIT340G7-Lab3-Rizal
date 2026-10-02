   const Header = (props) => {
     return <h1>{props.course}</h1>
   }

   const Content = (props) => {
     return (
       <div>
         <p>{props.part1} {props.exercises1}</p>
         <p>{props.part2} {props.exercises2}</p>
         <p>{props.part3} {props.exercises3}</p>
       </div>
     )
   }

   const Total = (props) => {
     return <p>Total units: {props.total}</p>
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
     const part1 = 'Information Management 2'
     const exercises1 = 3 // CHANGE: real units
     const part2 = 'Data Analytics'
     const exercises2 = 3 // CHANGE: real units
     const part3 = 'App Development'
     const exercises3 = 3 // CHANGE: real units

     const fullName = 'Chirsten Raye A. Rizal'
     const courseCode = 'CSIT340'
     const section = 'G7'

     return (
       <div>
         <Header course={course} />
         <Content
           part1={part1} exercises1={exercises1}
           part2={part2} exercises2={exercises2}
           part3={part3} exercises3={exercises3}
         />
         <Total total={exercises1 + exercises2 + exercises3} />
         <Footer fullName={fullName} courseCode={courseCode} section={section} />
       </div>
     )
   }

   export default App