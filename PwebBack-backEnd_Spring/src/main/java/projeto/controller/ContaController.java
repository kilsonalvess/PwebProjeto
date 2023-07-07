package projeto.controller;

import java.util.List;

import projeto.model.Deposito;
import projeto.model.Saque;
import projeto.service.ContaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import projeto.model.Conta;
import projeto.model.Transferencia;

@RestController
@RequestMapping("/")
public class ContaController {
    
    @Autowired
    private ContaService contaService;

    @GetMapping("/contas")
    public List<Conta> getContas() {
        return this.contaService.getContas();
    }

    @GetMapping("/contas/{id}")
    public Conta getContaPorId(@PathVariable("id") Long idConta) {
        return this.contaService.getContaPorId(idConta);
    }

    @GetMapping("/contas/cpf/{cpf}")
    public Conta findByCpf(@PathVariable("cpf") String cpfConta) {
        return this.contaService.findByCpf(cpfConta);
    }

    @PostMapping("/contas")
    public Conta inserirConta(@RequestBody Conta conta) {
        return this.contaService.inserir(conta);
    }

    @PutMapping("/contas/{id}")
    public Conta atualizarConta(@RequestBody Conta conta) {
        return this.contaService.atualizar(conta);
    }

    @PutMapping("/contas/depositar")
    public Conta depositar(@RequestBody Deposito deposito) {
        return this.contaService.depositar(deposito.getConta(), deposito.getQuantia());
    }

    @PutMapping("/contas/sacar")
    public Conta sacar(@RequestBody Saque saque) {
        return this.contaService.sacar(saque.getConta(), saque.getQuantia());
    }

    @PutMapping("/contas/transferir")
    public List<Conta> transferir(@RequestBody Transferencia transferencia) {
        return this.contaService.transferir(transferencia.getContaOrigem(), transferencia.getContaDestino(), transferencia.getQuantia());
    }

    @DeleteMapping("/contas/{id}")
    public void apagarConta(@PathVariable("id") Long id) {
        this.contaService.apagar(id);
    }
}
