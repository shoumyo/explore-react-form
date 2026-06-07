import './App.css'
import ControlledField from './Components/ControlledField/ControlledField'
import FormAction from './Components/FormAction/FormAction'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import UncontrolledField from './Components/UncontrolledFeild/UncontrolledField'

function App() {

  return (
    <>
      <div>
        <h3>This is Shoumyo Speaking...</h3>
        {/* <SimpleForm></SimpleForm> */}
        {/* <FormAction></FormAction> */}
        {/* <ControlledField></ControlledField> */}
        <UncontrolledField></UncontrolledField>
      </div>
    </>
  )
}

export default App
