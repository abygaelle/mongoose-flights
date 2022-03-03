<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/stylesheets/style.css">
  <title>All Flights</title>
</head>
<body>
  <h1>All Flights</h1>
  <table>
    <thead>
      <tr>
        <th>Airline</th>
        <th>Airport</th>
        <th>Flight Number</th>
        <th>Departing Date</th>
      </tr>
    </thead>
    <tbody>
      <% flights.forEach(function(flight) {%>
        <tr>
          <td><%= flight.airline %></td>
          <td><%= flight.airport %></td>
          <td><%= flight.flightNo %></td>
          <td><%= flight.departs %></td>
        </tr>
      <% }) %>
    </tbody>
  </table>
</body>
</html>