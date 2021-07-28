<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create User</title>
</head>

<body>
    <form method="post">
        <table>
            @csrf
            <tr>
                <td>Id</td>
                <td><input type="number" name="id" value="{{$user['id']}}" readonly></td>
            </tr>
            <tr>
                <td>Name</td>
                <td><input type="text" name="name" value="{{$user['name']}}"></td>
            </tr>
            <tr>
                <td>Password</td>
                <td><input type="text" name="password" value="{{$user['password']}}"></td>
            </tr>
            <tr>
                <td>Type</td>
                <td><input type="text" name="type" value="{{$user['type']}}"></td>
            </tr>
            <tr>
                <td>Department</td>
                <td><input type="text" name="dept" value="{{$user['dept']}}"></td>
            </tr>
            <tr>
                <td></td>
                <td><input type="submit" name="Submit" value="submit"></td>
            </tr>
        </table>
    </form>
</body>

</html>