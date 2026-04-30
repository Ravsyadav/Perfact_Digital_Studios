import React, { useEffect, useState } from 'react'

const Counter = ({target}) => {
    const [count, setCount] = useState(0);

    useEffect(() =>{

        if(target){
            const increment = target/200;
            const timer = setInterval(()=>{
                setCount(prevCount => {
                    if(prevCount < target){
                    return Math.ceil(prevCount + increment);
                    }
                    clearInterval(timer);
                    return target
                 })
            }, 10)  
          return () => clearInterval(timer);      
        }
    }, [target] )
    return (
        <span>
            {count}
        </span>
  )
}

export default Counter
