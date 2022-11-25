# Hall-Booking API

## [Deployed URL](https://hall-booking-0nrd.onrender.com/hall)

### API End-Points :

| Method | End point | Description |
| ---- | ---- | ---- |
| POST | /create-room | will create a Room/Hall. |
| POST | /room-booking | will book a Room/Hall. |
| GET | /booked-rooms | will fetch all the booked Rooms/Halls. |
| GET | /booked-customer-details | will fetch the customer details those whose booked a Room/Hall. |

* Keys Structure to create a room:
     
        {
          "roomNo" : number,
          "custName" : "string",
          "date" : "DD-MM-YYYY",
          "startTime" : "string",
          "endTime": "string"
        }

* Keys Structure to book a room:
    
        {
          "noOfSeats": number,
          "amentities": [array],
          "price": "string"
        } 
