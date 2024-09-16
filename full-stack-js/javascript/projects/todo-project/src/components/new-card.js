import plusIcon from "./../assets/add-svgrepo-com (1).svg";

export function newCard() {
  const cardContainer = document.getElementById("container");
  cardContainer.innerHTML += `
	<div class="card-container">
		<img id="add-card-icon" src="${plusIcon}" alt="Plus Icon" draggable="false">
	</div>
	`;
}
