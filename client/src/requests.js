// const BASE_URL = 'http://localhost:3000';
const BASE_URL = 'https://in2h5q2lxc.execute-api.ca-central-1.amazonaws.com/dev';
export const DailyGrandReq = {
  create(){
    return fetch(`${BASE_URL}/dailygrand`).then(res => res.json());
  }
}
export const Lotto649Req = {
  create(){
    return fetch(`${BASE_URL}/lotto649`).then(res => res.json());
  }
}
export const LottoMAXReq = {
  create(){
    return fetch(`${BASE_URL}/lottomax`).then(res => res.json());
  }
}
  