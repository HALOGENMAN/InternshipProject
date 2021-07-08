##Steps before running project locally

1. Go to [Mongodb website](https://cloud.mongodb.com) then login and connect with your device;


```
MONGOOSE_URI = "mongodb+srv://<username>:<password>@cluster0.fidtq.mongodb.net/InternProject?retryWrites=true&w=majority"
```
1. Go to "config/config.env" and set your Mongodb URI ";


```
node seeder.js -i
```
3. Use above script to insert [API](https://api.wazirx.com/api/v2/tickers)  data in your database;


```
npm start
```
4. To start project locally;

