import React, { useState, useEffect } from "react";
import { Form, TextArea, Button, Icon } from "semantic-ui-react";
import axios from "axios";
import apiroute from "APIutils";
import "semantic-ui-css/semantic.min.css";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TranslateBox() {
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
    <div className="h-100vh sec2-main">
      <h1 className="sec2-title"> Use this boxes to translate text </h1>
      <h1 className="sec2-title"> استعمل الخانة أسفله لترجمة نصوصك</h1>
      <div className="sec2">
        <Form>
          <div className="translate-box">
            <Form.Field
              control={TextArea}
              rows="5"
              placeholder="Type Text to Translate.."
              onChange={(e) => setInputText(e.target.value)}
            />
            <Button className="translate-button2" onClick={translateText}>
              {
                // <i class="fa-regular fa-language"></i>
                // <FontAwesomeIcon icon={faLifeRing} />
              }
              <FontAwesomeIcon icon={faGlobe} />
            </Button>
          </div>
          <Form.Field
            dir="rtl"
            control={TextArea}
            protected="true"
            rows="5"
            placeholder="Your Result Translation.."
            value={resultText}
          />
        </Form>
      </div>
    </div>
  );
}
