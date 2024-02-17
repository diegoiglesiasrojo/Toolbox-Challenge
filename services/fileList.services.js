const fileList = async () => {
  return await fetch("https://echo-serv.tbxnet.com/v1/secret/files", {
    method: "GET",
    mode: "cors",
    headers: {
      Authorization: "Bearer aSuperSecretKey",
    },
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => err);
};

module.exports = fileList;
