import React, { useState, useEffect } from 'react';
import {Bar} from 'react-chartjs-2';
import '../style/Graph.css'


function Graph({Data}){

    const listeData = Data;

    const [data, setData] = useState({});

    useEffect(() => {
        setData(
          {
            labels: ['a', 'b', 'c'],
            datasets: [
              {
                label: 'nb of Students',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [listeData.scores['a'], 
                       listeData.scores['b'], 
                       listeData.scores['c']]
              }
            ]
          });
    }, [])

    return (

        <div className = "BoxGraph">
            <Bar
            data={data}
            options={{
                title:{
                display:true,
                text:'Average Rainfall per month',
                fontSize:20
                },
                legend:{
                display:true,
                position:'right'
                }
            }}
        />
        </div>

    )
}

export default Graph