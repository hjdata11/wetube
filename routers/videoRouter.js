import express from "express";
import { deleteVideo, geteditVideo, getUpload, posteditVideo, postUpload, videoDetail} from "../controller/videoController";
import { uploadVideo } from "../middlewares";
import routes from "../routes";

const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.editVideo(), geteditVideo);
videoRouter.post(routes.editVideo(), posteditVideo);

videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;