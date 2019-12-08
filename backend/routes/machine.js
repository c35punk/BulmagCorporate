const express = require("express");
const authCheck = require("../config/auth-check");
const Machine = require("../models/Machine");

const router = new express.Router();

router.post("/add-system", authCheck, (req, res) => {
  const machine = req.body;
  let machineObj = {
    creator: req.user._id,
    machine
  };

  Machine.create(machineObj)
    .then(createdMachine => {
      res.status(200).json({
        success: true,
        message: "Machine created successfully.",
        data: createdMachine
      });
    })
    .catch(err => {
      console.log(err);
      const message = "Something went wrong :(";
      return res.status(200).json({
        success: false,
        message: message
      });
    });
});

router.get("/dashboard", authCheck, (req, res) => {
  Machine.find().then(machines => {
    res.status(200).json(machines);
  });
});


// router.get("/approved", authCheck, (req, res) => {
//   if (req.user.roles.indexOf("Admin") > -1) {
//     Machine.find({ status: "Approved" }).then(machines => {
//       res.status(200).json(machines);
//     });
//   } else {
//     return res.status(200).json({
//       success: false,
//       message: "Invalid credentials!"
//     });
//   }
// });

// router.get("/cancelled", authCheck, (req, res) => {
//   if (req.user.roles.indexOf("Admin") > -1) {
//     Machine.find({ status: "Cancelled" }).then(machines => {
//       res.status(200).json(machines);
//     });
//   } else {
//     return res.status(200).json({
//       success: false,
//       message: "Invalid credentials!"
//     });
//   }
// });

// router.get("/delivered", authCheck, (req, res) => {
//   if (req.user.roles.indexOf("Admin") > -1) {
//     Machine.find({ status: "Delivered" }).then(machines => {
//       res.status(200).json(machines);
//     });
//   } else {
//     return res.status(200).json({
//       success: false,
//       message: "Invalid credentials!"
//     });
//   }
// });

// router.post("/approve/:id", authCheck, (req, res) => {
//   if (req.user.roles.indexOf("Admin") > -1) {
//     const machineId = req.params.id;

//     Machine.findById(machineId)
//       .then(machine => {
//         if (!machine) {
//           const message = "Machine not found.";
//           return res.status(200).json({
//             success: false,
//             message: message
//           });
//         }

//         machine.status = "Approved";
//         machine
//           .save()
//           .then(() => {
//             res.status(200).json({
//               success: true,
//               message: "Machine approved successfully."
//             });
//           })
//           .catch(err => {
//             console.log(err);
//             const message = "Something went wrong :(";
//             return res.status(200).json({
//               success: false,
//               message: message
//             });
//           });
//       })
//       .catch(err => {
//         console.log(err);
//         const message = "Something went wrong :(";
//         return res.status(200).json({
//           success: false,
//           message: message
//         });
//       });
//   } else {
//     return res.status(200).json({
//       success: false,
//       message: "Invalid credentials!"
//     });
//   }
// });

// router.post("/cancel/:id", authCheck, (req, res) => {
//   const machineId = req.params.id;

//   // Creator only
//   Machine.findById(machineId)
//     .then(machine => {
//       if (!machine) {
//         const message = "Machine not found.";
//         return res.status(200).json({
//           success: false,
//           message: message
//         });
//       }

//       const isAdmin = req.user.roles.indexOf("Admin") > -1;
//       const isOwner =
//         JSON.stringify(machine.creator) === JSON.stringify(req.user._id); // NB obj ids

//       if (!isAdmin && !isOwner) {
//         return res.status(200).json({
//           success: false,
//           message: "Invalid credentials!"
//         });
//       }

//       if (!isAdmin && machine.status !== "Pending") {
//         const message = "Machine is already in transit.";
//         return res.status(200).json({
//           success: false,
//           message: message
//         });
//       }

//       machine.status = "Cancelled";
//       machine
//         .save()
//         .then(() => {
//           res.status(200).json({
//             success: true,
//             message: "Machine cancelled successfully."
//           });
//         })
//         .catch(err => {
//           console.log(err);
//           const message = "Something went wrong :(";
//           return res.status(200).json({
//             success: false,
//             message: message
//           });
//         });
//     })
//     .catch(err => {
//       console.log(err);
//       const message = "Something went wrong :(";
//       return res.status(200).json({
//         success: false,
//         message: message
//       });
//     });
// });

// router.post("/deliver/:id", authCheck, (req, res) => {
//   if (req.user.roles.indexOf("Admin") > -1) {
//     const machineId = req.params.id;

//     Machine.findById(machineId)
//       .then(machine => {
//         if (!machine) {
//           const message = "Machine not found.";
//           return res.status(200).json({
//             success: false,
//             message: message
//           });
//         }

//         machine.status = "Delivered";
//         machine
//           .save()
//           .then(() => {
//             res.status(200).json({
//               success: true,
//               message: "Machine delivered successfully."
//             });
//           })
//           .catch(err => {
//             console.log(err);
//             const message = "Something went wrong :(";
//             return res.status(200).json({
//               success: false,
//               message: message
//             });
//           });
//       })
//       .catch(err => {
//         console.log(err);
//         const message = "Something went wrong :(";
//         return res.status(200).json({
//           success: false,
//           message: message
//         });
//       });
//   } else {
//     return res.status(200).json({
//       success: false,
//       message: "Invalid credentials!"
//     });
//   }
// });

module.exports = router;
