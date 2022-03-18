import './App.css';
import TabList from './components/Tabs/TabList/TabList';

const tabs = [
  {'name': 'Tab A', 'content': 'Tab A Content'},
  {'name': 'Tab B', 'content': 'Tab B Content'},
  {'name': 'Tab C', 'content': 'Tab C Content'}
]

function App() {
  return (
    <div className="App">
      <TabList tabs={tabs}/>
    </div>
  );
}

export default App;
