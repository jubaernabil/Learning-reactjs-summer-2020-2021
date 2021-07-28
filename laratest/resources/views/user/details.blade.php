<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>User Details</title>
</head>

<body>
    <h3>User Details</h3>
    <br> <br>

    <table border="1">
        <tr>
            <td> ID </td>
            <td> Name </td>
            <td> Type </td>
            <td> Department </td>
        </tr>

        <tr>
            <td>{{$user['id']}}</td>
            <td>{{$user['name']}}</td>
            <td>{{$user['type']}}</td>
            <td>{{$user['dept']}}</td>
        </tr>

    </table>
</body>

</html>