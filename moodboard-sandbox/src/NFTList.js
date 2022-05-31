import { Link } from "react-router-dom";

const NFTList = ({ nfts, nftTitle}) => {
    const API_KEY = process.env.OPENSEA_KEY;

    const options = {
        method: 'GET',
        headers: {Accept: 'application/json', 'X-API-KEY': API_KEY}
      };
      
      fetch('https://api.opensea.io/api/v1/assets?owner=0x9663eeFD2817572dB25A7C0a0E6CCcB3F0e5f121&order_direction=desc&limit=20&include_orders=false', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    return (
        <div className="nft-list">
            <h2>{ nftTitle }</h2>
            {nfts.map((nft) => (
                <div className="vibe-preview" key={nft.id}>
                    <Link to={`/nfts/${nft.id}`}>
                        <h2>{ nft.nftTitle }</h2>
                        <img src={ nft.image_url }/>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default NFTList;