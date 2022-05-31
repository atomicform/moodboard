import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const NFTDetails = () => {
    const { id } = useParams();
    const { data:nft, error, isPending } = useFetch('http://localhost:8000/nfts/' + id);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/vibes/' + nft.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
}

    return ( 
        <div className="nft-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { nft && (
                <article>
                    <h2>{ nft.title }</h2>
                    <button onClick={handleClick}>Delete</button>
                </article>
            ) }
        </div>
     );
}
 
export default NFTDetails;