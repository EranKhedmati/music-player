const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static(path.join(__dirname, "/public")));

app.post('/api/send-path', (req, res) => {
  const filePath = req.body;
  try {
    const jsonString = JSON.stringify(filePath, null, 2);
    fs.writeFileSync(path.join(__dirname, 'public', 'data.json'), jsonString);
    res.json(filePath)
  } catch (err) {
    console.log(err);
  }
  res.json(req.body)
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
