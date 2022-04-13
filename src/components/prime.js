import react, { useState } from 'react';

const Prime = (props) => {

    const [prime, setPrime] = useState("");
    const [num, setNum] = useState("");

    const primeClick = (e) => {
        var isprime = true;

        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isprime = false;
            }
        }
        if (isprime) {
            
            setPrime("prime number");
        } else {
        
            setPrime("not prime number");
        }
    }
    const changeInput = (e) => {
        setNum(e.target.value)

    }
    return (
        <div>
            <div>{prime}</div>
            <input onChange={changeInput} />
            <button onClick={primeClick} type="button" class="btn btn-dark">submit</button>

        </div>
    )

}
export default Prime;