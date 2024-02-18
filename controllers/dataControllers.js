const fileList = require("../services/fileList.services");
const oneFile = require("../services/oneFile.services");

const dataControllers = {
  readData: async (req, res) => {
    // Getting list of files
    const responseFileList = await fileList();

    // First we evaluate that the first endpoint works well
    if (Object.keys(responseFileList).includes("files")) {
      // Use second endpoint to obtain all the data
      const initialArrayOfData = await Promise.all(
        responseFileList.files.map(async (fileName) => {
          const responseOneFile = await oneFile(fileName);
          return responseOneFile;
        })
      );

      // Format data
      const arrayOfData = initialArrayOfData.map((arr) => {
        // If some object don't have all keys, delete this object
        const arrWithoutBadObjects = arr.filter((objData) => {
          if (objData.file && objData.text && objData.number && objData.hex) {
            if (
              objData.file != "" &&
              objData.text != "" &&
              objData.number != "" &&
              objData.hex != ""
            ) {
              return true;
            } else {
              return false;
            }
          } else {
            false;
          }
        });

        // Create new object structure
        const formatedObj = {
          file: arr[0]?.file,
          lines: arrWithoutBadObjects.map((obj) => {
            const objWithoutFileProperthy = {
              text: obj.text,
              number: obj.number,
              hex: obj.hex,
            };
            return objWithoutFileProperthy;
          }),
        };

        // Check that the object is correct
        if (formatedObj.lines.length > 0 && arr.length > 0 && arr !== null) {
          return formatedObj;
        }
      });

      // Delete null data
      const arrayOfDataWithoutNull = arrayOfData.filter((objData) => {
        return objData !== null && objData !== undefined;
      });

      // Send formated data
      res.json({
        success: true,
        response: arrayOfDataWithoutNull,
        error: false,
      });
    } else {
      // General error
      res.json({ success: false, response: null, error: true });
    }
  },
};

module.exports = dataControllers;
