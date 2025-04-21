const app= require("./app");
const db = require('./config/db');

const port =3000;

app.listen(port, '0.0.0.0', () => {
    console.log(`Server Listening on Port http://0.0.0.0:${port}`);
});