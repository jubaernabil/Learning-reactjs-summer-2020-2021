import User from './User.js';
export default function UserList(ulist){

    const user ={
        id: 1,
        name: 'nabil',
        dept: 'cs'

    };

	return (
		`
		<table border=1>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>DEPT</th>
            
            
            </tr>
           ${User(user)}
        </table>
		`
	);
}