router.get('/', function(req, res, next) {
    connection.query('SELECT * from users', function (error, results, fields) {
       if (error) throw error;
       res.send(JSON.stringify(results));
   });
});