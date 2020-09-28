"use strict";

var _typeorm = require("typeorm");

// encontra o arquivo ormconfig.json e cria a conexão. (super mágico),
// mas poderia configurar passando parametro nessa função.
// melhor prática utilizar o arquivo externo para isso
(0, _typeorm.createConnections)();