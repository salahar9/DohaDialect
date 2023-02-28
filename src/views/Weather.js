import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiCelsiusFill, RiFahrenheitFill } from "react-icons/ri";
import "./index.css";
import DetailsCard from "../components/DetailsCard";
import SummaryCard from "../components/SummaryCard";
import "../languages/i18n";

import Astronaut from "../asset/not-found.svg";
import SearchPlace from "../asset/search.svg";
import BackgroundColor from "../components/BackgroundColor";

import axios from "axios";

function App() {
//  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_KEY = `5e66866e169e85300aaf66597fc14ea2`;
  const { t, i18n } = useTranslation();
  const [noData, setNoData] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState();
  const [weatherIcon, setWeatherIcon] = useState(
    `https://openweathermap.org/img/wn/10n@2x.png`
  );
  const [currentLanguage, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });
  const [loading, setLoading] = useState(false);
  const [backgroundSoundEnabled, setBackgroundSoundEnabled] = useState(true);
  const [isFahrenheitMode, setIsFahrenheitMode] = useState(false);
  const degreeSymbol = useMemo(
    () => (isFahrenheitMode ? "\u00b0F" : "\u00b0C"),
    [isFahrenheitMode]
  );
  const [active, setActive] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const a = async () => {
      await getWeather(`Doha,QA`);
    };
    a();
    if (isDark) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, [isDark]);

  // SETTING THEMES ACCORDING TO DEVICE
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setIsDark(true);
    }

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        setIsDark(event.matches);
      });
  }, [setIsDark]);

  const toggleDark = () => {
    setIsDark((prev) => !prev);
  };

  const activate = () => {
    setActive(true);
  };

  useEffect(() => {
    if (currentLanguage === "en") return;

    changeLanguage(currentLanguage);

    // eslint-disable-next-line
  }, [currentLanguage]);

  const toggleFahrenheit = () => {
    setIsFahrenheitMode(!isFahrenheitMode);
  };

  // const handleChange = (input) => {
  //   const { value } = input.target;
  //   setSearchTerm(value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(searchTerm);
  };

  const handleLanguage = (event) => {
    changeLanguage(event.target.value);
    localStorage.setItem("language", event.target.value);
  };

  const changeLanguage = (value, location) => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value) && getWeather(location))
      .catch((err) => console.log(err));
  };

  const getWeather = async (location) => {
    setLoading(true);
    setWeatherData([]);
    let how_to_search =
      typeof location === "string"
        ? `q=${location}`
        : `lat=${location[0]}&lon=${location[1]}`;

    const url = "https://api.openweathermap.org/data/2.5/forecast?";
    try {
      let res = await fetch(
        `${url}${how_to_search}&appid=${API_KEY}&units=metric&cnt=5&exclude=hourly,minutely`
      );
      let data = await res.json();
      if (data.cod !== "200") {
        setNoData("Location Not Found");
        setCity("Unknown Location");
        setTimeout(() => {
          setLoading(false);
        }, 500);
        return;
      }
      setWeatherData(data);
      setTimeout(() => {
        setLoading(false);
      }, 500);
      setCity(`Doha, QA`);
      setWeatherIcon(
        `${
          "https://openweathermap.org/img/wn/" + data.list[0].weather[0]["icon"]
        }@4x.png`
      );
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };

  const myIP = (location) => {
    const { latitude, longitude } = location.coords;
    getWeather([latitude, longitude]);
  };

  // For the autocomplete search box- Places List
  const [countries, setCountries] = useState([]);
  const [countryMatch, setCountryMatch] = useState([]);

  useEffect(() => {
    const loadCountries = async () => {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      let arr = [];
      response.data.forEach((element) => {
        arr.push(element.name.official);
      });
      setCountries(arr);
      console.log(arr);
    };

    loadCountries();
  }, []);

  // console.log(countries);

  const searchCountries = (input) => {
    // const {value}=input.target;
    setSearchTerm(input);

    if (!input) {
      // created if-else loop for matching countries according to the input
      setCountryMatch([]);
    } else {
      let matches = countries.filter((country) => {
        // eslint-disable-next-line no-template-curly-in-string
        const regex = new RegExp(`${input}`, "gi");
        // console.log(regex)
        return country.match(regex) || country.match(regex);
      });
      setCountryMatch(matches);
    }
    // console.log(countryMatch);
  };

  // load current location weather info on load
  window.addEventListener("load", function () {
    navigator.geolocation.getCurrentPosition(myIP);
  });
  return (
    <div className="container">
      <div className="content">
        <div className="info-container">
          <div className="info-inner-container">
            <select
              className="selected-language"
              defaultValue={currentLanguage}
              onChange={(e) => handleLanguage(e)}
            >
              <option selected value="en">
                English
              </option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
            <div className="toggle-container">
              <input
                type="checkbox"
                className="checkbox"
                id="fahrenheit-checkbox"
                onChange={toggleFahrenheit}
              />
              <label htmlFor="fahrenheit-checkbox" className="label">
                <RiFahrenheitFill />
                <RiCelsiusFill />
                <div className="ball" />
              </label>
            </div>
          </div>
          {loading ? (
            <div className="loader"></div>
          ) : (
            <div>
              {weatherData.length === 0 ? (
                <div className="nodata">
                  <h1>{noData ?? t("no-data")}</h1>
                  {noData === "Location Not Found" ? (
                    <>
                      <img
                        src={Astronaut}
                        alt="an astronaut lost in the space"
                      />
                      <p>Oh oh! We're lost in space finding that place.</p>
                    </>
                  ) : (
                    <>
                      <img
                        src={SearchPlace}
                        alt="a person thinking about what place to find"
                      />
                      <p style={{ padding: "20px" }}>
                        Don't worry, if you don't know what to search for, try:
                        Doha, QA.
                      </p>
                    </>
                  )}
                </div>
              ) : (
                <>
                  <h1 className="centerTextOnMobile">{t("today")}</h1>
                  <DetailsCard
                    weather_icon={weatherIcon}
                    data={weatherData}
                    soundEnabled={backgroundSoundEnabled}
                    isFahrenheitMode={isFahrenheitMode}
                    degreeSymbol={degreeSymbol}
                  />
                  <h1 className="title centerTextOnMobile">
                    {t("more-on")} {city ?? t("unknown-location")}
                  </h1>
                  <ul className="summary">
                    {weatherData.list.map((days, index) => (
                      <SummaryCard
                        key={index}
                        day={days}
                        isFahrenheitMode={isFahrenheitMode}
                        degreeSymbol={degreeSymbol}
                      />
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
