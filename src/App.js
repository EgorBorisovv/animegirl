import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Content from './components/content';


function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar/>
      <Content/>
    </div>
  );
}

export default App;
