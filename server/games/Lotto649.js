let L649file = require('../files/Lotto649.json')

const Lotto649 = async (data) => {
    let L649 = [...L649file, ...data]
    let lottoSum = {
        'NUM DRAWN 1': 0, 'NUM DRAWN 2': 0, 'NUM DRAWN 3': 0, 'NUM DRAWN 4': 0, 'NUM DRAWN 5': 0, 'NUM DRAWN 6': 0, 'BONUS NUM': 0, 'TOTAL SUM': [], 'TOTAL NUMS': [], 'TOTAL BONUS NUMS': [], 'WINNING NUM': []
    }
    for(let i=0; i<L649.length; i++){
        lottoSum['NUM DRAWN 1'] += L649[i]['NUMBER DRAWN 1']
        lottoSum['NUM DRAWN 2'] += L649[i]['NUMBER DRAWN 2']
        lottoSum['NUM DRAWN 3'] += L649[i]['NUMBER DRAWN 3']
        lottoSum['NUM DRAWN 4'] += L649[i]['NUMBER DRAWN 4']
        lottoSum['NUM DRAWN 5'] += L649[i]['NUMBER DRAWN 5']
        lottoSum['NUM DRAWN 6'] += L649[i]['NUMBER DRAWN 6']
        lottoSum['BONUS NUM'] += L649[i]['BONUS NUMBER']
        lottoSum['TOTAL SUM'].push( L649[i]['NUMBER DRAWN 1'] + L649[i]['NUMBER DRAWN 2'] + L649[i]['NUMBER DRAWN 3'] + L649[i]['NUMBER DRAWN 4'] + L649[i]['NUMBER DRAWN 5'] + L649[i]['NUMBER DRAWN 6'] + L649[i]['BONUS NUMBER'] )
        lottoSum['TOTAL NUMS'].push( L649[i]['NUMBER DRAWN 1'] )
        lottoSum['TOTAL NUMS'].push( L649[i]['NUMBER DRAWN 2'] )
        lottoSum['TOTAL NUMS'].push( L649[i]['NUMBER DRAWN 3'] )
        lottoSum['TOTAL NUMS'].push( L649[i]['NUMBER DRAWN 4'] )
        lottoSum['TOTAL NUMS'].push( L649[i]['NUMBER DRAWN 5'] )
        lottoSum['TOTAL NUMS'].push( L649[i]['NUMBER DRAWN 6'] )
        if (L649[i]['BONUS NUMBER'] !== 0) lottoSum['TOTAL BONUS NUMS'].push( L649[i]['BONUS NUMBER'] )
        
    }
    lottoSum['AVG DRAWN 1'] = lottoSum['NUM DRAWN 1'] / L649.length
    lottoSum['AVG DRAWN 2'] = lottoSum['NUM DRAWN 2'] / L649.length
    lottoSum['AVG DRAWN 3'] = lottoSum['NUM DRAWN 3'] / L649.length
    lottoSum['AVG DRAWN 4'] = lottoSum['NUM DRAWN 4'] / L649.length
    lottoSum['AVG DRAWN 5'] = lottoSum['NUM DRAWN 5'] / L649.length
    lottoSum['AVG DRAWN 6'] = lottoSum['NUM DRAWN 6'] / L649.length
    lottoSum['AVG BONUS NUM'] = lottoSum['BONUS NUM'] / L649.length
    lottoSum['TOTAL AVG SUM'] = lottoSum['AVG DRAWN 1'] + lottoSum['AVG DRAWN 2'] + lottoSum['AVG DRAWN 3'] + lottoSum['AVG DRAWN 4'] + lottoSum['AVG DRAWN 5'] + lottoSum['AVG DRAWN 6'] + lottoSum['AVG BONUS NUM'] 
    lottoSum['TOTAL SUM'] = lottoSum['TOTAL SUM'].reduce((b,c)=>((b[b.findIndex(d=>d.avg===c)]||b[b.push({avg:c,count:0})-1]).count++,b),[]).sort((a,b) => b.count - a.count)
    lottoSum['TOTAL NUMS'] = lottoSum['TOTAL NUMS'].reduce((b,c)=>((b[b.findIndex(d=>d.num===c)]||b[b.push({num:c,count:0})-1]).count++,b),[]).sort((a,b) => b.count - a.count)
    lottoSum['TOTAL BONUS NUMS'] = lottoSum['TOTAL BONUS NUMS'].reduce((b,c)=>((b[b.findIndex(d=>d.num===c)]||b[b.push({num:c,count:0})-1]).count++,b),[]).sort((a,b) => b.count - a.count)
    
    
    let topten = []
    let topFreqNums = []
    let topFreqBONUS = []
    let winningNumSum = 0
    for (let i=0; i<10; i++){
        topten.push(lottoSum['TOTAL SUM'][i].avg)
    }
    for (let i=0; i<25; i++){
        topFreqNums.push(lottoSum['TOTAL NUMS'][i].num)
    }
    for (let i=0; i<10; i++){
        topFreqBONUS.push(lottoSum['TOTAL BONUS NUMS'][i].num)
    }
    while (lottoSum['WINNING NUM'].length == 0){
        let myNums = []
        let bonus = topFreqBONUS[Math.floor(Math.random() * topFreqBONUS.length)]
        for (let i=0; i<6; i++){
            const randNum = ()=> topFreqNums[Math.floor(Math.random() * topFreqNums.length)]
            let random = randNum()
            if (!myNums.includes(random)){
                myNums.push(random)
            } else {
                myNums.push(randNum())
            }
        }
        myNums.sort((a,b)=>a-b)
        myNums[6] = !myNums.includes(bonus) ? bonus : topFreqBONUS[Math.floor(Math.random() * topFreqBONUS.length)]
        if (topten.includes(myNums.reduce((a,b)=>a+b))){
            lottoSum['WINNING NUM'] = myNums
            winningNumSum = myNums.reduce((a,b)=>a+b)
        }
    }
    return lottoSum
}

module.exports = { Lotto649 };