import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

import NFTList from "./NFTList";
import useFetch from "./useFetch";

const Vibe = () => {

    // const { data: vibes, isPending, error } = useFetch('http://localhost:8000/vibes');
    const { data: vibes, error } = useFetch('http://localhost:8000/vibes');
    const { data: nfts} = useFetch('http://localhost:8000/nfts');

    const [vibeTitle, setVibeTitle] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const vibe = { vibeTitle };

        setIsPending(true);

        fetch('http://localhost:8000/vibes', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(vibe)
        }).then(() => {
            console.log('new vibe added');
            setIsPending(false);
            navigate('/mood')
        })

    }

    return ( 
        <div className="vibe">

            { error && <div> {error} </div> }
            { isPending && <div>Loading...</div> }

            <h1>ch00se ur m00d</h1>

            {nfts && <NFTList nfts = {nfts} nftTitle="your NFTs"/>}

            <h1>¿what’s the vibe?</h1>
            <p>examples: indie summer, party, rainy days, technofuturism</p>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    required
                    value={vibeTitle}
                    onChange={(e) => setVibeTitle(e.target.value)}
                />
                { !isPending && <button>add vibe</button>}
                { isPending && <button disabled>now vibing...</button>}
            </form>
            
        </div>
     );
}
 
export default Vibe;