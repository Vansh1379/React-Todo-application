import express from 'express';
import cors from "cors";
import router from './Routes/todoRoutes.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use('/api', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});