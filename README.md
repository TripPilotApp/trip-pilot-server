### 

# API Reference:

### Introduction:

Are you still using MSExcel to organize your trip information? What if there is an app feature that organizes all your travel info in one place? Then, you are all set to explore your dream destination with TripPilot. TripPilot is a cutting edge travel planning app that is designed to assist you in organizing, managing, and cooperating on tasks, and information when planning a trip.

### Errors:

TripPilot uses conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the range 2xx range indicate [success. Codes](http://success.Codes) in the 4xx range indicate an error that failed in the information provided(eg., a required parameter was omitted, e.t.c.). Codes in the range 5xx range indicate and error with TripPilot’s servers(these are rare).

<aside>
💡 **HTTP STATUS CODE SUMMARY**

</aside>

| 200 | OK | Everything worked as expected. |
| --- | --- | --- |
| 400 | Bad Request | The request was unacceptable, often due to missing a required parameter. |
| 401 | Unauthorized | No valid API key provided. |
| 402 | Request Failed | The parameters were valid but the request failed. |
| 403 | Forbidden | The API key doesn’t have permissions to perform the request. |
| 404 | Not Found | The requested resource doesn’t exist. |
| 409 | Conflict | The request conflicts with another request (perhaps due to using the same idempotent key). |
| 429 | Too Many Requests | Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |
| 500, 502, 503, 504 | Server Errors | Something went wrong on TripPilot’s end. (These are rare.) |

### SignUp:

This object represents the successful registration of an User. Use it to register an user to the TripPilot App.

```jsx
Endpoint:

POST /api/SignUp

Parameters:
name string
User's name.It's displayed alongside the user 
in the dashboard.

email string
User's email address.It's displayed alongside the
user in the dashboard.Can be useful in searching
and tracking.This may be upto 512 characters

password string
User's password.It's hashed along with the secret 
and stored in the Database.Not visible to the user
```

### Returns:

Returns the User Object after successful user creation. Raises an error if create parameters are invalid.(for example: Already existing email Id)

```jsx
**Response:
{
  "_id": {
    "$oid": "6695ac2cf9cdd013476048ef"
  },
  "name": "Qwerty",
  "email": "qwerty@gmail.com",
 }**
```

## Login:

This object represents the successful authentication of an existing user. Returns the user object if successful and HTTP error code if unsuccessful

```jsx
Endpoint:

POST /api/Login

Parameters:
email string
User's email address.It's displayed alongside the
user in the dashboard.Can be useful in searching
and tracking.This may be upto 512 characters

password string
User's password.It's hashed along with the secret 
and stored in the Database.Not visible to the user
```

### Returns:

Returns the User Object after user Log In. Raises an error if Login is unsuccessful(for example: Incorrect email Id or Password)

```jsx
**Response:
{
  "_id": {
    "$oid": "6695ac2cf9cdd013476048ef"
  },
  "name": "Qwerty",
  "email": "qwerty@gmail.com",
 }**
```

## User Trips:

This is an object representing the your [trips. You](http://trips.You) can retrieve it to see the trips in your current TripPilot account.

<aside>
💡 ENDPOINTS

</aside>

```jsx
GET /api/:userId/trips
POST /api/:userId/trips
DELETE /api/:userId/trips
```

### Trip Object:

Attributes

id *string*

Unique identifier for the object

---

name *string*

Name of the location of the user’s trip location

---

location object

Location is also known as geographic information or [geospatial data](https://www.tableau.com/data-insights/reference-library/visual-analytics/geospatial), location data refers to information related to objects or elements present in a geographic space or horizon. 

User’s location.

Type string

**Vector:** This form uses points, lines, and polygons to represent features such as cities, roads, mountains, and bodies of water that are mapped and stored in geographic information systems (GIS).

co ordinates number

Latitude and Longitude Value of a location

---

start date number

start date of the trip

---

End date number

End date of the trip

---

Point of Interests -  Array of strings

The places the user wants to visit

---

Packing Lists - Array of Objects

The lists of items to be packed by the group of users planning to go to the trip.

1. id string
    1. Unique identifier of the packing list
2. User_id string
    1. Id of the User assigned to an item.
3. Items - Array of objects
    1. id - string Unique Identifier of an item
    2. item - string Name of the item
    3. Packed - Boolean True or False if the item is packed or not
  
### Get trips : GET /api/:userId/trips

Returns the trips associated with the user by querying with their User ID.

Returns an array of trips, a single trip object or an empty object.

```jsx
**Response:
[{
  "_id": {
    "$oid": "6670b7b8384e2910d98739a6"
  },
  "name": "French Beach Camping",
  "location": {
    "type": "Point",
    "coordinates": [
      -48.395,
      123.9431
    ]
  },
  "start_date": "Wed May 04 2022 12:00:53 GMT+0000 (UTC)",
  "end_date": "Fr May 06 2022 12:00:53 GMT+0000 (UTC)",
  "poi": [
    {}
  ],
  "packing_lists": [
    {
      "_id": "001",
      "user_id": "123",
      "items": [
        {
          "_id": "010",
          "item": "Coleman Stove",
          "packed": "false"
        }
      ]
    }
  ]
},
{
  "_id": {
    "$oid": "66aabaf58ea707ba89f73245"
  },
  "name": "Juan De fuca trial",
  "location": {
    "type": "Point",
    "coordinates": [
      -48.395,
      123.9431
    ]
  },
  "start_date": "Wed May 04 2022 12:00:53 GMT+0000 (UTC)",
  "end_date": "Fr May 06 2022 12:00:53 GMT+0000 (UTC)",
  "poi": [
    {}
  ],
  "packing_lists": [
    {
      "_id": "001",
      "user_id": "123",
      "items": [
        {
          "_id": "010",
          "item": "Coleman Stove",
          "packed": "false"
        }
      ]
    }
  ]
}]**
```

### Post Trips : POST /api/:userId/trips

Returns the posted trip object on successful posting of the trip.

Returns an error if trying to post object without the mandatory fields

```jsx
**Response:
{
  "name": "Juan de Fuca Trail Hiking",
  "location": {
    "type": "Strait",
    "coordinates": [
    48.13, 123.33
    ]
  },
  "start_date": "Wed May 04 2022 12:00:53 GMT+0000 (UTC)",
  "end_date": "Fr May 06 2022 12:00:53 GMT+0000 (UTC)",
  "poi": [
    {}
  ],
  "packing_lists": [
    {
      "_id": "001",
      "user_id": "456",
      "items": [
        {
          "_id": "010",
          "item": "Brush",
          "packed": "false"
        }
      ]
    }
  ]
}**
```

### Delete Trip: DELETE /api/:userId/trips

Delete the list of upcoming trips. Returns the array of trip objects that are deleted

Parameters:

No parameters
```Response:
{
	[
	"id":"ABC",
	"name": "Juan de Fuca Trail Hiking"
	]
  ,
  [
  "id": "bcd",
  "name": "French Beach Camping"],
  
}
```

## User Trip By Id:

Returns a trip Object based on the trip Id of the user Id. You can retrieve it to see trip details.

<aside>
💡 ENDPOINTS

</aside>

```jsx
GET /api/trips/:id
PUT /api/trips/:id
DELETE /api/trips/:id
```
### Get trip by Id:

Retrieves the details of trip based on the trip ID.

**Parameters**

---

No Parameters

**Returns**

---

Returns a trip Object if the call succeeds. If the tripID does not exist, this call throws an error

```jsx
RESPONSE:

{
  "name": "French Beach Camping",
  "location": {
    "type": "Point",
    "coordinates": [
      -48.395,
      123.9431
    ]
  },
  "start_date": "Wed May 04 2022 12:00:53 GMT+0000 (UTC)",
  "end_date": "Fr May 06 2022 12:00:53 GMT+0000 (UTC)",
  "poi": [
    {}
  ],
  "packing_lists": [
    {
      "_id": "001",
      "user_id": "123",
      "items": [
        {
          "_id": "010",
          "item": "Coleman Stove",
          "packed": "false"
        }
      ]
    }
  ]
}
```

### Update a trip:

Updates/edits a trip by setting the values of the parameters passed. Any parameters not provided are left unchanged.

**Parameters**

---

**Name** string

Name of the location of the user’s trip location

**Location string**

Type string

**Vector:** This form uses points, lines, and polygons to represent features such as cities, roads, mountains, and bodies of water that are mapped and stored in geographic information systems (GIS).

co ordinates number

Latitude and Longitude Value of a location

**Start_date**

start date of the trip

**end_date**

End date of the trip

**Returns**

---

Returns the trip object if the call succeeds. If the trip does not exist or another issue occurs, this call throws an error.

<aside>
💡 Response

</aside>

```jsx

{
  "name": "French Beach Camping",
  "location": {
    "type": "Point",
    "coordinates": [
      -48.395,
      123.9431
    ]
  },
  "start_date": "Wed May 04 2022 12:00:53 GMT+0000 (UTC)",
  "end_date": "Fr May 06 2022 12:00:53 GMT+0000 (UTC)",
 }
```

### Delete a trip:

Deletes a trip object

**Parameters**

---

No parameters.

**Returns**

---

Returns the deleted trip object

<aside>
💡 **Response**

</aside>

```jsx
{
  "name": "French Beach Camping",
  "location": {
    "type": "Point",
    "coordinates": [
      -48.395,
      123.9431
    ]
  },
  "start_date": "Wed May 04 2022 12:00:53 GMT+0000 (UTC)",
  "end_date": "Fr May 06 2022 12:00:53 GMT+0000 (UTC)",
  "poi": [
    {}
  ],
  "packing_lists": [
    {
      "_id": "001",
      "user_id": "123",
      "items": [
        {
          "_id": "010",
          "item": "Coleman Stove",
          "packed": "false"
        }
      ]
    }
  ]
}
```
### Get past trips:

Retrieves the past trips of the user.

**Parameters**

---

No parameters

**Response**

---

Returns the list of past trips based on the start time of the trip.

<aside>
💡 RESPONSE

</aside>

```jsx
{
  "name": "French Beach Camping",
  "location": {
    "type": "Point",
    "coordinates": [
      -48.395,
      123.9431
    ]
  },
  "start_date": "Wed May 04 2020 12:00:53 GMT+0000 (UTC)",
  "end_date": "Fr May 06 2020 12:00:53 GMT+0000 (UTC)",
  "poi": [
    {}
  ],
  
}
```
## Packing Lists:

This is an array of object representing your trip’s packing list. You can retrieve it to see the packing lists associated with your [trip.](http://trip.It) It includes the packing list for all users on the current trip.

<aside>
💡 **ENDPOINTS**

</aside>

```jsx
GET /api/:id/packinglist
POST /api/:id/packinglist
DELETE /api/:id/packinglist
PUT /api/:id/packinglist
```

## The Packing List Object

Attributes

---

**_id** string

---

ID of the packing list object

**User_id** string

---

ID of the user assigned to the packing list

**Items** array of objects

---

List of items for the given packing list

**_id** string

ID of the specific item in the array of packing lists

**item** string

---

Name of the item associated with the packing list

**packed** boolean

---

Boolean value which corresponds to true when the item is packed and false when the item is not packed.

## Get Packing lists:

Retrieves the list of items for the given trip.

**Parameters:**

---

No parameters

**Returns:**

---

Returns the list of packing items if a valid Trip ID was provided. Throws an error otherwise.

```jsx
ENDPOINT:
GET /api/:id/packinglist
```

```jsx
Response
"packing_lists": [
    {
      "_id": "001",
      "user_id": "123",
      "items": [
        {
          "_id": "010",
          "item": "Coleman Stove",
          "packed": "false"
        },
        {
          "_id": "011",
          "item": "Propane Cylinder",
          "packed": "false"
        }        
      ]
    },
    {
      "_id": "002",
      "user_id": "456",
      "items": [
        {
          "_id": "111",
          "item": "Tent",
          "packed": "true"
        },
        {
          "_id": "112",
          "item": "Bed",
          "packed": "false"
        }        
      ]
    }
  ]
```

## Post a new packing item:

Posts a new packing item by passing the values of the parameters. Any parameters not provided will be left unchanged.

**Parameters**

---

1. User_id
2. Item
3. packed

**Response**

---

Returns the packing list item object if the update succeeded. This call will throw an error if update parameters are invalid.

```jsx
ENDPOINT:
POST /api/:id/packinglist
```

```jsx
Response
    {
      "_id": "001",
      "user_id": "123",
      "items": [
        {
          "_id": "010",
          "item": "Coleman Stove",
          "packed": "false"
        },
        {
          "_id": "011",
          "item": "Propane Cylinder",
          "packed": "false"
        }        
      ]
    }
  
```
## Deletes an existing item:

Deletes an existing item or packed item id object.

**Parameters**

---

No Parameters

**Returns**

---

Returns the deleted object
 

```jsx
DELETE /api/:id/packinglist
				
	{
          "_id": "010",
          "item": "Coleman Stove",
          "packed": "false"
        },
```
## Edits an existing item:

Updates an existing item by Id.

**Parameters**

Item value that needs to be updated.

---

1. User_id
2. Item
3. packed

**Returns**

---

Returns a packing list object

```jsx
PUT /api/:id/packinglist
"packing_lists": [
    {
      "_id": "001",
      "user_id": "123",
      "items": [
        {
          "_id": "010",
          "item": "Lilleman Stove",
          "packed": "false"
        },
        {
          "_id": "011",
          "item": "Butane Cylinder",
          "packed": "false"
        }        
      ]
    },
    {
      "_id": "002",
      "user_id": "456",
      "items": [
        {
          "_id": "111",
          "item": "Lantern",
          "packed": "true"
        },
        {
          "_id": "112",
          "item": "Mosquito Spray",
          "packed": "false"
        }        
      ]
    }
  ]

```
# trip-pilot
In the project directory run: npm i

To start the server : npm run dev

A brief desc of the folder for dev purpose
public/: This directory stores static files such as images, CSS, and JavaScript files.

src/: This directory contains all the source code for the application.

api/: Contains API endpoints or routes and their respective controllers.

config/: Houses configuration files such as Multer, MongoDB connection, cloudinary configuration, etc.

controllers/: Contains feature-specific controllers.

errors/: Contains error handling middleware.

interface/: Stores Typescript interfaces for MongoDB models

middleware/: Houses middleware functions such as JWT authentication.

models/: Contains MongoDB models.

Services/: This are functions that communicate to our database

utils/: Houses helper functions used throughout the application.

