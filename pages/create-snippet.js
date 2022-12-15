import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const createSnippet = () => {
  const router = useRouter();
  const [snippet, setSnippet] = useState("");
  const [t, i18n] = useTranslation();

  const saveSnippet = async () => {
    const response = await fetch("/api/snippets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        snippet,
      }),
    });
    const createdSnippet = await response.json();
    router.push(`/${createdSnippet.slug}`);
  };

  return (
    <>
      <div className="text-center mt-4">
        <h1>{t("createScreen")}</h1>
        <p>{t("createDesc")}</p>
        <Form>
          <Form.Group controlId="textAreaControl">
            <Form.Control
              style={{ width: "400px", height: "300px", margin: "0 auto" }}
              as="textarea"
              rows={3}
              maxLength="10000"
              onChange={(e) => setSnippet(e.target.value)}
            />
          </Form.Group>
          <Button onClick={saveSnippet} variant="outline-info" className="mt-2">
            {t("createButton")}
          </Button>
        </Form>
        <div className="mt-4">
          <h3 className="text-danger">{t("warning")}</h3>
        </div>
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
};

export default createSnippet;
