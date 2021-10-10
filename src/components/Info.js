import '../style/Info.css'

function Info(){


    const Data = [
        {
            Nom: "GitHub",
            Lien: "https://github.com/CharboThomas/TelecommunacationSoftware",
        },
        {
            Nom: "Slide",
            Lien: "https://slides.com/thomascharbonnet",
        },
        {
            Nom: "Target",
            Lien: "https://4v9r83qfo4.execute-api.eu-central-1.amazonaws.com/dev",
        }

    ]

    return(    
        <div class="boite">

    <center>

        <ul>
            <h2> Information : </h2>

            <li> Creator : Thomas Charbonnet </li>

            {Data.map((info,index)=>(
                <li key={`${info.Nom}-${index}`}> 
                    {info.Nom} : <a href={info.Lien}>{info.Lien}</a>
                </li>
            ))}

        </ul>

    </center>

</div>)
}

export default Info