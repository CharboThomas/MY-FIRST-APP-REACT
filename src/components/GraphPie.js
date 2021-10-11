import { Pie } from 'react-chartjs-2';
import '../style/Graph.css'


function GraphPie({Data}){

    const listeData = Data;

    const sampleData = [
        {x: "", y: ""},
        {x: "", y: ""},
        {x: "", y: ""},
        {x: "", y: ""},
    ]

    return (
 
            <Pie
            data = {{
                labels:["latvian","foreign"],
                datasets:[{
                    data:[listeData.someData[1][0],  
                          listeData.someData[1][1]
                        ],
                    backgroundColor:['red','blue'],
                }]
            }}> 

            </Pie>

    )

}

export default GraphPie;