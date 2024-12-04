import { useEffect, useState } from "react";
function useCurrencyInfo(currency) {
  //Hooks are general functions
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);
  return data; // Here we are returning data only so the user will get the curreny data without worrying about how the data is being fetched. We are not returning setData as we dont want the users to manually alter the data value.
}

export default useCurrencyInfo;
