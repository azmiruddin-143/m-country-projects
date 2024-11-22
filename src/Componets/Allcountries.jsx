import { useEffect } from "react"
import { useState } from "react"
import Singlecountry from "./Singlecountry"
import { list } from "postcss"


export default function Allcountries() {
   const [countries, setcountries] = useState([])
   const [visite, setvisite] = useState([])
   const [flag, setflag] = useState([])

   let flagselect = (countrytransfer) => {
      let finalflag = [...flag, countrytransfer]
      setflag(finalflag)
   }

   let countryvisite = (countrytransfer) => {
      let finalset = [...visite, countrytransfer]
      setvisite(finalset)
   }
   useEffect(() => {
      fetch("https://restcountries.com/v3.1/all")
         .then(response => response.json())
         .then(countriesdata => setcountries(countriesdata))
   }, [])

   return (

      <div>
         <h1>Visite coutry{visite.length}</h1>
         <div className="flex  gap-3">
            <div>
            {
               visite.map(azmir => <li className="pb-1">{azmir.name.common}</li>)
            }
            </div>
            <div>
            {
               flag.map(flag => <img className=" w-[50px] h-[30px] pb-2" src={flag.flags.png}></img>
               )
            }
            </div>
         </div>
         <div className="grid 2xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-7 py-10 bg-[#9c9a9a2e]">

            {
               countries.map(countriesloop => <Singlecountry key={countriesloop.cca2} flagselect={flagselect} countrytransfer={countriesloop} func={countryvisite} ></Singlecountry>)
            }
         </div>
      </div>
   )
}