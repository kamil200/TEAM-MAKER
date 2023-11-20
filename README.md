# Heliverse Internship Task For Full Stack Development

## Overview
This task demonstrates the functionality of a user interface built with Angular, showcasing a comprehensive feature set using a mock data source. The project renders user information in card format with pagination and implements multiple filters for an enhanced user experience.



# Backend:



GET /api/users: 
This API endpoint is used to retrieve a list of users. It sends an HTTP GET request to the specified URL: https://kamil-patel.onrender.com/api/users/.
The last execution of this request returned a response with a status code of 200, indicating a successful request. The response body contained an array of user objects, with each object having properties such as _id, id, first_name, last_name, email, gender, avatar, domain, available, and __v. 
Additionally, the response included information about the pagination of the user list, such as the current page number (currentPage), total number of pages (totalPages), and total number of users (totalUsers).
Please note that the actual values of the user properties are not provided in the response. You can use this endpoint to retrieve a list of users and their associated information.
To use this endpoint, send an HTTP GET request to the specified URL. No request parameters are required.

Example Response:

Status: 200 OK
{
    "users": [
        {
            "_id": "",
            "id": 0,
            "first_name": "",
            "last_name": "",
            "email": "",
            "gender": "",
            "avatar": "",
            "domain": "",
            "available": true,
            "__v": 0
        }
    ],
    "currentPage": 0,
    "totalPages": 0,
    "totalUsers": 0
}

GET /api/users/id: 
POST /api/users:
PUT /api/users/id: 
DELETE /api/users/id: 

GET /api/team: https://kamil-patel.onrender.com/api/team/
GET /api/team/:id: 

# Deliverables
frontend : https://heliverse-assignment-3x5q5x0n8-kamil200.vercel.app
backend : https://kamil-patel.onrender.com




 If you encounter any issues or have suggestions, kindly let me know.
 🚀✨
note: aesthetic credits: https://escharts.com/
