import React, { useEffect, useMemo, useRef, useState } from "react";
import QRCodeStyling from "@solana/qr-code-styling";
import "./Pending.css";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { createQROptions } from "@solana/pay";
import axios from "axios";
const Pending = ({ url }) => {
  const { publicKey, sendTransaction } = useWallet();
  const [size, setSize] = useState(() =>
    typeof window === "undefined"
      ? 400
      : Math.min(window.screen.availWidth - 48, 500)
  );

  console.log(url);
  useEffect(() => {
    const listener = () =>
      setSize(Math.min(window.screen.availWidth - 48, 500));

    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, []);

  const options = useMemo(
    () => createQROptions(url, size, "transparent", "#2a2a2a"),
    [url, size]
  );

  const qr = useMemo(() => new QRCodeStyling(), []);
  useEffect(() => qr.update(options), [qr, options, url]);

  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      qr.append(ref.current);
    }
  }, [ref, qr, url]);
  return (
    <div>
      <div ref={ref} />
    </div>
  );
};

export default Pending;
