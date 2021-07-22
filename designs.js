function makeGrid() {
	console.log("makeGrid is running!")



	var art, cell, Height, Width, rows;

	art = $('#pixelMark');
	Height = $('#input_height').val();
	Width = $('#input_width').val();

	art.children().remove()

	for (x = 0; x < Height; x++) {
	art.append('<tr></tr>');
	}

	rows = $('tr');

	for (y = 0; y < Width; y++) {
	rows.append('<td></td>');
	}

	cell = art.find('td');


	cell.click(function() {

		console.log("changeColor is running!");
		var color;
		color = $("#colorPick").val();
		$(this).attr('bgcolor', color);
	});

}


var submit;

submit = $('input[type="submit"]')

submit.click(function(event) {
  event.preventDefault();
  makeGrid();
});
