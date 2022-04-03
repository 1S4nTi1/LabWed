var express = require("express"),
http = require("http"),
app = express(),
toDos = [
// настраиваем список задач копированием
// содержимого из файла todos.OLD.json
];
app.use(express.static(__dirname + "/client"));
http.createServer(app).listen(3000);

// этот маршрут замещает наш файл
// todos.json в примере из части 5
app.get("/todos.json", function (req, res) {
res.json(toDos);
});
app.post("/todos", function (req, res) {
    console.log("Данные были отправлены на сервер!");
    // простой объект отправлен обратно
    res.json({"message":"Вы размещаетесь на сервере!"});
});
    