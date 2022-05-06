const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const AWS = require('aws-sdk');
const { scrapDailyGrand, scrapLottoMAX, scrapLotto649 } = require("./scraper");
const LOTTERY_TABLE = process.env.LOTTERY_TABLE
let dynamoDb = new AWS.DynamoDB.DocumentClient();
const  { DailyGrand } = require("./games/DailyGrand")
const  { LottoMAX } = require("./games/LottoMAX")
const  { Lotto649 } = require("./games/Lotto649")

app.use(bodyParser.json({ strict: false }));
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');
	res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
	next();
});

app.get('/dailygrand', function (req, res) {
    dynamoDb.get({TableName: LOTTERY_TABLE, Key: {lotteryID: "DGRD"}}) 
        .promise()
		.then(data=>{  return DailyGrand(data.Item.lotterydata) })
        .then((data)=>res.json(data))
})

app.get('/lottomax', function (req, res) {
    dynamoDb.get({TableName: LOTTERY_TABLE, Key: {lotteryID: "LOTTO MAX"}}) 
        .promise()
		.then(data=>{  return LottoMAX(data.Item.lotterydata) })
        .then((data)=>res.json(data))
})

app.get('/lotto649', function (req, res) {
  dynamoDb.get({TableName: LOTTERY_TABLE, Key: {lotteryID: "649"}}) 
      	.promise()
		.then(data=>{  return Lotto649(data.Item.lotterydata) })
      	.then((data)=>res.json(data))
})

app.get('/lotteryupdate', async function (req, res) {
    const results = await Promise.all([ scrapDailyGrand(), scrapLottoMAX(), scrapLotto649() ])
	return new Promise(resolve => {
		results.forEach(i=>{
			const params ={
				TableName: LOTTERY_TABLE,
				Key: { lotteryID: i['PRODUCT'] },
				UpdateExpression: 'set lotterydata = list_append(if_not_exists(lotterydata, :empty_list), :lottoData)',
				ConditionExpression: 'not contains (lotterydata, :lottoDataObj)',
				ExpressionAttributeValues: {
					':lottoData': [i],
					':lottoDataObj': i,
					':empty_list': []
				}
			}
			dynamoDb.update(params, function(err, data) {})
		})
		resolve()
	}).then(()=> res.json(results))
})

module.exports.handler = serverless(app);