const mongoose = require('mongoose');
const connector = "mongodb://localhost:27017/TodoApp";

mongoose.connect(connector, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4
}).catch(err => console.log(`error: ${ err }`)).then(() => console.log(`connected to mongodb url: ${ connector }`));

let dataModel = mongoose.Schema({
    title: String,
    time: String,
    detail: String,
    timeAction: String
});

let dataList = mongoose.model('dataList', dataModel);

module.exports = dataList;
module.exports.saveList = function (model, data) {
    model.save(data);
}