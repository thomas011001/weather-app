function createResultCard(info) {
  const card = document.createElement("div");
  card.id = "result";

  card.innerHTML = `
  <h3 class="address">${info.address}</h3>
  <p class="description">${info.description}</p>
  <div class="temp">date: ${info.date}. ${info.tempmax}:${info.tempmin}</div>
  `;

  return card;
}

export default createResultCard;
