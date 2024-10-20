import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import StateCounter from './usingUseState/StateCounter'
import ReducerCounter from './usingUseReducer/ReducerCounter'
import ReduxCounter from './usingRedux/ReduxCounter'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/useState" element={<StateCounter />} />
        <Route path="/useReducer" element={<ReducerCounter />} />
        <Route path="/Redux" element={<ReduxCounter />} />
      </Route>
    </Routes>
  )
}

export default App;
