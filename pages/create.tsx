import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>List or Create</h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/mintnft`)}
        >
          {/* Mint a new NFT */}
            <img src={`/icons/create.png`} alt="drop" />
            <h2 className={styles.selectBoxTitle}>Create</h2>
            <p className={styles.selectBoxDescription}>
            </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/listnft`)}
        >
          {/* Staking an NFT */}
          <img src={`/icons/list.png`} alt="drop" />
          <h2 className={styles.selectBoxTitle}>List</h2>
          <p className={styles.selectBoxDescription}>
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/* Staking an NFT */}
          <img src={`/icons/stake.png`} alt="drop" />
          <h2 className={styles.selectBoxTitle}>Stake</h2>
          <p className={styles.selectBoxDescription}>
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/listings`)}
        >
          {/* Staking an NFT */}
          <img src={`/icons/list.png`} alt="drop" />
          <h2 className={styles.selectBoxTitle}>Buy</h2>
          <p className={styles.selectBoxDescription}>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;