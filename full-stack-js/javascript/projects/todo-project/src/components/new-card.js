import plusIcon from "./../assets/add-svgrepo-com (1).svg";

export function newCard(cardEvent) {
  const cardContainer = document.getElementById("container");
  const cardAdder = document.createElement("div");
  cardAdder.className = "card-container ";
  cardAdder.innerHTML = `
		<div id="card-add-container">
			<img id="add-card-icon" src="${plusIcon}" alt="Plus Icon" draggable="false">
		</div>
	`;
  cardContainer.append(cardAdder);
  cardAdder.addEventListener("click", cardEvent);
}
