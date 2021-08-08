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

app.get("/new_comics", async (req, res) => {
  try {
    const { data } = await axios.get(
      `http://comicvine.gamespot.com/api/issues/?api_key=${process.env.COMICVINE_API_KEY}&format=json&sort=cover_date:desc&filter=cover_date: 2001-08-07 13:50:51|2021-07-07 13:50:51&limit=100`
    );

    res.status(200).json(data.results);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/single_comic/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { data } = await axios.get(
      `https://comicvine.gamespot.com/api/issue/4000-${id}/?api_key=${process.env.COMICVINE_API_KEY}&format=json`
    );

    res.status(200).json(data.results);
  } catch (error) {
    res.status(500).json(error);
  }
});
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
