import express from "express";
import "dotenv/config"
import cors from "cors"

const app = express();
const PORT = process.env.PORT || 3000;

// * Middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.get('/', (req, res) => {
    return res.json({message: "It's working fine..."});
});

// * Routes
import Routes from "./routes/index.js";
app.use(Routes);

app.listen(PORT, () => console.log(`Authorization Service is Started on PORT ${PORT}`));