const express= require("express");
const router= express.Router();

Router.route("/").get ((req,res) => {
    res.send (  "get all contacts" );
});

Router.route("/").post ((req,res) => {
    res.send (  `create contact` );
});

Router.route("/:id").get ((req,res) => {
    res.send ( `get contact for ${req.params.id}` );
});
Router.route("/:id").put ((req,res) => {
    res.send ( `update contact for ${req.params.id}` );
});
Router.route("/:id").delete((req,res) => {
    res.send (  `delete contact for ${req.params.id}` );
});
module.export= router;