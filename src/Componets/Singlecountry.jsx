import { useState } from "react"


export default function Singlecountry({ countrytransfer, func,flagselect }) {
     const [visite2,setvisite2] = useState(false)
     const visitecountry = () => {
        setvisite2(!visite2)
     }
    const { name, flags, cca2 } = countrytransfer

    return (

        
         
            <div>

                <img className="w-[300px] h-[200px]" src={flags.png} alt="" />
                <h1 className="my-3"> {name.common} </h1>
                <h1 className="my-3"> {cca2} </h1>
                <button onClick={() => {func(countrytransfer); flagselect(countrytransfer);visitecountry()}} className="bg-[black] text-white px-5 py-1">{visite2?"Visite Complete" : "Visite"}</button>
                
            </div>
       

    )
}