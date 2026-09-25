package com.proway.magic.services;

import com.proway.magic.dtos.ColecaoAtualizarDto;
import com.proway.magic.dtos.ColecaoCriarDto;
import com.proway.magic.models.Colecao;
import com.proway.magic.repositories.ColecaoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ColecaoService {
    private final ColecaoRepository repository;

    public ColecaoService(ColecaoRepository repository) {
        this.repository = repository;
    }

    public List<Colecao> listar(){
        return this.repository.findAll();
    }

    public Colecao criar(ColecaoCriarDto dado){
        var colecao = Colecao.builder()
                .nome(dado.nome())
                .ano(dado.ano())
                .qnt_cartas(dado.qntCartas())
                .descricao(dado.descricao())
                .build();

        return this.repository.save(colecao);
    }

    public Colecao atualizar(int id, ColecaoAtualizarDto dado){
        var colecao = repository.findById(id)
                .orElseThrow();

        colecao.setNome(dado.nome());
        colecao.setAno(dado.ano());
        colecao.setQnt_cartas(dado.qntCartas());
        colecao.setDescricao(dado.descricao());

        return repository.save(colecao);
    }

    public Colecao apagar(int id){
        var colecao = repository.findById(id).orElseThrow();

        return repository.save(colecao);
    }

    public Colecao obterPorId(int id){
        var colecao = repository.findById(id).orElseThrow();
        return colecao;
    }
}
