var express = require('express');
var router = express.Router();
var pool = require('../db');
const { body, validationResult } = require('express-validator');

// GET meets root
router.get('/', async (req, res, next) => {
    pool.getConnection()
      .then(conn => {
        var sql = `SELECT meet_id, meet_name, course, start_date FROM meets m WHERE meet_delete = 0 ORDER BY start_date DESC`;
        conn.query(sql)
          .then(rows => {
            res.render('meets', { title: 'Meet List', meet_list: rows });
          })
        conn.release();
      })
      .catch(err => {
        console.error("not connected: " + err);
      });
  });

router.get('/add', function(req, res, next) {
    res.render('addMeet', { title: 'Add New Meet' });
        // res.send("NOT IMPLEMENTED: form page to add new meet")
});

router.post('/add', async (req, res, next) => {
    var meetInfo = req.body;
    console.log(meetInfo);
    if(!meetInfo.meetName || !meetInfo.course || !meetInfo.startDate){
        res.send("error in data submitted. please complete all fields.")
    } else {
        // res.send("data looks good")
        pool.getConnection()
            .then(conn => {
                var sql =`INSERT INTO meets (meet_name, course, start_date) VALUES ('` + meetInfo.meetName + `','` + meetInfo.course + `','` + meetInfo.startDate + `')`
                // console.log(sql)
                conn.query(sql)
                    .then(rows => {
                        res.redirect('/meets');
                    })
                    .catch(err => {
                        console.error("query failed: " + err);
                    })
                conn.release();
            })
            .catch(err => {
                console.error("not connected: " + err);
            })

    }
});

router.post('/delconf/:id', async (req,res,next) => {
    var meetId = req.params.id
    console.log("put " + meetId)
    pool.getConnection()
        .then(conn => {
            var sql =`UPDATE meets SET meet_delete = 1 WHERE meet_id = ` + meetId;
            console.log(sql)
            conn.query(sql)
                .then(rows => {
                    res.redirect('/meets');
                })
                .catch(err => {
                    console.error("query failed: " + err);
                })
            conn.release();
        })
        .catch(err => {
            console.error("not connected: " + err);
        })
});

router.get('/delconf/:id', function(req,res,next){
    // res.send('not implemented :)')
    var meetID = req.params.id
    pool.getConnection()
      .then(conn => {
        var sql = `SELECT meet_id, meet_name, course, start_date, meet_delete FROM meets m WHERE meet_delete = 0 and meet_id = ` + req.params.id;
        // console.log(sql)
        conn.query(sql)
          .then(rows => {
            res.render('meetdelconf', { title: 'Confirm Delete', meetInfo: rows[0] });
          })
        conn.release();
      })
      .catch(err => {
        console.error("not connected: " + err);
      });
    // res.render('meetdelconf', {title: "Confirm delete"});
});

router.get('/:id', function(req, res, next){
    res.send("not implemented :)")
});

module.exports = router;
