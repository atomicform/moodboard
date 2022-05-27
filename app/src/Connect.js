import { ConnectButton } from "@rainbow-me/rainbowkit";
import { activeConnector, useAccount, useConnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

// import 'dotenv/config';
import Web3 from 'web3';
import { OpenSeaPort, Network } from 'opensea-js';

// // Set up default provider, can only be used for read ops on OpenSea API
// const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io');

// // Instantiate OpenSea "seaport" yarrr matey
// const seaport = new OpenSeaPort(provider, {
//   networkName: Network.Main,
//   apiKey: process.env.OPENSEA_KEY
// });

// // const recursiveGet = async function (results, offset) {
// //   requestOptions.offset = offset;
// //   const newData = await seaport.api.getAssets(requestOptions);
// //   results = results.concat(newData.assets);

// //   return (newData.assets.length > 0) ? await recursiveGet(results, offset += limit) : results
// // }

// let offset = 0;
// const limit = 50;

// // Request Options
// const owner = "";

// const requestOptions = {
//   owner,
//   order_direction: 'desc',
//   limit: limit,
//   offset: offset
// };


export const Connect = () => {
  
  const { data } = useAccount();
  console.log("ua", data);

  // // Get all NFT's from OpenSea in the specified owner's collection
  // requestOptions.offset = offset;
  // requestOptions.owner = data.address;
  // const newData = await seaport.api.getAssets(requestOptions);
  // // const results = await recursiveGet([], offset);
  // console.log(newData);

  const { activeConnector } = useConnect({
    connector: new InjectedConnector(),
    async onConnect(data) {
      console.log(data);
      // await requestNFTs(data?.address);
    }
  });

  return <ConnectButton />;
};