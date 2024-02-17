const fileList = require("../services/fileList.services");
const oneFile = require("../services/oneFile.services");

const dataControllers = {
  readData: async (req, res) => {
    // const responseFileList = await fileList();
    //const responseOneFile = await oneFile("test3.csv");

    const response = "data";
    res.json({ success: true, response: response });
  },
};

module.exports = dataControllers;
