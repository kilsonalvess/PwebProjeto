package projeto.service;

import projeto.model.Usuario;
import projeto.repositories.UsuarioRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<Usuario> getUsuarios() {
        return this.usuarioRepository.findAll();
    }

    public Usuario getUsuarioPorId(Long idUsuario) {
        return this.usuarioRepository.findById(idUsuario).orElse(null);
    }

    @Transactional
    public Usuario inserir(Usuario usuario) {
        List<String> ListaCpf = this.usuarioRepository.getAllCpf();

        for (String cpf : ListaCpf ) {
            if(usuario.getCpf().equals(cpf)) {
                throw new RuntimeException("CPF Existente");
            }
        }
        Usuario usuarioInserido = this.usuarioRepository.save(usuario);
        return usuarioInserido;
    }

    @Transactional
    public Usuario atualizar(Usuario usuario) {
        List<String> ListaCpf = this.usuarioRepository.getAllCpf();
        boolean contemCPF = ListaCpf.contains(usuario.getCpf());

        if(contemCPF){
            final Long userId = this.usuarioRepository.findIdByCpf(usuario.getCpf());
            if(!usuario.getId().equals(userId)) {
                throw new RuntimeException("CPF Existente user");
            }
        }
        Usuario usuarioInserido = this.usuarioRepository.save(usuario);
        return usuarioInserido;
    }

    public void apagar(Long id) {
        this.usuarioRepository.deleteById(id);
    }
}
