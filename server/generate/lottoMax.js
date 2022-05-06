let count = 5000000
let order = []
let obj = {}

while (count > 0){
    let myNums = []
    let bonus = Math.ceil(Math.random() * 50)
    for (let i=0; i < 7; i++){
        const randNum = ()=> Math.ceil(Math.random() * 50)
        let random = randNum()
        if (!myNums.includes(random)){
            myNums.push(random)
        } else {
            myNums.push(randNum())
        }
    }
    myNums.sort((a,b)=>a-b)
    myNums[7] = !myNums.includes(bonus) ? bonus : Math.ceil(Math.random() * 50)
    order.push(myNums)
    --count
}
order.forEach((x)=> obj[x] = (obj[x] || 0) + 1)
console.log(Object.entries(obj).sort((a,b) => b[1] - a[1]).slice(0,15))
