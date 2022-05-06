let DGRDfile = require('../files/DailyGrand.json')

const DailyGrand = async (data) => {
    let DGRD = [...DGRDfile, ...data]
    let lottoSum = {
        'NUM DRAWN 1': 0, 'NUM DRAWN 2': 0, 'NUM DRAWN 3': 0, 'NUM DRAWN 4': 0, 'NUM DRAWN 5': 0, 'GRAND NUM': 0,
        'TOTAL SUM': [], 'TOTAL NUMS': [], 'TOTAL GRAND NUMS': [], 'WINNING NUM': []
    }
    for(let i=0; i<DGRD.length; i++){
        lottoSum['NUM DRAWN 1'] += DGRD[i]['NUMBER DRAWN 1']
        lottoSum['NUM DRAWN 2'] += DGRD[i]['NUMBER DRAWN 2']
        lottoSum['NUM DRAWN 3'] += DGRD[i]['NUMBER DRAWN 3']
        lottoSum['NUM DRAWN 4'] += DGRD[i]['NUMBER DRAWN 4']
        lottoSum['NUM DRAWN 5'] += DGRD[i]['NUMBER DRAWN 5']
        lottoSum['GRAND NUM'] += DGRD[i]['GRAND NUMBER']
        lottoSum['TOTAL SUM'].push( DGRD[i]['NUMBER DRAWN 1'] + DGRD[i]['NUMBER DRAWN 2'] + DGRD[i]['NUMBER DRAWN 3'] + DGRD[i]['NUMBER DRAWN 4'] + DGRD[i]['NUMBER DRAWN 5'] + DGRD[i]['GRAND NUMBER'] )
        lottoSum['TOTAL NUMS'].push( DGRD[i]['NUMBER DRAWN 1'] )
        lottoSum['TOTAL NUMS'].push( DGRD[i]['NUMBER DRAWN 2'] )
        lottoSum['TOTAL NUMS'].push( DGRD[i]['NUMBER DRAWN 3'] )
        lottoSum['TOTAL NUMS'].push( DGRD[i]['NUMBER DRAWN 4'] )
        lottoSum['TOTAL NUMS'].push( DGRD[i]['NUMBER DRAWN 5'] )
        if (DGRD[i]['GRAND NUMBER'] !== 0) lottoSum['TOTAL GRAND NUMS'].push( DGRD[i]['GRAND NUMBER'] )
        
    }
    lottoSum['AVG DRAWN 1'] = lottoSum['NUM DRAWN 1'] / DGRD.length
    lottoSum['AVG DRAWN 2'] = lottoSum['NUM DRAWN 2'] / DGRD.length
    lottoSum['AVG DRAWN 3'] = lottoSum['NUM DRAWN 3'] / DGRD.length
    lottoSum['AVG DRAWN 4'] = lottoSum['NUM DRAWN 4'] / DGRD.length
    lottoSum['AVG DRAWN 5'] = lottoSum['NUM DRAWN 5'] / DGRD.length
    lottoSum['AVG GRAND NUM'] = lottoSum['GRAND NUM'] / DGRD.length
    lottoSum['TOTAL AVG SUM'] = lottoSum['AVG DRAWN 1'] + lottoSum['AVG DRAWN 2'] + lottoSum['AVG DRAWN 3'] + lottoSum['AVG DRAWN 4'] + lottoSum['AVG DRAWN 5'] + lottoSum['AVG GRAND NUM'] 
    lottoSum['TOTAL SUM'] = lottoSum['TOTAL SUM'].reduce((b,c)=>((b[b.findIndex(d=>d.avg===c)]||b[b.push({avg:c,count:0})-1]).count++,b),[]).sort((a,b) => b.count - a.count)
    lottoSum['TOTAL NUMS'] = lottoSum['TOTAL NUMS'].reduce((b,c)=>((b[b.findIndex(d=>d.num===c)]||b[b.push({num:c,count:0})-1]).count++,b),[]).sort((a,b) => b.count - a.count)
    lottoSum['TOTAL GRAND NUMS'] = lottoSum['TOTAL GRAND NUMS'].reduce((b,c)=>((b[b.findIndex(d=>d.num===c)]||b[b.push({num:c,count:0})-1]).count++,b),[]).sort((a,b) => b.count - a.count)
    
    
    let topten = []
    let topFreqNums = []
    let topFreqGrand = []
    let winningNumSum = 0
    for (let i=0; i<10; i++){
        topten.push(lottoSum['TOTAL SUM'][i].avg)
    }
    for (let i=0; i<25; i++){
        topFreqNums.push(lottoSum['TOTAL NUMS'][i].num)
    }
    for (let i=0; i<3; i++){
        topFreqGrand.push(lottoSum['TOTAL GRAND NUMS'][i].num)
    }
    while (lottoSum['WINNING NUM'].length == 0){
        let myNums = []
        for (let i=0; i<5; i++){
            const randNum = ()=> topFreqNums[Math.floor(Math.random() * topFreqNums.length)]
            let random = randNum()
            if (!myNums.includes(random)){
                myNums.push(random)
            } else {
                myNums.push(randNum())
            }
        }
        myNums.sort((a,b)=>a-b)
        myNums[5] = topFreqGrand[Math.floor(Math.random() * topFreqGrand.length)]
        if (topten.includes(myNums.reduce((a,b)=>a+b))){
            lottoSum['WINNING NUM'] = myNums
            winningNumSum = myNums.reduce((a,b)=>a+b)
        }
    }
    return lottoSum
}

module.exports = { DailyGrand };