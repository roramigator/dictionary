const express = require("express");
const cors = require("cors");
const request = require("request");

const app = express();

app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/dictionary", (req, res) => {
  const txt = req.query.txt;
  const lan = req.query.lan;
  const url = `https://api.dictionaryapi.dev/api/v2/entries/${lan}/${txt}`;
  request({ url: url }, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      return res.status(400).json({ type: "error", message: "bad request" });
    }
    try {
      res.status(200).json(JSON.parse(body));
    } catch (e) {
      res.status(409).json({
        type: "error",
        message: "could not parse response",
        response: body,
      });
    }
  });
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Running... [http://localhost:${PORT}/]`));
