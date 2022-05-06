import { useState, useEffect } from 'react'
import { DailyGrandReq } from '../requests';

const DailyGrand = () => {
    const [dailyGrand, setDailyGrand] = useState([])
    const handleDailyGrand = ()=> {
        DailyGrandReq.create().then(data=> setDailyGrand(data))
    }
    useEffect(()=>{
    },[dailyGrand])
  
  return (
    <>
    <input type="button" value="Get Daily Grand Numbers" onClick={handleDailyGrand} className="btn btn-primary btn-sm m-2" />
    <div className='container m-0 d-flex justify-content-around'>
        <h3>Winning Numbers</h3>
    </div>
    <div className='container m-0 d-flex justify-content-around'>
        {dailyGrand['WINNING NUM'] ? dailyGrand['WINNING NUM'].map((e,i)=>{
            return (
                <span key={i} className='m-2 px-2 bg-warning rounded' ><h4>{e}</h4></span>
            )
        }) : null}
    </div>
    <table className='table table-striped table-sm'>
        <thead>
        <tr>
          <th>Total Drawn 1</th>
          <th>Total Drawn 2</th>
          <th>Total Drawn 3</th>
          <th>Total Drawn 4</th>
          <th>Total Drawn 5</th>
          <th>Total Drawn Grand</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>{dailyGrand['NUM DRAWN 1'] ? dailyGrand['NUM DRAWN 1'] : null}</td>
        <td>{dailyGrand['NUM DRAWN 2'] ? dailyGrand['NUM DRAWN 2'] : null}</td>
        <td>{dailyGrand['NUM DRAWN 3'] ? dailyGrand['NUM DRAWN 3'] : null}</td>
        <td>{dailyGrand['NUM DRAWN 4'] ? dailyGrand['NUM DRAWN 4'] : null}</td>
        <td>{dailyGrand['NUM DRAWN 5'] ? dailyGrand['NUM DRAWN 5'] : null}</td>
        <td>{dailyGrand['GRAND NUM'] ? dailyGrand['GRAND NUM'] : null}</td>
      </tr>
      </tbody>
    </table>
    <table className='table table-striped table-sm'>
        <thead>
        <tr>
          <th>Avg Drawn 1</th>
          <th>Avg Drawn 2</th>
          <th>Avg Drawn 3</th>
          <th>Avg Drawn 4</th>
          <th>Avg Drawn 5</th>
          <th>Avg Drawn Grand</th>
          <th>Total Avg Sum</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>{dailyGrand['AVG DRAWN 1'] ? (dailyGrand['AVG DRAWN 1']).toFixed(2) : null}</td>
        <td>{dailyGrand['AVG DRAWN 2'] ? (dailyGrand['AVG DRAWN 2']).toFixed(2) : null}</td>
        <td>{dailyGrand['AVG DRAWN 3'] ? (dailyGrand['AVG DRAWN 3']).toFixed(2) : null}</td>
        <td>{dailyGrand['AVG DRAWN 4'] ? (dailyGrand['AVG DRAWN 4']).toFixed(2) : null}</td>
        <td>{dailyGrand['AVG DRAWN 5'] ? (dailyGrand['AVG DRAWN 5']).toFixed(2) : null}</td>
        <td>{dailyGrand['AVG GRAND NUM'] ? (dailyGrand['AVG GRAND NUM']).toFixed(2) : null}</td>
        <td>{dailyGrand['TOTAL AVG SUM'] ? (dailyGrand['TOTAL AVG SUM']).toFixed(2) : null}</td>
      </tr>
      </tbody>
    </table>
    <div className='container-fluid px-0 d-flex'>
    <table className='table table-striped table-sm col-5'>
        <thead>
            <tr>
                <th>Average Sum</th>
                <th>Average Count</th>
            </tr>
        </thead>
        <tbody>
        {Object.entries(dailyGrand).length>0 ? dailyGrand['TOTAL SUM'].map((e,i)=>{
            return(
            <tr key={i}>
                <td>{e.avg}</td>
                <td>{e.count}</td>
            </tr>
            )
        }) : null}
        </tbody>
    </table>
    <table className='table table-striped table-sm col-4'>
        <thead>
            <tr>
                <th>Num Called</th>
                <th>Num Count</th>
            </tr>
        </thead>
        <tbody>
        {Object.entries(dailyGrand).length>0 ? dailyGrand['TOTAL NUMS'].map((e,i)=>{
            return(
                <tr key={i}>
                    <td>{e.num}</td>
                    <td>{e.count}</td>
                </tr>
            )
        }) : null}
        </tbody>
    </table>
    <table className='table table-striped table-sm col-3'>
        <thead>
            <tr>
                <th>Grand Called</th>
                <th>Grand Count</th>
            </tr>
        </thead>
        <tbody>
        {Object.entries(dailyGrand).length>0 ? dailyGrand['TOTAL GRAND NUMS'].map((e,i)=>{
            return(
                <tr key={i}>
                    <td>{e.num}</td>
                    <td>{e.count}</td>
                </tr>
            )
        }) : null}
        </tbody>
    </table>
    </div>
    </>
  )
}

export default DailyGrand
