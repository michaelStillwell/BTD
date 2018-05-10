const
    express = require('express'),
    app = express(),
    port = process.env.PORT || 3223;

app.listen(port,() => console.log(`Listening on port ${port}`));