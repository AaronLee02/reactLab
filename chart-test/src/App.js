import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import PriceChart from './components/PriceChart';
import MarketCapChart from './components/MarketCapChart';

/* import BarChart from './Charts/BarChart';
import DoughnutChart from './Charts/DoughnutChart';
import LineChart from './Charts/LineChart';
import PieChart from './Charts/PieChart'; */


function App() {
  return (
    <div className="App">
      <Header />
      <PriceChart />
      <MarketCapChart />
    </div>
  );
}

export default App;
