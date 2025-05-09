async function getWeatherInfo(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    const today = data.days[0];
    return {
      temp: today.temp,
      description: data.description,
      address: data.address,
      date: today.datetime,
      tempmax: today.tempmax,
      tempmin: today.tempmin,
    };
  } catch (e) {
    throw new Error(e);
  }
}

export default getWeatherInfo;
