import { useAddress, useMetamask, useDisconnect } from "@thirdweb-dev/react";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

export default function Header() {
  // Helpful thirdweb hooks to connect and manage the wallet from metamask.
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div>
          <Link href="/home" passHref role="button">
            <img
              src={`/aura-main.png`}
              alt="Aura Logo"
              width={135}
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>
      </div>
      <div
        style={{
          marginTop: 32,
          marginBottom: 32,
          marginRight: 3,
          padding: 2,
        }}
      >
        <Link href="/create">
          <a className={styles.menuButton} style={{ textDecoration: "none" }}>
            NFTs
          </a>
        </Link>
        <Link href="/listings">
          <a className={styles.menuButton} style={{ textDecoration: "none" }}>
            Buy
          </a>
        </Link>
        <Link href="/stake">
          <a className={styles.menuButton} style={{ textDecoration: "none" }}>
            The Crypt
          </a>
        </Link>
      </div>
      <div className={styles.right}>
        {address ? (
          <>
            <a
              className={styles.secondaryButton}
              onClick={() => disconnectWallet()}
            >
              Disconnect Wallet
            </a>
            <p style={{ marginLeft: 8, marginRight: 8, color: "grey" }}>|</p>
            <p>{address.slice(0, 6).concat("...").concat(address.slice(-4))}</p>
          </>
        ) : (
          <a
            className={styles.mainButton}
            onClick={() => connectWithMetamask()}
          >
            Connect Wallet
          </a>
        )}
      </div>
    </div>
  );
}
