const mongoose = require("mongoose");
const AndamentoSchema = new mongoose.Schema({
 dataHora: { type: Date, required: true, unique: true },
 titulo:{ type: String, required: true },
 descricao: { type: String, required: true },
});
module.exports = mongoose.model("Andamento", AndamentoSchema);