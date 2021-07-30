export  default function Button(title, callback){
	return `<input type= 'button' class='btn' onclick="${callback()}" name='button' value='${title}'>`;
}