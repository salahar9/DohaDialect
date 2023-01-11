import React, { useState, useEffect } from "react";
import { Form, TextArea, Button, Icon } from "semantic-ui-react";
import axios from "axios";
import apiroute from "APIutils";
export default function Translate() {
  const [inputText, setInputText] = useState("");
  const [resultText, setResultText] = useState("");
  const getLanguageSource = async () => {
    const data = await axios.post(`${apiroute}/detect`, {
      q: inputText,
    });
    return data.data[0].language;
  };
  const translateText = async () => {
    const lang = await getLanguageSource();
    const response = await axios.post(`${apiroute}/translate`, {
      q: inputText,
      source: lang,
      target: "ar",
      format: "text",
    });
    setResultText(response.data.translatedText);
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

