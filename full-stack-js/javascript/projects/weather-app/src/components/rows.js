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
      today = splitDate(day.datetime);
    }

    row.innerHTML = `
			<p>${today}</p>
			<div>
				<p>Max: ${day.tempmax}</p>
				<p>Min: ${day.tempmin}</p>
			</div>
		`;

    wRow.append(row);
  });
}

function splitDate(date) {
  const dateSplit = date.split("-");
  return `${dateSplit[2]}.${dateSplit[1]}`;
}
