const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const outSubtitle = "podtytuł"
const dataFromFunctionJs=require("./functions")

app.set('view engine','hbs')
app.use('/assets', express.static(path.join(__dirname, './assets')));
app.use('/js', express.static(path.join(__dirname, './js')));

app.get('/', function (req, resp) {
  resp.render('index', {
    pageTitle: "Zajecia AFM 19.03.2022",
    subTitle: outSubtitle,
    example: dataFromFunctionJs.sayHello2()
    })
})
app.get('/about', function (req, resp) {
    resp.render("about")
})

app.listen(port, (err) => {
  if (err) {return `Wystąpił błąd ${err.message}`;}
  return console.log(`Appka dziala na porcie ${port}`);
});
