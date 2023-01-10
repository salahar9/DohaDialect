import React, { useState, useEffect } from "react";
import { Form, TextArea, Button, Icon } from "semantic-ui-react";
import axios from "axios";
import apiroute from "APIutils";
export default function Translate() {
  const [inputText, setInputText] = useState("");
  const [resultText, setResultText] = useState("");
  const [detectLanguageKey, setdetectedLanguageKey] = useState("");
  const getLanguageSource = () => {
    axios
      .post(`${apiroute}/detect`, {
        q: inputText,
      })
      .then((response) => {
        setdetectedLanguageKey(response.data[0].language);
      });
  };
  const translateText = () => {
    // setResultText(inputText);

    getLanguageSource();

    let data = {
      q: inputText,
      source: detectLanguageKey,
      target: "ar",
      format: "text",
    };
    console.log(data);
    axios.post(`${apiroute}/translate`, data).then((response) => {
      console.log(response.data);
      console.log(response.languageKey);
      setResultText(response.data.translatedText);
    });
  };
  return (
    <div>
      <div className="app-header">
        <h2 className="header">Doha Dialect</h2>
      </div>

      <div className="app-body">
        <div>
          <Form>
            <Form.Field
              control={TextArea}
              placeholder="Type Text to Translate.."
              onChange={(e) => setInputText(e.target.value)}
            />

            <Form.Field
              control={TextArea}
              placeholder="Your Result Translation.."
              value={resultText}
            />

            <Button color="orange" size="large" onClick={translateText}>
              <Icon name="translate" />
              Translate
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}