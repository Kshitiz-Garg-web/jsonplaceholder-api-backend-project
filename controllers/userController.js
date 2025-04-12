const axios = require("axios");
const { API_URL, ERROR_MSGS } = require("../utils/constants");

const get_All_Users = async (req, res, next) => {
  try {
    const response = await axios.get(API_URL);
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
        error: ERROR_MSGS.user_not_found
      });
    }
    
    res.json(user.data);
  } catch (error) {
    if (error.response?.status === 404) {
      return res.status(404).json({ 
        error: ERROR_MSGS.user_not_found 
      });
    }
    next(error);
  }
};


module.exports = { get_All_Users, get_All_Users_By_Id };
