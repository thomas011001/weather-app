async function getWeatherInfo(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    const today = data.days[0];
    return {
      description: data.description,
      address: data.resolvedAddress,
      date: today.datetime,
      tempmax: today.tempmax,
      tempmin: today.tempmin,
    };
  } catch (e) {
    throw new Error(e);
  }
}

export default getWeatherInfo;
