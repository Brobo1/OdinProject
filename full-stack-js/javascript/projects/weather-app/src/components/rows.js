export function addRow(data) {
  const wRow = document.getElementById("weather-row");

  data.forEach((day) => {
    const row = document.createElement("div");
    row.id = "row";
    row.innerHTML = `
			<p>${day.datetime}</p>
		`;
    wRow.append(row);
  });
}
