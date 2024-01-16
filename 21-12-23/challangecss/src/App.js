import './App.css';
import Carros from './components/Carros';

const carros = [
{id: 1, modelo: "Fiat Uno", ano:2016, km: 250},
{id: 2, modelo: "BYD Dolphin", ano:2022, km: 1452},
{id: 3, modelo: "Chevrolet Onix", ano:2018, km: 12345},
{id: 4, modelo: "Tesla CyberTruck", ano:2020, km: 0}
]

function App() {
  return (
    <div className="App">
    {carros.map((car) => (
      <Carros key={car.id} modelo={car.modelo} ano={car.ano} km={car.km}/>
    ))}
    </div>
  );
}

export default App;
