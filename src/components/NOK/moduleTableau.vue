<script>

    export default {
        name: 'moduleTableau',
        props: {
            'course':{
                type: String,
            },
            'courseActive':{
                type: String,
            },
            'courseName':{
                type: String,
            },
            'date':{
                type: String,
            },
            'droppedStudents':{
                type: String,
            },
            'releaseYear':{
                type: String,
            },
            'liste1':{
                type: Array,

            },
            'liste2':{
                type: Array,
            }
        }
    }
</script>

<template>
    

    <div>

        <div class = "zoneTitre">
            <center> <h1> Data Capture </h1> </center>
        </div>

        <div class = "zoneData">

            <div class= "zoneDataBoite">
                
                <ul>
							
					<li> course : {{course}} </li>

					<li> course Active : {{courseActive}} </li>

					<li> course Name : {{courseName}}</li>

					<li> date : {{ date }}</li>

					<li> dropped Students : {{droppedStudents}}</li>

					<li> release Year : {{ releaseYear }} </li>

				</ul>
            
            </div>

            <div class= "zoneDataBoite">

                <center>

                    <table> 

                        <caption> scores </caption>

                        <tbody>

                            <tr>
                                <td> {{ liste1[0]['Column1'] }} </td>
                                <td> {{ liste1[0]['Column2'] }} </td>
                                <td> {{ liste1[0]['Column3'] }} </td>
                            </tr>

                            <tr>
                                <td> {{ liste1[1]['Column1'] }} </td>
                                <td> {{ liste1[1]['Column2'] }} </td>
                                <td> {{ liste1[1]['Column3'] }} </td>
                            </tr>

                        </tbody>

                    </table>



                    <table> 

                        <caption> someData </caption>

                         <tbody>

                            <tr>
                                <td> {{ liste2[0]['Column1'] }} </td>
                                <td> {{ liste2[0]['Column2'] }} </td>
                                <td> {{ liste2[0]['Column3'] }} </td>
                                <td> {{ liste2[0]['Column4'] }} </td>
                            </tr>

                            <tr>
                                <td> {{ liste2[1]['Column1'] }} </td>
                                <td> {{ liste2[1]['Column2'] }} </td>
                                <td> {{ liste2[1]['Column3'] }} </td>
                                <td> {{ liste2[1]['Column4'] }} </td>
                            </tr>

                            <tr>
                                <td> {{ liste2[2]['Column1'] }} </td>
                                <td> {{ liste2[2]['Column2'] }} </td>
                                <td> {{ liste2[2]['Column3'] }} </td>
                                <td> {{ liste2[2]['Column4'] }} </td>
                            </tr>

                        </tbody>

                    </table>

                </center>

            </div>

        </div>

    </div>


</template>


<style> 

    .zoneTitre{
        border: 2px black solid;
        width: 90%;
    }

    .zoneData{
        border: 1px black solid;
        width: 90%;

        display: flex;
        flex-direction: row;
    }

    .zoneDataBoite{
        border: 1px black solid;
        width: 50%
        ;
    }
</style>