import react from "react";
import "./Hero.css";
import hero from "../../assests/hero2.7.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-image">
        <img src={hero} style={{ width: "100%" }} border="0" alt="Null"></img>
      </div>
      <div className="hero-text">
        <p>
          Your one stop solution to initiate recurring payment with just three
          simple steps:
        </p>
        <p>👨 Enter the beneficier wallet</p>
        <p>
        💰 Enter the amount of SOL and time interval in which you want to send
          SOL
        </p>
        <p>
          <b>And 🎊BOOM🎊 You are set to receive your recurring payment links</b>
        </p>
        <p>📠 Now just scan the QR codes and pay. As simple as that!</p>
      </div>
    </div>
  );
};

export default Hero;
