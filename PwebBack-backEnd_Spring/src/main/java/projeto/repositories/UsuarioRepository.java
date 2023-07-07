package projeto.repositories;

import org.springframework.data.repository.query.Param;
import projeto.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    @Query("SELECT cpf FROM Usuario")
    public List<String> getAllCpf();

    @Query("SELECT u.id FROM Usuario u WHERE u.cpf = :cpf")
    public Long findIdByCpf(@Param("cpf") String cpf);
}
