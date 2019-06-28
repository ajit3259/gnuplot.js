var outstr="";
var Module = {
	"noInitialRun": true,
	print: function(text){
		//console.log(text);
		outstr += text;
	},
	printErr: function(text) {
		console.error(text);
	}
};
