import "core-js";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import userRouter from "./routers/userRouter";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import routes from "./routes";
var app = express();

// 보안
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
// html
app.set("view engine", "pug");
// directory에서 file을 보내주는 middleware
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
// 서버에서 읽을 수 있게 parse
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// 로그
app.use(morgan("dev"));
app.use(localsMiddleware);

app.use(function (req, res, next) {
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' https://archive.org"
  );
  return next();
});

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
