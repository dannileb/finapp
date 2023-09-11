import {useState} from "react";

export function useFetching(callback){
    const [error, setError] = useState('');


    const fetching = async () =>{
        try{
            await callback();
        } catch (e){
            setError(e.code);
        }finally {
        }
    }

    return [fetching, error]
}