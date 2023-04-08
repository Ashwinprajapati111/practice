const db = require("../model");
const Tutorial = db.tutorials;

exports.findAll = (req,res)=>{
    Tutorial.find(condition)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message: 
            err.message || "some error occured while retriving tutorial"
        })
    })
}
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Tutorial
    const tutorial = new Tutorial({
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
    });
}
