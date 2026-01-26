## Maria DB

mysqldump -u myuser -p mypassword > mydb.sql

CREATE DATABASE mydb;

mysql -u myuser -p mydb < mydb.sql

bin\mysqldump --skip-lock-tables --column-statistics=0 --routines --add-drop-table --disable-keys --extended-insert -u myuser --host=localhost --port=3307 mydb

docker compose down -v
docker compose build --no-cache
docker compose up