var fs = require('fs')
function openFile() {
	dialog.showOpenDialog({ filters: [
		{ name: 'tree-json', extensions: ['json'] }
		]},
		function (fileNames) {
			if (fileNames === undefined) return;
			var fileName = fileNames[0];
			//fs.readFile(fileName, 'utf-8',	
					//	function(err, data) {
							//document.getElementById("editor").value = data;
					//		drawTree(data);
					//	});
			var data = require(fileName);
			drawTree(data);
		});
}
