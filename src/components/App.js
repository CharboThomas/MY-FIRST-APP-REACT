import '../App.css';
import Banner from './Banner'
import Info from './Info'
import Graph from './Graph'

function App() {
  // second : I define the link of the target on a variable
  const url = "https://4v9r83qfo4.execute-api.eu-central-1.amazonaws.com/dev";
  // I creat my request
  let maRequest = new XMLHttpRequest();
  // I add some parameter to my request
  maRequest.open("GET",url,false);
  // I send my requestion
  maRequest.send(null);
  // I capture the data generate by my request
  const data = JSON.parse(maRequest.responseText);  

  return (
    <div className="App">

      <div className="boite1">
        <Banner />
      </div>
      
      <div className="boite2">
        <Info />
        <Graph Data = {data}/>
      </div>

    </div>
  );
}

export default App;
