import React, { useMemo } from "react";
import "../assets/css/DetailsCard.css";
import BackgroundSound from "./BackgroundSound";
import { useTranslation } from "react-i18next";
import convertToFahrenheit from "../helpers/convertToFahrenheit";
import CloudsCard from "./CloudsCard";
import MoreInfoCard from "./MoreInfoCard";

function DetailsCard({
  weather_icon,
  data,
  soundEnabled,
  isFahrenheitMode,
  degreeSymbol,
}) {
  const { clouds, main, weather } = data.list[0];
  console.log(clouds);
  const { t } = useTranslation();

  const formattedData = useMemo(() => {
    return {
      temp: Math.round(
        isFahrenheitMode ? convertToFahrenheit(main.temp) : main.temp
      ),
      feels_like: Math.round(
        isFahrenheitMode
          ? convertToFahrenheit(main.feels_like)
          : main.feels_like
      ),
      temp_min: Math.round(
        isFahrenheitMode ? convertToFahrenheit(main.temp_min) : main.temp_min
      ),
      temp_max: Math.round(
        isFahrenheitMode ? convertToFahrenheit(main.temp_max) : main.temp_max
      ),
    };
  }, [
    isFahrenheitMode,
    main.feels_like,
    main.temp,
    main.temp_max,
    main.temp_min,
  ]);
  console.log("hna");
  console.log(
    clouds,
    main,
    t,
    weather[0],
    soundEnabled,
    formattedData,
    degreeSymbol,
    weather,
    weather_icon
  );

  return (
    <div className="details">
      <CloudsCard
        data={{ formattedData, degreeSymbol, weather, weather_icon }}
      />

      <MoreInfoCard data={{ formattedData, degreeSymbol, main, clouds, t }} />
      {
        // <BackgroundSound weather={weather[0]} soundEnabled={soundEnabled} />
      }
    </div>
  );
}

export default DetailsCard;
