import image from '../assets/logoRTU.png'
import '../style/Banner.css'

function Banner(){

    return(        
        <div>

            <div className="box"> <img src={image} className = "photoStyle"></img> </div>

            <div className="box"> <h1> <a href ="http://localhost:3000/"> Homework </a> </h1> </div>

            <div className="box"> <h1> <a href ="http://localhost:3000/"> Code </a> </h1> </div>

            <div className="box"> <h1> <a href ="http://localhost:3000/"> Tool </a>  </h1> </div>

            <div className="box"> <h1> <a href ="http://localhost:3000/"> Sources </a>  </h1> </div>

            <div className="box"> <h1> <a href ="http://localhost:3000/"> Creator </a>  </h1> </div>

        </div>
    );

}

export default Banner