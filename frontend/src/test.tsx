import React from 'react';
import {useEffect,useState} from "react";

export const test = () =>{
    const [initialState, setInitialState]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/bats/BATIMENT0000000027621194').then(res=>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonResponse => setInitialState(jsonResponse))
    })
    console.log(initialState)
}
