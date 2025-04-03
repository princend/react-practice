import  { JSX } from 'react';

import './App.css';
import { Accordion } from "./components/accordion";
import SyncedInputs from './components/syncedInputs';
import FilterableList from './components/filterableList';


function App(): JSX.Element {
  return (
    <>
      <header>
      </header>
      <div>

        <Accordion></Accordion>

        <SyncedInputs></SyncedInputs>
        <FilterableList></FilterableList>
      </div>
    </>
  );
}

export default App;
