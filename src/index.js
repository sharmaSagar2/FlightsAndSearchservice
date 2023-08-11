//repository give method using these method we can actully use those models
//models->how tables or database will look like

const express = require('express');
const { PORT } = require('./config/serverConfig');
const setupAndStartServer = async () => {
    const app = express();
    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
    })

}
setupAndStartServer();