const { Router } = require("express");
const routes = Router();
var cors = require('cors');
routes.use(cors({origin: '*'}));
const colaboradorRout = require("../routes/ColaboradorRout"); 
routes.use("/api", colaboradorRout);

/*
const andamentoRout = require("./AndamentoRout");
routes.use("/api", andamentoRout);

const atividadeRout = require("./AtividadeRout");
routes.use("/api", atividadeRout);

const requisicaoRout = require("./RequisicaoRout");
routes.use("/api", requisicaoRout);
*/


module.exports = routes;




/*
const { Router } = require("express");
const routes = Router();
var cors = require('cors');
routes.use(cors({origin: '*'}));
const solicitanteRout = require("./SolicitanteRout");
routes.use("/api", solicitanteRout);
module.exports = routes;

const { Router } = require("express");
const routes = Router();
var cors = require('cors');
routes.use(cors({origin: '*'}));
const tiporequisicaoRout = require("./TipoRequisicaoRout");
routes.use("/api", tiporequisicaoRout);
module.exports = routes;


*/