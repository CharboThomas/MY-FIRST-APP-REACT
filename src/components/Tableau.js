import '../style/Tableau.css'

function Tableau({Data}){

    const listeData = Data;

    return(
        <div>
            <div className = "zoneTitre">
                    <center> <h1> Data Capture </h1> </center>
                </div>

                <div className = "zoneData">

                    <div className= "zoneDataBoite">
                
                        <ul>
                                    
                            <li> course : {listeData.nom}</li>

                            <li> course Active : {listeData.courseActive} </li>

                            <li> course Name : {listeData.courseName}</li>

                            <li> date : { listeData.date }</li>

                            <li> dropped Students : { listeData.droppedStudents}</li>

                            <li> release Year : { listeData.releaseYear } </li>

                        </ul>
            
                    </div>

                    <div className= "zoneDataBoite">

                        <center>

                            <table> 

                                <caption> scores </caption>

                                <tbody>

                                    <tr>
                                        <td> {"a"}</td>
                                        <td> {"b"} </td>
                                        <td> {"c"} </td>
                                    </tr>

                                    <tr>
                                        <td> {listeData.scores["a"]} </td>
                                        <td> {listeData.scores["b"]} </td>
                                        <td> {listeData.scores["c"]} </td>
                                    </tr>

                                </tbody>

                            </table>



                            <table> 

                                <caption> someData </caption>

                                <tbody>

                                    <tr>
                                        <td> {listeData.someData[0][0]} </td>
                                        <td> {listeData.someData[0][1]} </td>
                                        <td> {listeData.someData[0][2]} </td>
                                        <td> {listeData.someData[0][3]} </td>
                                    </tr>

                                    <tr>
                                        <td> {listeData.someData[1][0]} </td>
                                        <td> {listeData.someData[1][1]} </td>
                                        <td> {listeData.someData[1][2]} </td>
                                        <td> {listeData.someData[1][3]} </td>
                                    </tr>

                                    <tr>
                                        <td> {listeData.someData[2][0]} </td>
                                        <td> {listeData.someData[2][1]} </td>
                                        <td> {listeData.someData[2][2]} </td>
                                        <td> {listeData.someData[2][3]} </td>
                                    </tr>

                                </tbody>

                            </table>

                        </center>

                    </div>

                </div>
            </div>

    )
}

export default Tableau