const http = require("http");
const csvtojson = require("csvtojson");

const oneFile = async (fileName) => {
  return new Promise((resolve, reject) => {
    // Configure HTTP request
    const options = {
      hostname: "echo-serv.tbxnet.com",
      path: `/v1/secret/file/${fileName}`,
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: "Bearer aSuperSecretKey",
      },
    };

    // Perform the HTTP request
    const req = http.request(options, async (res) => {
      let data = "";

      // Concatenate the received data fragments
      res.on("data", (chunk) => {
        data += chunk;
      });

      // after completing data reception
      res.on("end", async () => {
        try {
          // Convert CSV to JSON
          const jsonArray = await csvtojson().fromString(data);
          resolve(jsonArray);
        } catch (error) {
          reject(error);
        }
      });
    });

    // Handle request errors
    req.on("error", (error) => {
      reject(error);
    });

    // Finish the request
    req.end();
  });
};

module.exports = oneFile;
