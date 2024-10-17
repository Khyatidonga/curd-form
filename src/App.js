import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'; // Import your Redux store
import './App.css';
import Form from "./components/Form"
import TableData from './components/TableData';
import RefExample from './components/RefExample';
import MemoExample from './components/MemoExample';
import ChildA from './Context/ChildA';
import { createContext } from 'react';
import NewData from './components/NewData';
import { Card } from 'antd';

export const data = createContext()
function App() {
  const name = "khyati donga"
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/edit/:id' element={<Form />} />
          <Route path='/table' element={<TableData />} />
          <Route path='/RefExample' element={<RefExample />} />
          <Route path='/Memo' element={<MemoExample />} />
          <Route path='/new-data' element={<NewData />} />
          <Route path='/context' element={<ChildA name={""}/>} />

        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;