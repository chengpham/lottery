import { useState, useEffect } from 'react'
import { Lotto649Req } from '../requests';

const Lotto649 = () => {
    const [lotto649, setLotto649] = useState([])
    const handleLotto649 = ()=> {
        Lotto649Req.create().then(data=> setLotto649(data))
    }
    useEffect(()=>{
    },[lotto649])
  
  return (
    <>
    <input type="button" value="Get Lotto 649 Numbers" onClick={handleLotto649} className="btn btn-primary btn-sm m-2" />
    <div className='container m-0 d-flex justify-content-around'>
        <h3>Winning Numbers</h3>
    </div>
    <div className='container m-0 d-flex justify-content-around'>
        {lotto649['WINNING NUM'] ? lotto649['WINNING NUM'].map((e,i)=>{
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
          <th>Total Drawn 6</th>
          <th>Total Drawn Bonus</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>{lotto649['NUM DRAWN 1'] ? lotto649['NUM DRAWN 1'] : null}</td>
        <td>{lotto649['NUM DRAWN 2'] ? lotto649['NUM DRAWN 2'] : null}</td>
        <td>{lotto649['NUM DRAWN 3'] ? lotto649['NUM DRAWN 3'] : null}</td>
        <td>{lotto649['NUM DRAWN 4'] ? lotto649['NUM DRAWN 4'] : null}</td>
        <td>{lotto649['NUM DRAWN 5'] ? lotto649['NUM DRAWN 5'] : null}</td>
        <td>{lotto649['NUM DRAWN 6'] ? lotto649['NUM DRAWN 6'] : null}</td>
        <td>{lotto649['BONUS NUM'] ? lotto649['BONUS NUM'] : null}</td>
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
          <th>Avg Drawn 6</th>
          <th>Avg Drawn Grand</th>
          <th>Total Avg Sum</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>{lotto649['AVG DRAWN 1'] ? (lotto649['AVG DRAWN 1']).toFixed(2) : null}</td>
        <td>{lotto649['AVG DRAWN 2'] ? (lotto649['AVG DRAWN 2']).toFixed(2) : null}</td>
        <td>{lotto649['AVG DRAWN 3'] ? (lotto649['AVG DRAWN 3']).toFixed(2) : null}</td>
        <td>{lotto649['AVG DRAWN 4'] ? (lotto649['AVG DRAWN 4']).toFixed(2) : null}</td>
        <td>{lotto649['AVG DRAWN 5'] ? (lotto649['AVG DRAWN 5']).toFixed(2) : null}</td>
        <td>{lotto649['AVG DRAWN 6'] ? (lotto649['AVG DRAWN 6']).toFixed(2) : null}</td>
        <td>{lotto649['AVG BONUS NUM'] ? (lotto649['AVG BONUS NUM']).toFixed(2) : null}</td>
        <td>{lotto649['TOTAL AVG SUM'] ? (lotto649['TOTAL AVG SUM']).toFixed(2) : null}</td>
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
        {Object.entries(lotto649).length>0 ? lotto649['TOTAL SUM'].map((e,i)=>{
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
        {Object.entries(lotto649).length>0 ? lotto649['TOTAL NUMS'].map((e,i)=>{
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
                <th>Bonus Called</th>
                <th>Bonus Count</th>
            </tr>
        </thead>
        <tbody>
        {Object.entries(lotto649).length>0 ? lotto649['TOTAL BONUS NUMS'].map((e,i)=>{
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

export default Lotto649