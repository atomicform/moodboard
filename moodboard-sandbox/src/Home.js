import { useNavigate } from "react-router-dom";

const Home = () => {
    let navigate = useNavigate();

    const handleClick = () => {
            navigate('/login');
        }

    return ( 
        <div className="home">
            <h1>((vibe.af))</h1>
            <h2>// curate your nft moodboard</h2>
            {/* <h2>// set the soundtrack of your life</h2> */}
            <button onClick={handleClick}>~ start vibing ~</button>
        </div>
     );
}
 
export default Home;