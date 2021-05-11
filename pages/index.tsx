import React from "react";
import styles from "../styles/Home.module.css";
import dbConnect from "../util/mongodb";

type Props = {
  serverMessage: string;
};

type ServerSideProps = {
  props: Props;
};

const Home = ({serverMessage}): JSX.Element => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{serverMessage}</h1>
      </main>
    </div>
  );
};

export const getServerSideProps = async (context): Promise<ServerSideProps> => {
  await dbConnect();

  return {
    props: {
      serverMessage: "Wow, such Empty"
    },
  };
};

export default Home;
