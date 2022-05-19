import "reflect-metadata";
import express from "express";
import helmet from "helmet";
import logger from "morgan";
import { playRt } from "./routes/playRt";

(async () => {
    const app: express.Application = express();
    app.use(helmet());
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());
    app.use(logger("dev"));
    app.use("/api", playRt);
    const port = process.env.PORT || 9000;
    app.listen(port, () => {
        console.log(`Server: http://localhost:${port}`);
        console.log("Press Ctrl + C to exit.");
    })
})();



