const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/list',(req, res) => {
    res.sendFile(path.join(__dirname,'../public','list.html'));
});
router.get('/write',(req, res) => {
    res.sendFile(path.join(__dirname,'../public','write.html'));
});
router.get('/view',(req, res) => {
    res.sendFile(path.join(__dirname,'../public','view.html'));
});


module.exports = router;