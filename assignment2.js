var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "info123"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("connected!");

    con.query("CREATE DATABASE IF NOT EXISTS appon", function(err, result) {
        if (err) throw err;
        console.log("database created");

        con.query("USE appon", function(err, result) {
            if (err) throw err;

            var sql = "CREATE TABLE IF NOT EXISTS alia(id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(20),address VARCHAR(20));";

            con.query(sql, function(err, result) {
                if (err) throw err;
                console.log("table created");

                var sql = "INSERT INTO alia(id,name,address) VALUES (1,'sanjay','new delhi'),(2,'maya','mysore'),(3,'sanju','bangalore'),(4,'manju','mangalore');";

                con.query(sql, function(err, result) {
                    if (err) throw err;
                    console.log("record inserted");

                    var sql = "SELECT * FROM alia;";

                    con.query(sql, function(err, result) {
                        if (err) throw err;
                        console.log(result);

                        var sql = "SELECT * FROM alia WHERE id=1;";

                        con.query(sql, function(err, result) {
                            if (err) throw err;
                            console.log(result);

                            var sql = "DELETE FROM alia WHERE id=2;";

                            con.query(sql, function(err, result) {
                                if (err) throw err;
                                console.log("record deleted", result);

                                var sql = "ALTER TABLE alia ADD COLUMN phone_number INT;";

                                con.query(sql, function(err, result) {
                                    if (err) throw err;
                                    console.log("new column added");

                                    var sql = "ALTER TABLE alia DROP COLUMN phone_number;";

                                    con.query(sql, function(err, result) {
                                        if (err) throw err;
                                        console.log("column dropped");

                                        var sql = "UPDATE alia SET name='mamtha' WHERE id=3;";

                                        con.query(sql, function(err, result) {
                                            if (err) throw err;
                                            console.log("record updated");

                                            // Remove AUTO_INCREMENT first
                                            var sql = "ALTER TABLE alia MODIFY id INT;";

                                            con.query(sql, function(err, result) {
                                                if (err) throw err;

                                                // Drop Primary Key
                                                var sql = "ALTER TABLE alia DROP PRIMARY KEY;";

                                                con.query(sql, function(err, result) {
                                                    if (err) throw err;
                                                    console.log("primary key dropped");

                                                    // Drop Table
                                                    var sql = "DROP TABLE alia;";

                                                    con.query(sql, function(err, result) {
                                                        if (err) throw err;
                                                        console.log("table dropped");

                                                        con.end();
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});