import  { JSX } from 'react';

import './App.css';
import { CatLoading } from './cat-loading';


function App(): JSX.Element {
  return (
    <>
      <header>
      </header>
      <div>
        <CatLoading></CatLoading>
      </div>
    </>
  );
}

export default App;
