import './App.css'
import ControlledField from './Components/ControlledField/ControlledField'
import FormAction from './Components/FormAction/FormAction'
import HookForm from './Components/HookForm/HookForm'
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
        {/* <UncontrolledField></UncontrolledField> */}
        <HookForm></HookForm>
      </div>
    </>
  )
}

export default App
