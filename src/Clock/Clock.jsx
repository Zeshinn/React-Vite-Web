import styles from './Clock.module.css';
import React, {useState, useEffect} from 'react';

function Clock(){

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [time]);

    function formatTime(){
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return(
        <>
            <div class={styles.ClockContainer}>
                <div className={styles.Clock}>
                    <span>{formatTime()}</span>
                </div>
            </div>
        </>
    );
}

export default Clock;