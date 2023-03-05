import express from 'express';
import cors from 'cors';
import mongoose from'mongoose';
import dotenv from "dotenv";
import registerRoute from "./routes/signup.js";
import urlRoute from "./routes/url.js";

dotenv.config()
const app = express();

// cors for cross-origin requests to the frontend application
app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());

app.use('/signup', registerRoute);
app.use('/', urlRoute);


const PORT = process.env.PORT || 3001;
// Database connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Db Connected`);
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });