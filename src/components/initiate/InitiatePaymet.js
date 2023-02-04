import react, { useState } from "react";
import "./InitiatePayment.css";
import acios from "axios";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import axios from "axios";
const InitiatePayment = () => {
  const { publicKey, sendTransaction } = useWallet();
  const [recipientwallet, setRecipientWallet] = useState("");
  const [amount, setAmount] = useState(0);
  const [time, setTime] = useState(0);

  const callRegisterAPI = () => {
    console.log(recipientwallet);
    console.log(amount);
    console.log(time);
    if (publicKey) {
      try {
        const userAccount = publicKey.toBase58();
        console.log(userAccount);
        axios
          .post("https://solflow.onrender.com/hello/", {
            user: userAccount,
            recipient: recipientwallet,
            amount: amount,
            time: time,
          })
          .then((res) => {
            console.log(res);
          });
      } catch (error) {
          console.log(error)
      }
    }
  };
  return (
    <div className="initmain">
      <div className="heading"> Initiate Payment</div>

      <form>
        <div className="form-row">
          <p>Recipient Wallet Address</p>
          <input
            onChange={(e) => {
              e.preventDefault();
              setRecipientWallet(e.target.value);
            }}
          ></input>
        </div>
        <div className="form-row">
          <p>Amount to be paid in SOL</p>
          <input
            onChange={(e) => {
              e.preventDefault();
              setAmount(e.target.value);
            }}
          ></input>
        </div>
        <div className="form-row">
          <p>Interval</p>
          <input
            onChange={(e) => {
              e.preventDefault();
              setTime(e.target.value);
            }}
          ></input>
        </div>
        <br />
        <button
          className="form-button"
          onClick={(e) => {
            e.preventDefault();
            callRegisterAPI();
          }}
        >
          Initiate!!
        </button>
      </form>
    </div>
  );
};

export default InitiatePayment;
