import { useState } from 'react';
import GeneratePayment from './Pages/GeneratePayment';
import ViewForDetails from './Pages/ViewForDetails';
import SearchForDetails from './Pages/SearchForDetails';
import UpdatePayment from './Pages/UpdatePayment';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

const  App= () => {

  const[Pid,setPid]=useState(' ');

  return (
    <>
       
       <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<ViewForDetails setPid={setPid} Pid={Pid}/>}></Route>
          <Route path='/GeneratePayment' exact element={<GeneratePayment/>}></Route>
          <Route path="/ViewForDetails" exact element={<ViewForDetails/>}></Route>
          <Route path="/UpdatePayment" exact element={<UpdatePayment setPid={setPid} Pid={Pid}/>}></Route>
          <Route path="/SearchForDetails" exact element={<SearchForDetails/>}></Route>
        </Routes>
        </BrowserRouter>    
    </>
  );
}

export default App;
