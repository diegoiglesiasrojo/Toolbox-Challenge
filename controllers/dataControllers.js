const dataControllers = {
  readData: (req, res) => {
    const response = "data";
    res.json({ success: true, response });
  },
};

module.exports = dataControllers;
