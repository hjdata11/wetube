"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

require("./db");

var _app = _interopRequireDefault(require("./app"));

require("./models/Video");

require("./models/Comment");

require("./models/User");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var PORT = process.env.PORT || 29000;

var handelListening = function handelListening() {
  return console.log("Listening on: http://localhost:".concat(PORT));
};

_app["default"].listen(PORT, handelListening);