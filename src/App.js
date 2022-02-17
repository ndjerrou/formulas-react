import {useState} from 'react'
function App() {
  const [situation, setSituation] = useState({
    familyName: '',
    firstName: '',
  })

  console.log(situation)

  const handleChange = (e)=>{
    console.log(e.target.name)
     setSituation({...situation, [e.target.name]: e.target.value})
  }

  return (
    <div className="App">
      <input 
        placeholder="First Name"
        onChange={handleChange}
        value={situation.firstName}
        name="firstName"
      />
      <input 
        placeholder="Family Name"
        onChange={handleChange}
        value={situation.familyName} 
        name="familyName"
      />
    </div>
  );
}

export default App;
