package projeto.model;

import java.math.BigDecimal;

public class Deposito {
    private Conta conta;
    private BigDecimal quantia;

    public Conta getConta() {
        return conta;
    }

    public void setConta(Conta conta) {
        this.conta = conta;
    }

    public BigDecimal getQuantia() {
        return quantia;
    }

    public void setQuantia(BigDecimal quantia) {
        this.quantia = quantia;
    }
}
