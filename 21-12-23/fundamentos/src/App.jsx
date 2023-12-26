import './App.css';
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';
import Challanger from './components/Challanger';
import Hook from './components/Hook';

function App() {
  return (
    <div className="App">
      {/*Comentário*/}
      <FirstComponent/>
      <TemplateExpressions/>
      <Events/>
      <Challanger/>
      <Hook/>
    </div>
  );
}

export default App;
