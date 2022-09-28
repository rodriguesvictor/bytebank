import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo",12345678999);

const contaCorrrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrrenteRicardo.depositar(500);
contaCorrrenteRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca.sacar(10);

console.log(contaPoupanca);
console.log(contaCorrrenteRicardo);