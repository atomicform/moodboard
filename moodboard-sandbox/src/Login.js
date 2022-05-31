import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

import useFetch from "./useFetch";

const Login = () => {
    // const { data: addresses} = useFetch('http://localhost:8000/addresses');
    
    const [address, setAddress] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();
        // const address = { address };

        setIsPending(true);
        console.log('sent');
        console.log(address);

        navigate('/vibe');

        // TODO: rewrite to grab nfts from address and store them in db

        // fetch('http://localhost:8000/addresses', {
        //     method: 'POST',
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(address)
        // }).then(() => {
        //     console.log('new address added');
        //     setIsPending(false);
        //     navigate('/vibe')
        // })
    }

    return ( 
        <div className="login">
            <h2>hemlo</h2>
            <h1>gib us ur eth address</h1>
            <p>(we promise we won't steal ur money)</p>
            
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                { !isPending && <button>send it</button>}
                { isPending && <button disabled>hehehe...</button>}
            </form>
        </div>

     );
}
 
export default Login;