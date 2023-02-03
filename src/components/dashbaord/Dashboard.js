import react, { useState, useEffect } from "react";
import "./Dashboard.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js";
import InitiatePayment from "../initiate/InitiatePaymet";
import Pending from "../pending/Pending";
import axios from "axios";
const Dashboard = () => {
  const { connection } = useConnection();
  const [url, setUrl] = useState([]);
  const { publicKey, sendTransaction } = useWallet();
  // console.log(publicKey.toBase58());
  useEffect(() => {
    console.log("here");
    console.log(publicKey);

    const callApi = async () => {
      const response = await axios.post("http://localhost:4000/hello/pending", {
        user: publicKey.toBase58(),
      });
      console.log(response);
      setUrl(response.data.res ?? []);
      console.log(url);
    };

    if (publicKey) {
      callApi();
      console.log("calling api");
    }
  }, [publicKey]);
  // TODO function to call the backend api to get the details
  console.log(url)
  return (
    <div>
      {/* Navbar */}
      <div className="dashbaord">
        <div className="logo">🤖SolFlow🤖</div>
        <div className="dashbaord-links">
          <WalletMultiButton />
        </div>
      </div>
      <div>
        <InitiatePayment />
        <div className="pendin-heading">Your Pending Payments!</div>
        <div className="pending-parent">
        {url.map((data) => {
          return <div className="pending-item"><Pending url={data && data.encodedUrl} /></div>;
        })}
        </div>
      </div>
      {/* Dashboard */}
      {/* TODO Show the account details here */}
    </div>
  );
};

export default Dashboard;
