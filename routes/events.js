var express = require('express');
var router = express.Router();
var pool = require('../db');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//     res.send('events home page');
//     //   res.render('index', { title: 'Swim Times' });
// });

// GET events root
router.get('/', async (req, res, next) => {
    pool.getConnection()
      .then(conn => {
        var sql = `SELECT event_id, course, distance, stroke as stroke_name, CONCAT(distance, " ", stroke) stroke FROM events ev ORDER BY course, ev.stroke, distance`;
        conn.query(sql)
          .then(rows => {
            res.render('events', { title: 'Events List', event_list: rows });
          })
        conn.release();
      })
      .catch(err => {
        console.error("not connected: " + err);
      });
  });

module.exports = router;
