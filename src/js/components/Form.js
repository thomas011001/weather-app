import getWeatherInfo from "../modules/api";
import createResultCard from "./Result";

const form = document.createElement("form");

form.innerHTML = `
  <input type="text" id="citySearch" required>
  <input type="submit">
`;

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  try {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${document.getElementById("citySearch").value}?unitGroup=us&key=LRZYB2ZVNDD8W5DCFVCJVSLNM&contentType=json`;
    const info = await getWeatherInfo(url);
    const card = createResultCard(info);

    const oldResult = document.getElementById("result");
    if (oldResult) oldResult.remove();

    document.getElementById("root").append(card);
  } catch (e) {
    console.log(e);
  }
});

export default form;
