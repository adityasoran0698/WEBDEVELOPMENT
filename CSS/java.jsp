<!DOCTYPE html>
<html>
<head>
    <title>User Visit Counter</title>
</head>
<body>
    <% 
        // Check if the visitCount attribute exists in the session
        Integer visitCount = (Integer) session.getAttribute("visitCount");
        if (visitCount == null) {
            visitCount = 0; // Initialize if not set
        }
        visitCount++; // Increment the counter
        session.setAttribute("visitCount", visitCount); // Update the value in the session scope
    %>
    <h2>Welcome to the User Visit Counter</h2>
    <p>Your current visit number is: <strong><%= visitCount %></strong></p>
</body>
</html>
