module.exports = function (num) { 
	if(!(Number.isInteger(num)) || num < 0) {
		return {
		'message' : "Invalid Input. Number should be positive integer",
		'status' : 400
		}
	} else {
		return {
		'message' : "Success",
		'status' : 200
		}
	}
};