const axios = require("axios").default;
const fethHtml = async url => {
  try { const { data } = await axios.get(url); return data;
  } catch(err) { console.error(`ERROR: An error occurred while trying to fetch the URL: ${url}`) }
};
const date = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"})

const scrapDailyGrand = async () => {
    const recentDate = ()=> {
        let mon = new Date(date)
        mon.setDate(mon.getDate() + (1 - 7 - mon.getDay()) % 7)
        let thu = new Date(date)
        thu.setDate(thu.getDate() + (4 - 7 - thu.getDay()) % 7)
        return Date.now(date) - mon.getTime() < Date.now(date) - thu.getTime() ? mon.toLocaleDateString('sv') : thu.toLocaleDateString('sv')

    }
    const dailyGrandURL = `https://www.playnow.com/services2/lotto/draw/dgrd/${recentDate()}`;
    const nums = await fethHtml(dailyGrandURL);
    return nums ? { 
        "PRODUCT": "DGRD", 
        "DRAW NUMBER": nums.drawNbr, 
        "DRAW DATE": new Date(nums.drawDate).toISOString().split('T')[0], 
        "NUMBER DRAWN 1": nums.drawNbrs[0], 
        "NUMBER DRAWN 2": nums.drawNbrs[1], 
        "NUMBER DRAWN 3": nums.drawNbrs[2], 
        "NUMBER DRAWN 4": nums.drawNbrs[3], 
        "NUMBER DRAWN 5": nums.drawNbrs[4], 
        "GRAND NUMBER": nums.bonusNbr 
    } : { 'Daily Grand': recentDate(), 'localTimeZone': date }
};

const scrapLottoMAX = async () => {
    const recentDate = ()=> {
        let tue = new Date(date)
        tue.setDate(tue.getDate() + (2 - 7 - tue.getDay()) % 7)
        let fri = new Date(date)
        fri.setDate(fri.getDate() + (5 - 7 - fri.getDay()) % 7)
        return Date.now(date) - tue.getTime() < Date.now(date) - fri.getTime() ? tue.toLocaleDateString('sv') : fri.toLocaleDateString('sv') 
    }
    const lottoMAXURL = `https://www.playnow.com/services2/lotto/draw/lmax/${recentDate()}`;
    const nums = await fethHtml(lottoMAXURL);
    return nums ? { 
        "PRODUCT": "LOTTO MAX", 
        "DRAW NUMBER": nums.drawNbr, 
        "DRAW DATE": new Date(nums.drawDate).toISOString().split('T')[0], 
        "NUMBER DRAWN 1": nums.drawNbrs[0], 
        "NUMBER DRAWN 2": nums.drawNbrs[1], 
        "NUMBER DRAWN 3": nums.drawNbrs[2], 
        "NUMBER DRAWN 4": nums.drawNbrs[3], 
        "NUMBER DRAWN 5": nums.drawNbrs[4], 
        "NUMBER DRAWN 6": nums.drawNbrs[5], 
        "NUMBER DRAWN 7": nums.drawNbrs[6], 
        "BONUS NUMBER": nums.bonusNbr, 
    } : { 'Lotto MAX': recentDate(), 'localTimeZone': date }
};

const scrapLotto649 = async () => {
    const recentDate = ()=> {
        let wed = new Date(date)
        wed.setDate(wed.getDate() + (3 - 7 - wed.getDay()) % 7)
        let sat = new Date(date)
        sat.setDate(sat.getDate() + (6 - 7 - sat.getDay()) % 7)
        return Date.now() - wed.getTime() < Date.now() - sat.getTime() ? wed.toLocaleDateString('sv') : sat.toLocaleDateString('sv')
    }
    const lotto649URL = `https://www.playnow.com/services2/lotto/draw/six49/${recentDate()}`;
    const nums = await fethHtml(lotto649URL);
    return nums ? { 
        "PRODUCT": "649", 
        "DRAW NUMBER": nums.drawNbr, 
        "DRAW DATE": new Date(nums.drawDate).toISOString().split('T')[0], 
        "NUMBER DRAWN 1": nums.drawNbrs[0], 
        "NUMBER DRAWN 2": nums.drawNbrs[1], 
        "NUMBER DRAWN 3": nums.drawNbrs[2], 
        "NUMBER DRAWN 4": nums.drawNbrs[3], 
        "NUMBER DRAWN 5": nums.drawNbrs[4], 
        "NUMBER DRAWN 6": nums.drawNbrs[5], 
        "BONUS NUMBER": nums.bonusNbr 
    } : { 'Lotto 649': recentDate(), 'localTimeZone': date }
};

  module.exports = { scrapDailyGrand, scrapLotto649, scrapLottoMAX };