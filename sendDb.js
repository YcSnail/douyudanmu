const mysql = require('mysql');

const connection=mysql.createConnection({
    //Options
    host:'localhost',
    user:'root',
    password:'root',
    database:'douyu'
});







class sendDb{

    startDb(){
        connection.connect(function (err) {
            // callback(err,result);
            if(err){
                console.log(err);
                console.log("try to connect");
                setTimeout(handleDisconnect,1000);  //经过1秒后尝试重新连接
                return;
            }
        });
    }

    gift(data){


    }


    danmu(data){


    }

    online(data){


    }

    checkUserInset(rid){

        var  sql = 'SELECT rid FROM douyu_user ';

        connection.query(sql,function (err, result) {
            if(err){
                console.log('[SELECT ERROR] - ',err.message);
                return;
            }

            console.log('--------------------------SELECT----------------------------');
            console.log(result);
            console.log('------------------------------------------------------------\n\n');
        });
    }

    closeDb(){
        connection.end();
    }

}

module.exports = sendDb;
