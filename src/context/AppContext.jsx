import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const currencyMap = {
    US: "USD",
    IN: "INR",
    GB: "GBP",
    EU: "EUR",
    JP: "JPY",
    AU: "AUD",
    CA: "CAD",
    CH: "CHF",
  };

  const [currency, setCurrency] = useState("USD");

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        const country_code = data.country_code;

        if (currencyMap[country_code]) {
          setCurrency(currencyMap[country_code]);
        }
      } catch (error) {
        console.error("Error in fetching location:", error);
      }
    };

    fetchLocation();
  }, []); // Empty dependency array means it runs only once on mount

  return (
    <AppContext.Provider value={{ currency }}>
      {children}
    </AppContext.Provider>
  );
};
