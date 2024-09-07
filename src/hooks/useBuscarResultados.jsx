import { useState,useEffect } from "react";
import { buscarResultados } from "../service/unsplashService";


export const useBuscarResultados = () => {
    const [page, setPage] = useState(1);
    const [result, setResult] = useState([]);
    const [valor, setValor] = useState("");
    const [submit, setSubmit] = useState(false);


    useEffect(() => { //Ejecuta el buscarResultados() cuando el valor de page cambia
        if(valor){
            buscarResultados(valor,page).then((data)=>{
                setResult(data.results)
            })
        }
      }, [page,valor])

    const handleOnSubmit = (e)=>{
        e.preventDefault();
        setPage(1)
        buscarResultados(valor,1).then((date)=>{
            setResult(data.results)

        })
    }

    return {
        result,
        setValor,
        handleOnSubmit,
        setPage,
        page,
    }


}



     
    


        



