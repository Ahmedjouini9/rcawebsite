const Client = require("../../models/client");
const router = require("express").Router();
const bcrypt = require("bcrypt");

//update client
router.put("/:id", async (req, res) => {
  if (req.body.clientId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const client = await Client.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Account has been updated");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can update only your account!");
  }
});

//delete client
router.delete("/:id", async (req, res) => {
  if (req.body.clientId === req.params.id || req.body.isAdmin) {
    try {
      await Client.findByIdAndDelete(req.params.id);
      res.status(200).json("Account has been deleted");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can delete only your account!");
  }
});

//admin
//get a client
router.get("/user", async (req, res) => {
  const clientId = req.query.clientId;
  const username = req.query.username;
  try {
    const client = clientId
      ? await Client.findById(clientId)
      : await Client.findOne({ username: username });
    const { password, updatedAt, ...other } = client._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});
// get all client
router.get('/admin/allclient', async (req,res) => {
    try{
       await Client.find().then(client => {
            res.json(client);
            console.log(client);
        })
    }catch{
        res.status(500).json(err);
    }
}) 
//update client
router.put("/:id", async (req, res) => {
    if (req.body.clientId === req.params.id) {
      if (req.body.password) {
        try {
          const salt = await bcrypt.genSalt(10);
          req.body.password = await bcrypt.hash(req.body.password, salt);
        } catch (err) {
          return res.status(500).json(err);
        }
      }
      try {
        const client = await Client.findByIdAndUpdate(req.params.id, {
          $set: req.body,
        });
        res.status(200).json("Client has been updated");
      } catch (err) {
        return res.status(500).json(err);
      }
    }
  });
  
  //delete client
  router.delete("/:id", async (req, res) => {
    if (req.body.clientId === req.params.id) {
      try {
        await Client.findByIdAndDelete(req.params.id);
        res.status(200).json("Client has been deleted");
      } catch (err) {
        return res.status(500).json(err);
      }
    }
  }); 

module.exports = router;
