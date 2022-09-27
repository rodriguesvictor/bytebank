import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo",12345678999);
const cliente2 = new Cliente( "Alice",99220033191);

const contaCorrrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrrenteRicardo.depositar(500);
const conta2 = new ContaCorrente(103,cliente2);

contaCorrrenteRicardo.transferir(200, conta2);

console.log(ContaCorrente.numeroDeContas);