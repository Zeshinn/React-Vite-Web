import React, {useState, useEffect, useRef} from 'react';
import styles from './Stopwatch.module.css';
function Stopwatch(){
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        };
    }, [isRunning]);

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop(){
        setIsRunning(false);
    }
    
    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime(){
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60).toString().padStart(2, '0');
        let seconds = Math.floor(elapsedTime / (1000) % 60).toString().padStart(2, '0');
        let miliseconds = Math.floor((elapsedTime % 1000) / 10).toString().padStart(2, '0');
        return `${minutes}:${seconds}:${miliseconds}`;
    }
    return(
        <>
            <div className={styles.StopWatch}>
                <div className={styles.Display}>
                    {formatTime()}
                </div>
                <div className={styles.Controls}>
                    <button onClick={start} className={styles.StartButton}>Start</button>
                    <button onClick={reset} className={styles.ResetButton}>Reset</button>
                    <button onClick={stop} className={styles.StopButton}>Stop</button>
                </div>
            </div>
        </>
    );

}

export default Stopwatch;