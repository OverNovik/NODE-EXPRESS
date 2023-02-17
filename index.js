const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})