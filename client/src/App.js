import './App.css'
import Lottery from './components/Lottery'
import DailyGrand from './components/DailyGrand'
import Lotto649 from './components/Lotto649'
import LottoMAX from './components/LottoMAX'
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='app container p-2'>
      <Switch>
      <Route path='/' exact component={Lottery} />
      <Route path='/lottery' component={Lottery} />
      <Route path='/dailygrand' component={DailyGrand} />
      <Route path='/lotto649' component={Lotto649} />
      <Route path='/lottomax' component={LottoMAX} />
      </Switch>
      </div>
      </BrowserRouter>
  )
}

export default App
