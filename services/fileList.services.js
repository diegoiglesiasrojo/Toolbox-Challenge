const constants = require("../constants");

const fileList = async () => {
  return await fetch("https://echo-serv.tbxnet.com/v1/secret/files", {
    method: "GET",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${constants.secretOrKey}`,
    },
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => err);
};

module.exports = fileList;
