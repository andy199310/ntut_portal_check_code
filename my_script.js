console.log('i am here!');

function getData(context, base_y, to_y){
	var data = [];
	for(var x=0; x<30; x++){
		for(var y=base_y; y<to_y; y++){
			color = context.getImageData(y, x, y+1, x+1);
			appearance = color.data[1] + color.data[2] + color.data[3];
			if(appearance == 765){
				data.push(true);
			}else{
				data.push(false);
			}
		}
	}
	return data;
}

function getTextFromData(data){
	var sum = 0;
	for(var i=0; i<data.length; i++){
		if(data[i] == true){
			sum++;
		}
	}
	switch(sum){
		case 42:
			return 'I';
		case 46:
			return 'R';
		case 51:
			return 'L';
		case 54:
			return 'T';
		case 55:
			return 'S';
		case 58:
			if(data[234] == true){
				return 'V';
			}
			return 'C';
		case 59:
			return 'J';
		case 62:
			return 'X';
		case 66:
			return 'F';
		case 70:
			return 'Y';
		case 76:
			return 'Z';
		case 78:
			return 'N';
		case 79:
			if(data[242] == true){
				return 'U';
			}
			return 'E';
		case 80:
			if(data[236] == true){
				return 'A';
			}
			return 'O';
		case 87:
			return 'K';
		case 93:
			return 'H';
		case 100:
			return 'P';
		case 101:
			return 'Q';
		case 103:
			return 'B';
		case 104:
			return 'D';
		case 108:
			return 'W';
		case 113:
			return 'G';
		case 118:
			return 'M';
	}
	return '?';
}

$('#authImage').ready(function(){

	var img = document.getElementById('authImage');
	var canvas = document.createElement('canvas');
	canvas.width = img.width;
	canvas.height = img.height;
	canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
	var context = canvas.getContext('2d');

	var targetArray = [[0, 23], [22, 45], [44, 67], [67, 90]];

	var allText = '';


	for(var i=0; i<targetArray.length; i++){
		data = getData(context, targetArray[i][0], targetArray[i][1]);
		text = getTextFromData(data);
		console.log('find: ' + text);
		allText += text;
		console.log('now: ' + allText);	
	}

	$('#authcode').val(allText);

});

