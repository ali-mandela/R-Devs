import {useRef, useState} from "react"

const NewsLetter = () => {
    const email = useRef('');
    return (
        <div className="w-full bg-slate-800">
            <h1 className="text-green-200">NewsLetter</h1>
            <input
                type="email"
                placeholder="Email"
                value={email.current}
                onChange={(e) => {
                email.current += e.target.value
            }}/>
            <Timer/>
        </div>
    )
}

export const Timer = () => {

    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);

    function handleStart (){
        setStartTime(Date.now());
        setNow(Date.now());
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    function handleRestart(){ 
        setStartTime(null);
        setNow(null)
    }

    function handleStop(){
        clearInterval(intervalRef.current);

    }

    let secondPassed = 0;
    if(startTime !=null && now !=null){
        secondPassed = (now - startTime) /1000;
    }
    return (
        <div>
            <h1>Timer {secondPassed.toFixed(3)}</h1>
            <div className="flex text-white gap-10">
            <button onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop}>
        Stop
      </button>
      <button onClick={handleRestart}>
        restart
      </button>
            </div>
        </div>
    )
}

export default NewsLetter