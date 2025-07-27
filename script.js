function createTable() {
	const rows = parseInt(prompt("Input number of rows"));
	const cols = parseInt(prompt("Input number of columns"));

	 const table = document.getElementById("myTable");
	 table.border = "1";
     table.style.borderCollapse = "collapse";
     table.style.marginTop = "20px";
	for(let i = 0; i< rows; i++){
		const tr = document.createElement("tr");
		for(let j = 0; j < cols ; j++){
			const td = document.createElement("td");
			td.textContent = `Row- ${i} Column- ${j}`;
		    tr.appendChild(td);
			td.style.padding = "8px";
		}
		table.appendChild(tr);
	}
	document.body.appendChild(table);
  
}
