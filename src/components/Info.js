import '../style/Info.css'

function Info(){


    const Data = [
        {
            Nom: "GitHub",
            Lien: "https://github.com/CharboThomas/MY-FIRST-APP-REACT",
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

        <div className="InfoBox">

                <ul>
                    <h2> Information : </h2>

                    <li className = "InfoListe" > Creator : Thomas Charbonnet </li>

                    {Data.map((info,index)=>(
                        <li className = "InfoListe" key={`${info.Nom}-${index}`}> 
                            {info.Nom} : <a className = "InfoLien" href={info.Lien}>{info.Lien}</a>
                        </li>
                    ))}

                </ul>

        </div>
    
    )
}

export default Info