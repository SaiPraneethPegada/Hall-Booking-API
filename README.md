# Hall-Booking API

----

Deployed Server URL - https://nodejs-hall-booking.herokuapp.com/hall

----

* API End-Points :


-> "/create-room" : To create a Room/Hall.
    
    Keys Structure in Postman:
    
        {
          "noOfSeats": number,
          "amentities": [array],
          "price": "string"
        }


-> "/room-booking" : To book a Room/Hall.
 
     Keys Structure in Postman:
     
        {
          "roomNo" : number,
          "custName" : "string",
          "date" : "DD-MM-YYYY",
          "startTime" : "string",
          "endTime": "string"
        }


-> "/booked-rooms" : To get all the booked Rooms/Halls.


-> "/booked-customer-details" : To get the customer details those whose booked a Room/Hall.
