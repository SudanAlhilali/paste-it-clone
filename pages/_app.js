import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { Button, Navbar, Nav, Container } from "react-bootstrap";
import Link from "next/link";
import "../utils/i18n";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function MyApp({ Component, pageProps }) {
  const [t, i18n] = useTranslation();
  const [lang, setLang] = useState("");

  return (
    <>
      <div dir={lang}>
        <Navbar style={{ backgroundColor: "#6c757d" }} variant="dark">
          <Navbar.Brand href="/">
            <h2 className="ms-5">{t("brand")}</h2>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Link href="/create-snippet">
              <Button variant="outline-info" style={{ marginLeft: "60px" }}>
                {t("createSnippet")}
              </Button>
            </Link>
          </Nav>
          {i18n.language == "ar" && (
            <Button
              variant="primary"
              className="m-2 text-black"
              onClick={() => {
                i18n.changeLanguage("en");
                setLang("ltr");
              }}
            >
              English
            </Button>
          )}
          {i18n.language == "en" && (
            <Button
              variant="primary"
              className=" m-2 text-black"
              onClick={() => {
                i18n.changeLanguage("ar");
                setLang("rtl");
              }}
            >
              عربي
            </Button>
          )}
        </Navbar>
        <Container>
          <Component {...pageProps} />
        </Container>
      </div>
    </>
  );
}

export default MyApp;
