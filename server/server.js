require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;
const axios = require("axios");

app.use(express.json());
app.use(cors());

app.get("/banner_comics", async (req, res) => {
  try {
    const { data } = await axios.get(
      `http://comicvine.gamespot.com/api/issues/?api_key=${process.env.COMICVINE_API_KEY}&format=json&sort=store_date:desc&limit=7`
    );

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
