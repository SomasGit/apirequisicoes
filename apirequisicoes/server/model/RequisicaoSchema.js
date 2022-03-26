const mongoose = require("mongoose");
const RequisicaoSchema = new mongoose.Schema({
 titulo:{ type: String, required: true },
 descricao: { type: String, required: true },
 dataHoraCriada: { type: Date, required: true, unique: true },
 status: { type: String, required: true},
 prazoAtendimento: { type: Date, required: true, unique: true },
 
});
module.exports = mongoose.model("Requisicao", RequisicaoSchema);