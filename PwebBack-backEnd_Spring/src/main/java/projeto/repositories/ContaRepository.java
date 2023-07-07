package projeto.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import projeto.model.Conta;

import java.util.List;

public interface ContaRepository extends JpaRepository<Conta, Long> {

    @Query("SELECT cpf FROM Conta")
    public List<String> getAllCpf();

    @Query("SELECT c FROM Conta c WHERE c.cpf = :cpf")
    public Conta findByCpf(@Param("cpf") String cpf);

    @Query("SELECT c.id FROM Conta c WHERE c.cpf = :cpf")
    public Long findIdByCpf(@Param("cpf") String cpf);
}
