import * as express from 'express';
import {Application} from 'express';
import {apiGetUserThreads} from "./api/apiGetUserThreads";
declare var require: any;
const bodyParser = require('body-parser');

const app: Application = express();
app.use(bodyParser.json());
apiGetUserThreads(app);
app.listen(8090, () => {
    console.log('Server is now running on port 8090 ...');
});
