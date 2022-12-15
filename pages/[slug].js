import React from "react";
import { Button, Form } from "react-bootstrap";
import { Snippet } from "../models/snippet";
import { connect } from "../utils/db";
import * as copy from "clipboard-copy";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const createSnippet = ({ snippetText }) => {
  const [t, i18n] = useTranslation();
  return (
    <>
      <div className="text-center mt-4">
        <Button
          onClick={() => copy(window.location)}
          className="mb-4 mt-2"
          variant="outline-info"
        >
          {t("shareButton")}
        </Button>
        <Form>
          <Form.Group controlId="textAreaControl">
            <Form.Control
              style={{ width: "400px", height: "300px", margin: "0 auto" }}
              as="textarea"
              rows={3}
              maxLength="10000"
              disabled
              value={snippetText}
            />
          </Form.Group>
        </Form>
        <div className="mt-4">
          <h3 className="text-danger">{t("warning")}</h3>
        </div>
      </div>
    </>
  );
};

export default createSnippet;

export async function getServerSideProps(context) {
  await connect();
  const slug = context.params.slug;
  const snippetObject = await Snippet.findOne({
    slug,
  });

  return {
    props: {
      snippetText: snippetObject.snippet,
    }, // will be passed to the page component as props
  };
}
