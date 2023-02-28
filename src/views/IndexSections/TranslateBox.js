import React, { useState, useEffect } from "react";
import { Form, TextArea, Button, Icon } from "semantic-ui-react";
import axios from "axios";
//import apiroute from "APIutils";
//${apiroute}=https://libretranslate.de
import "semantic-ui-css/semantic.min.css";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TranslateBox() {
  const [inputText, setInputText] = useState("");
  const [language, setLanguage] = useState("detect");
  const [resultText, setResultText] = useState("");
  const detectAuto = async (e) => {
    setInputText(e.target.value);
    await getLanguageSource();
  };
  const getLanguageSource = async () => {
    const data = await axios.post(`https://libretranslate.de/detect`, {
      q: inputText,
    });
    if (data.data[0].confidence > 80) {
      setLanguage(data.data[0].language);
    }
    // console.log(data.data[0]);
    return data.data[0].language;
  };
  const translateText = async () => {
    if (language == "detect") {
      const lang = await getLanguageSource();
      setLanguage(lang);
    }
    const response = await axios.post(`https://libretranslate.de/translate`, {
      q: inputText,
      source: language,
      target: "ar",
      format: "text",
    });
    setResultText(response.data.translatedText);
  };
  return (
    <div className="h-100vh sec2-main">
      <h1 className="sec2-title"> Use this box to translate your text </h1>
      <h1 className="sec2-title"> استعمل الخانة أسفله لترجمة نصوصك</h1>
      <div className="sec2">
        <Form>
          <div className="translate-box">
            <Form.Field
              control={TextArea}
              rows="5"
              placeholder="Type Text to Translate.."
              onChange={async (e) => await detectAuto(e)}
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
        {
          // {language !== "detect" && <span> we detected {language}</span>}
        }
      </div>
    </div>
  );
}
