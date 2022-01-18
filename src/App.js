import React, { useEffect } from 'react';

export default function App(){

    useEffect( ()=>{
        AppTime()
    },[]);

    let j = 0;
    let p = 0;
    let z = 0;
    let i = 0;
    let l = 0;

    const hold = setInterval( ()=>{
        document.getElementById('hold').innerHTML = p++;
        if(p>6){
            clearInterval(hold);
            p = 0;
            exhale();
        }
    },1000 );

    const inhale = setInterval( ()=>{
        document.getElementById('inhale').innerHTML = j++;
        if(j>4){
            clearInterval(inhale);
            j = 0;
            hold();
        }
    },1000 );

    const exhale = setInterval( ()=>{
        document.getElementById('exhale').innerHTML = z++;
        if(z>8){
            clearInterval(exhale);
            z = 0;
            wait();
        }
    },1000 );

    const wait = setInterval( ()=>{
        document.getElementById('wait').innerHTML = l++;
        if(l>7){
            clearInterval(wait);
            l = 0;
            inhale();
        }
    },1000 )

    function AppTime(){
       
        setTimeout(()=>{

            const counter = setInterval(() => {
                document.getElementById('inspire').innerHTML = i++;
                if(i>10){
                    i=0;
                }
            }, 1000);
            inhale();
        },1000);
    }
    return(
        <>
            <h1>Breath easily</h1>
            <div id="hold"></div>
            <br/>
            <div id="inspire"></div>
            <br/>
            <div id="inhale"></div>
            <br/>
            <div id="exhale"></div>
            <br/>
            <div id="wait"></div>
        </>
    )
}