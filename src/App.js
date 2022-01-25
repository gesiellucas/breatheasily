import React, { useEffect, useState } from 'react';
import './style.css';
import { animated, useSpring } from '@react-spring/web';

export default function App(){
    const [state, setState] = useState(3000);
    const [scale, setScale] = useState('scale(1)');
    const [scaleBack, setScaleBack] = useState('scale(2)');
    const [texto, setTexto] = useState('Respire');
    const style = useSpring({
        from:{
            opacity: 0,
            backgroundColor: 'blue',
            transform: scale
        },
        to:{
            opacity: 1,
            backgroundColor: 'red',
            transform: scaleBack
        },
        delay: 2000,
        config: {
            duration: state
        }
    });
    useEffect( ()=>{
        AppTime()
    },state);

    let j = 0;
    let p = 0;
    let z = 0;
    let i = 0;
    let l = 0;

    function hold(){
        const hold1 = setInterval( ()=>{
            setTexto('Segure...')
            if(p>7){
                p = 0;
                clearInterval(hold1);
                exhale();
                setState(7000);
                setScale('scale(1.5)');
                setScaleBack('scale(1.5)');
                
            }
        },1000 );
    }

    function inhale(){
        const inhale1 = setInterval( ()=>{
            setTexto('Respire...')
            if(j>4){
                setState(4000);
                setScale('scale(1)');
                setScaleBack('scale(1.5)');
                
                clearInterval(inhale1);
                j = 0;

                hold();
            }
        },1000 );
    }

    function exhale(){
        const exhale1 = setInterval( ()=>{
            setTexto('Solte...')            
            if(z>8){
                setState(8000);
                setScale('scale(1.5)');
                setScaleBack('scale(1)');
                
                clearInterval(exhale1);
                z = 0;
                wait();
            }
        },1000 );
    } 

    const wait = ()=>{
        
        const wait1 = setInterval( ()=>{
            setTexto('Espere...')
            if(l>1){
                setState(1000);
                setScale('scale(1.5)');
                setScaleBack('scale(1.5)');
                
                clearInterval(wait1);
                l = 0;
                inhale();
        }
    },1000 )
    }

    function AppTime(){

        inhale();
       
        setTimeout(()=>{

            
        },10000);
    }
    return(
        <>
            <h1>Breath easily</h1>
            <h2>{texto}</h2>

            <div className='scene'>
                <animated.div id='app' style={style} />
            </div>
        </>
    )
}