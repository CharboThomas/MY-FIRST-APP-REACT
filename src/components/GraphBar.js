import {Bar} from 'react-chartjs-2';

function GraphBar({Data}){

    const listeData = Data;

    return (

            <Bar
                data = {{
                    labels:['a','b','c'],
                    datasets:[{
                        label:'Number of students per group',
                        data:[listeData.scores['a'], 
                              listeData.scores['b'], 
                              listeData.scores['c']],
                        backgroundColor: 'rgba(75,192,192,1)',
                    }]
                }}

                options = {{
                    scales:{
                        xAxes:[{
                            gridLines:{
                                color: 'black',
                            },
                            scaleLabel:{
                                labelString: 'Number of Students',
                            }
                        }],

                        yAxes:[{
                            scaleLabel:{
                                labelString: 'group',
                                display:true,
                                fontColor: 'cyan',
                            },                           
                            ticks:{
                                beginAtZero:true,
                            }
                        }],

                    }
                }}

            />

    )
}

export default GraphBar;