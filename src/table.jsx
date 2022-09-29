
import React from 'react'

const Table = ({data}) => {
  return (
    <div>
        <div id="table-wrapper">
            <div id="table-headers">
                <table>
                    <tbody>
                        <tr>
                            <th className="column1">Id</th>
                            <th className="column2">FirstName</th>
                            <th className="column3">LastName</th>
                            <th className="column4">Email</th>
                            <th className="column5">Phone</th>
                        </tr>
                    </tbody>
                </table>
    
            </div>
        
            <div id="table-data">
                <table>
                    <tbody>
                        {data.map((item) =>(
                            <tr className="data-row">
                                <td className="column1">{item.id}</td>
                                <td className="column2">{item.firstName}</td>
                                <td className="column3">{item.lastName}</td>
                                <td className="column4">{item.email}</td>
                                <td className="column5">{item.phone}</td>
                            </tr>
                        ) )}
                    </tbody>
                </table>
            </div>
        </div> 
        <div id="info-wrapper">
            <h1>Details</h1>
            <p>Click on a table item to get detailed information</p>
            <div id="info-content">
                <div><b>User selected:</b> Marcellin Shrestha</div>
                <div>
                    <b>Description: </b>
                    <textarea cols="50" rows="5" readonly>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quia nihil. Est, illum minima libero rerum, nihil distinctio placeat sint nam quae repellendus obcaecati delectus totam non odio. Sint, reprehenderit?
                    </textarea>
                </div>
                <div><b>Address:</b> 6480 Nec Ct</div>
                <div><b>City:</b> Dinwiddie</div>
                <div><b>State:</b> NV</div>
                <div><b>Zip:</b> 91295</div>
            </div>
        </div>

    </div>
    
    
    
  )
}

export default Table
