import getWeatherInfo from "../modules/api";
import createResultCard from "./Result";

const form = document.createElement("form");

form.innerHTML = `
  <input type="text" id="citySearch" required placeholder="Search Your City or Country">
  <input type="submit" style="display: none;">
`;

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const city = document.getElementById("citySearch").value;
  document.getElementById("citySearch").value = "";

  try {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=LRZYB2ZVNDD8W5DCFVCJVSLNM&contentType=json`;
    const info = await getWeatherInfo(url);
    const card = createResultCard(info);

    document.getElementById("results").append(card);
  } catch (e) {
    document.querySelector("#alert .container .note").textContent =
      "No Such Location";
    document.querySelector("#alert .container .note").style.display = "flex";
  }
});

export default form;
