import React from 'react'
import HistoryData from './HistoryContent'


const History = () => {
  return (
    <div>
      <table>
        <tr>
            
            <th>Date</th>
            <th>Doctor Appointed</th>
            <th>Disease</th>
          
        </tr>
        {HistoryData.map((HistoryData) => {
          return (
            <tr key={HistoryData.id}>
                <td> {HistoryData.date} </td>
                <td> {HistoryData.doctorAppointed} </td>
                <td> {HistoryData.disease} </td>
            </tr>
          )
        })}
              
        
       </table>
    </div>
  )
}

export default History
