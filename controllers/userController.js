const axios = require("axios");
const { API_URL, ERROR_MSGS } = require("../utils/constants");

let max_id = 0;

const init_max_Id = async () => {
  const response = await axios.get(API_URL);
  max_id = response.data.length;
};

const get_All_Users = async (req, res, next) => {
  try {
    const response = await axios.get(API_URL);
    max_id = response.data.length;

    res.json({
      count: response.data.length,
      users: response.data,
    });
  } catch (error) {
    next(new Error(ERROR_MSGS.fetch_users));
  }
};

const get_All_Users_By_Id = async (req, res, next) => {
  try {
    const user = await axios.get(`${API_URL}/${req.params.id}`);

    if (!user.data) {
      return res.status(404).json({
        error: `User not found. Please provide a valid user ID between 1 and ${max_id}`,
      });
    }

    res.json(user.data);
  } catch (error) {
    if (error.response?.status === 404) {
      return res.status(404).json({
        error: `User not found. Please provide a valid user ID between 1 and ${max_id}`,
      });
    }
    next(error);
  }
};

module.exports = { get_All_Users, get_All_Users_By_Id };
