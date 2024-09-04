const moment = require("moment");

exports.logger = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Serverles CI/CD Demo",
      version: "v2.0",
      timestamp: moment().unix(),
    }),
  };
};
