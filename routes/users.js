var express = require("express");
var router = express.Router();
var uniqid = require("uniqid");

let rooms = [];
let roomNo = 100;

router.get("/", function (req, res, next) {
  res.render("users");
});

//Get all created rooms
router.get("/get-rooms", function (req, res) {
  res.send({
    statusCode: 200,
    Rooms: rooms.length,
    data: rooms,
  });
});

//Create a Room:
router.post("/create-room", function (req, res) {
  let room = {};
  room.id = uniqid();
  room.roomNo = roomNo;

  if (req.body.noOfSeats) {
    room.noOfSeats = req.body.noOfSeats;
  } else {
    res.send({
      statusCode: 400,
      message: "Please Specify No of seats for room",
    });
  }

  if (req.body.amentities) {
    room.amentities = req.body.amentities;
  } else {
    res.send({
      statusCode: 400,
      message: "Please specify all amentities for Room",
    });
  }

  if (req.body.price) {
    room.price = req.body.price;
  } else {
    res.send({
      statusCode: 400,
      message: "Please specify price per hour for Room",
    });
  }
  room.bookingAvailable = true;
  room.bookedStatus = "Not Yet Booked";
  rooms.push(room);
  roomNo++;

  res.send({
    statusCode: 200,
    message: "Room Created Successfully",
  });
});

//Book a Room
router.post("/room-booking", function (req, res) {
  let booked = false;
  rooms.map((e) => {
    if (e.roomNo === req.body.roomNo && e.bookingAvailable === true) {
      e.bookingAvailable = false;
      e.bookedStatus = "Booked Successfully";
      if (req.body.custName) {
        e.custName = req.body.custName;
      } else {
        res.send({
          message: "Please enter your name",
        });
      }
      if (req.body.date) {
        e.date = req.body.date;
      } else {
        res.send({
          message: "Please enter date",
        });
      }
      if (req.body.startTime) {
        e.startTime = req.body.startTime;
      } else {
        res.send({
          message: "Please enter startTime",
        });
      }
      if (req.body.endTime) {
        e.endTime = req.body.endTime;
      } else {
        res.send({
          message: "Please enter endTime",
        });
      }
      if (req.body.roomNo) {
        e.roomNo = req.body.roomNo;
      } else {
        res.send({
          message: "Please enter roomNo",
        });
      }
      booked = true;
    }
  });
  if (booked) {
    res.json({
      message: "Booking Successfull",
    });
  } else {
    res.json({
      message: "Booking Failed",
      instruction: "check the availability",
    });
  }
});

//Details of Booked Rooms
router.get("/booked-rooms", function (req, res) {
  let BookedRooms = [];
  rooms.map((e) => {
    if (e.bookingAvailable == false) {
      BookedRooms.push({
        Room_Number: e.roomNo,
        Booked_Status: e.bookedStatus,
        Customer_Name: e.custName,
        Date: e.date,
        Start_Time: e.startTime,
        End_Time: e.endTime,
      });
    }
  });
  if (BookedRooms.length > 0) {
    res.json({
      Total_Rooms: rooms.length,
      Rooms_Available: rooms.length - BookedRooms.length,
      Booked_Rooms: BookedRooms.length,
      Booked_Rooms_Data: BookedRooms,
    });
  } else {
    res.send({
      message: "No rooms booked yet",
    });
  }
});

//Details of customers those who booked room.
router.get("/booked-customer-details", function (req, res) {
  let CustomerDetails = [];
  rooms.map((e) => {
    if (e.bookingAvailable == false) {
      CustomerDetails.push({
        Customer_Name: e.custName,
        Room_Number: e.roomNo,
        Date: e.date,
        Start_Time: e.startTime,
        End_Time: e.endTime,
      });
    }
  });
  if (CustomerDetails.length > 0) {
    res.json({
      Booked_Rooms: CustomerDetails.length,
      Customer_Details: CustomerDetails,
    });
  } else {
    res.send({
      message: "No rooms booked yet",
    });
  }
});

module.exports = router;
