package projeto.service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import projeto.model.Conta;
import projeto.repositories.ContaRepository;

@Service
public class ContaService {
    
    @Autowired
    private ContaRepository contaRepository;

    public List<Conta> getContas() {
        return this.contaRepository.findAll();
    }

    public Conta getContaPorId(Long idConta) {
        return this.contaRepository.findById(idConta).orElse(null);
    }

    public Conta findByCpf(String cpf){
        return this.contaRepository.findByCpf(cpf);
    }

    @Transactional
    public Conta inserir(Conta conta) {
        List<String> ListaCpf = this.contaRepository.getAllCpf();

        for (String cpf : ListaCpf ) {
            if(conta.getCpf().equals(cpf)) {
                throw new RuntimeException("CPF Existente");
            }
        }
        Conta contaInserida = this.contaRepository.save(conta);
        return contaInserida;
    }

    @Transactional
    public Conta atualizar(Conta conta) {
        List<String> ListaCpf = this.contaRepository.getAllCpf();
        boolean contemCPF = ListaCpf.contains(conta.getCpf());

        // Excecoes
        if(contemCPF){
            final Long contaId = this.contaRepository.findIdByCpf(conta.getCpf());
            if(!conta.getId().equals(contaId)) {
                throw new RuntimeException("CPF Existente");
            }
        }

        // Retorna a conta atualizada
        Conta contaInserida = this.contaRepository.save(conta);
        return contaInserida;
    }

    @Transactional
    public Conta depositar(Conta conta, BigDecimal quantia){

        // Excecoes
        if(quantia.compareTo(BigDecimal.ZERO) <= 0) {
            throw new RuntimeException("Deposite uma quantia maior que zero");
        }
        // Operacao
        conta.setSaldo(conta.getSaldo().add(quantia));

        // Retorna a conta atualizada
        Conta contaInserida = this.contaRepository.save(conta);
        return contaInserida;
    }

    @Transactional
    public Conta sacar(Conta conta, BigDecimal quantia) {

        // Excecoes
        if(quantia.compareTo(BigDecimal.ZERO) <= 0) {
            throw new RuntimeException("Saque uma quantia maior que zero");
        } else if(conta.getSaldo().compareTo(quantia)< 0) {
            throw new RuntimeException("Você não possui saldo suficiente.");
        }

        // Operacao
        conta.setSaldo(conta.getSaldo().subtract(quantia));

        // Retorna a conta atualizada
        Conta contaInserida = this.contaRepository.save(conta);
        return contaInserida;
    }

    @Transactional
    public List<Conta> transferir(Conta contaOrigem, Conta contaDestino, BigDecimal quantia) {
        // Excecoes
        if (contaOrigem.getSaldo().compareTo(quantia) < 0) {
            throw new RuntimeException("Você não possui saldo suficiente.");
        } else {
            // Operacao
            contaOrigem.setSaldo(contaOrigem.getSaldo().subtract(quantia));
            contaDestino.setSaldo(contaDestino.getSaldo().add(quantia));

            Conta contaOrigemInserida = this.contaRepository.save(contaOrigem);
            Conta contaDestinoInserida = this.contaRepository.save(contaDestino);

            // Retorne as contas atualizadas
            List<Conta> contasAtualizadas = new ArrayList<>();
            contasAtualizadas.add(contaOrigemInserida);
            contasAtualizadas.add(contaDestinoInserida);
            return contasAtualizadas;
        }
    }


    public void apagar(Long id) {
        this.contaRepository.deleteById(id);
    }
}
