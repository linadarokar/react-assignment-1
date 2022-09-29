import "./app.css";
import { users } from "./user";
import {useState } from "react";
import Table from "./table"





function App() {
  const [query,  setQuery] = useState("");
 


  const search = (data) => {
    return data.filter(item=>item.firstName.toLowerCase().includes(query) ||
     item.lastName.toLowerCase().includes(query) || 
     item.email.toLowerCase().includes(query));
  };
  
  return (
    <div  >
      <div id="table-section">
        <div className="form" >
          <i className="fa-solid fa-magnifying-glass"></i> 
          <input type="text" placeholder="  Enter something" className="search" onChange={(e) => setQuery(e.target.value)} />
        </div>
      </div>
      <Table data= {search(users)}/>
      

    </div> 

  );

}

export default App;