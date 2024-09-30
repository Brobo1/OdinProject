export function addRow(data) {
  const wRow = document.getElementById("weather-row");
  let today;

  data.forEach((day, index) => {
    const row = document.createElement("div");
    row.className = "row";

    if (index === 0) {
      today = "Today";
    } else if (index === 1) {
      today = "Tomorrow";
    } else {
      today = day.datetime;
    }

    row.innerHTML = `
			<p>${today}</p>
		`;

    wRow.append(row);
  });
}
