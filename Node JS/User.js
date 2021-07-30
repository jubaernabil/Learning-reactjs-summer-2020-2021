export default function User(user){

	return (
		`
		<tr>
			<td>${user.id}</td>
			<td>${user.name}</td>
			<td>${user.dept}</td>
		
		</tr>
		`
	);
}



/*
export default class User{

	constructor(name, id){
		this.name = name;
		this.id = id;

	}
	getName(){
		return this.name;
	}

}
*/
//export const id =10;