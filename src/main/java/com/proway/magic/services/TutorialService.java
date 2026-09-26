package com.proway.magic.services;

import com.proway.magic.dtos.TutorialAtualizarDto;
import com.proway.magic.dtos.TutorialCriarDto;
import com.proway.magic.models.Tutorial;
import com.proway.magic.repositories.TutorialRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TutorialService {
    private final TutorialRepository repository;

    public TutorialService(TutorialRepository repository) {
        this.repository = repository;
    }

    public List<Tutorial> listar(){
        return this.repository.findAll();
    }

    public Tutorial criar(TutorialCriarDto dado){
        var tutorial = Tutorial.builder()
                .modo_jogo(dado.modoJogo())
                .descricao(dado.descricao())
                .build();

        return this.repository.save(tutorial);
    }

    public Tutorial atualizar(int id, TutorialAtualizarDto dado){
        var tutorial = repository.findById(id)
                .orElseThrow();

        tutorial.setModo_jogo(dado.modoJogo());
        tutorial.setDescricao(dado.descricao());

        return repository.save(tutorial);
    }

    public Tutorial apagar(int id){
        var tutorial = repository.findById(id).orElseThrow();

        repository.delete(tutorial);
        return tutorial;
    }

    public Tutorial obterPorId(int id){
        var tutorial = repository.findById(id).orElseThrow();
        return tutorial;
    }
}
