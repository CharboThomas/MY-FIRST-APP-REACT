import '../style/App.css';
import Banner from './Banner'
import Info from './Info'
import GraphBar from './GraphBar'
import Tableau from './Tableau'
import GraphPie from './GraphPie';

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
  
  console.log(data);

  return (
    <div className="App">

      <div className="boite1">
        <Banner />
      </div>
      
      <div className="boite2">
        <Info />
        <Tableau Data = {data}/>

        <div className = "TableGraph">

          <div className = "boxGraph1"> 
            <GraphBar Data = {data}/>
          </div>

          <div className = "boxGraph2">
            <GraphPie Data = {data}/>
          </div>


        </div>


      </div>

    </div>
  );
}

export default App;
