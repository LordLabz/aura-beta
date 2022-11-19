import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import {
  MediaRenderer,
  useActiveListings,
  useContract,
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { Card, Grid, Text, Link } from "@nextui-org/react";

export default function App() {
  return (
    <div className={styles.container}>
      <MediaRenderer
        src={
          "https://kroniclabz.mypinata.cloud/ipfs/QmevY1NpYG2v2KNr3rwzmHajF7B1MuhGymwDniBoaY5hzw"
        }
      />
    </div>
  );
}
