import Head from "next/head";
import Image from "next/image";
import { Button } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const [t, i18n] = useTranslation();
  return (
    <>
      <div className="mr-autod-flex align-items-center justify-content-center text-center">
        <Head>
          <title>{t("title")}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="mt-4">{t("welcomeTitle")}</h1>
        <p>{t("description")}</p>
        <Link href="/create-snippet">
          <Button variant="outline-info">{t("createSnippet")}</Button>
        </Link>
      </div>
      {/* footer */}
      <div className="text-center mt-5">
        <h2 className="">{t("developer")}</h2>
        <Link href="https://github.com/SudanAlhilali" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faSquareGithub}
            style={{ width: "64px", margin: "20px" }}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/sudan-alhilali/"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-5xl"
            rel="noopener noreferrer"
            style={{ width: "65px" }}
          />
        </Link>
      </div>
    </>
  );
}
