import '../style/Tableau.css'

function Tableau({Data}){

    const listeData = Data;

    return(

        <div className = "TableBox">


            <div className = "TableTitre">
                <h1> Data Capture </h1>
            </div>


            <div className = "TableContenue">

                <div className= "TableContenueBox">
                
                    <ul>
                                    
                        <li className = "TableListe"> course : {listeData.course} </li>

                        <li className = "TableListe"> course Active : {listeData.courseActive} </li>

                        <li className = "TableListe"> course Name : {listeData.courseName}</li>

                        <li className = "TableListe"> date : { listeData.date }</li>

                        <li className = "TableListe"> dropped Students : { listeData.droppedStudents}</li>

                        <li className = "TableListe"> release Year : { listeData.releaseYear } </li>

                    </ul>
            
                </div>



                <div className= "TableContenueBox">

                    <table> 

                        <caption> scores </caption>

                        <tbody>

                            <tr>
                                <td> {"a"} </td>
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

                </div>

            </div>

        </div>

    )
}

export default Tableau