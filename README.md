# USER MANAGEMENT - MERN stack web application 

## Overview
This task demonstrates the functionality of a user interface built with MERN, showcasing a comprehensive feature set using a mock data source. The project renders user information in card format with pagination and implements multiple filters for an enhanced user experience.

# Backend:

### API Endpoints
| HTTP Verbs | Endpoints | |
| --- | --- | --- |
| GET | /api/users/ |  |
| GET | /api/users/_id | |
| POST | /api/users/ |  |
| PUT | /api/users/id |  |
| DELETE | /api/users/_id |  |
| GET | /api/team |  |
| GET | /api/team/_id |  |

Example Response(GET /api/users/):
```json
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
```
Teams-schema:
```javascript

  {
    team_name: { type: String, required: true },
    
    team_members: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
      default: [],
    }
```
Users-schema:
```javascript
{
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Other"],
    },
    avatar: {
      type: String,
      default: null,
    },
    domain: {
      type: String,
      required: true,
    },
    available: {
      type: Boolean,
      required: true,
      default: true,
    }
  }
```

# Deliverables
Frontend
```https
heliverse-assignment-orcin.vercel.app
```
Backend
```https
kamil-patel.onrender.com/api/users
kamil-patel.onrender.com/api/team
```
If you encounter any issues or have suggestions, kindly let me know. 🚀✨

note: aesthetic credits: https://escharts.com/
