const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  burger.selectAll((data) => {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  console.log(req.body);
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    (result) => {
      // Send back the ID of the new quote
      console.log("this is the body", req.body);
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burgers/:id", (req, res) => {
  burger.updateOne(
    { devoured: 1 },
    {
      id: req.params.id,
    },
    (result) => {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
