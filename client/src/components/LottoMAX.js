import { useState, useEffect } from 'react'
import { LottoMAXReq } from '../requests';

const LottoMAX = () => {
    const [lottoMAX, setLottoMAX] = useState([])
    const handleLottoMAX = ()=> {
        LottoMAXReq.create().then(data=> setLottoMAX(data))
    }
    useEffect(()=>{
    },[lottoMAX])
  
  return (
    <>
    <input type="button" value="Get Lotto MAX Numbers" onClick={handleLottoMAX} className="btn btn-primary btn-sm m-2" />
    <div className='container m-0 d-flex justify-content-around'>
        <h3>Winning Numbers</h3>
    </div>
    <div className='container m-0 d-flex justify-content-around'>
        {lottoMAX['WINNING NUM'] ? lottoMAX['WINNING NUM'].map((e,i)=>{
            return (
                <span key={i} className='m-2 px-1 bg-warning rounded' ><h4>{e}</h4></span>
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
          <th>Total Drawn 7</th>
          <th>Total Drawn Bonus</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>{lottoMAX['NUM DRAWN 1'] ? lottoMAX['NUM DRAWN 1'] : null}</td>
        <td>{lottoMAX['NUM DRAWN 2'] ? lottoMAX['NUM DRAWN 2'] : null}</td>
        <td>{lottoMAX['NUM DRAWN 3'] ? lottoMAX['NUM DRAWN 3'] : null}</td>
        <td>{lottoMAX['NUM DRAWN 4'] ? lottoMAX['NUM DRAWN 4'] : null}</td>
        <td>{lottoMAX['NUM DRAWN 5'] ? lottoMAX['NUM DRAWN 5'] : null}</td>
        <td>{lottoMAX['NUM DRAWN 6'] ? lottoMAX['NUM DRAWN 6'] : null}</td>
        <td>{lottoMAX['NUM DRAWN 7'] ? lottoMAX['NUM DRAWN 7'] : null}</td>
        <td>{lottoMAX['BONUS NUM'] ? lottoMAX['BONUS NUM'] : null}</td>
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
          <th>Avg Drawn 7</th>
          <th>Avg Drawn Bonus</th>
          <th>Total Avg Sum</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>{lottoMAX['AVG DRAWN 1'] ? (lottoMAX['AVG DRAWN 1']).toFixed(2) : null}</td>
        <td>{lottoMAX['AVG DRAWN 2'] ? (lottoMAX['AVG DRAWN 2']).toFixed(2) : null}</td>
        <td>{lottoMAX['AVG DRAWN 3'] ? (lottoMAX['AVG DRAWN 3']).toFixed(2) : null}</td>
        <td>{lottoMAX['AVG DRAWN 4'] ? (lottoMAX['AVG DRAWN 4']).toFixed(2) : null}</td>
        <td>{lottoMAX['AVG DRAWN 5'] ? (lottoMAX['AVG DRAWN 5']).toFixed(2) : null}</td>
        <td>{lottoMAX['AVG DRAWN 6'] ? (lottoMAX['AVG DRAWN 6']).toFixed(2) : null}</td>
        <td>{lottoMAX['AVG DRAWN 7'] ? (lottoMAX['AVG DRAWN 7']).toFixed(2) : null}</td>
        <td>{lottoMAX['AVG BONUS NUM'] ? (lottoMAX['AVG BONUS NUM']).toFixed(2) : null}</td>
        <td>{lottoMAX['TOTAL AVG SUM'] ? (lottoMAX['TOTAL AVG SUM']).toFixed(2) : null}</td>
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
        {Object.entries(lottoMAX).length>0 ? lottoMAX['TOTAL SUM'].map((e,i)=>{
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
        {Object.entries(lottoMAX).length>0 ? lottoMAX['TOTAL NUMS'].map((e,i)=>{
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
        {Object.entries(lottoMAX).length>0 ? lottoMAX['TOTAL BONUS NUMS'].map((e,i)=>{
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

export default LottoMAX