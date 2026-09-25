package com.proway.magic.services;

import com.proway.magic.dtos.DeckAtualizarDto;
import com.proway.magic.dtos.DeckCriarDto;
import com.proway.magic.models.Deck;
import com.proway.magic.repositories.DeckRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeckService {

    private final DeckRepository repository;

    public DeckService(DeckRepository repository) {
        this.repository = repository;
    }

    public List<Deck> listar(){
        return this.repository.findAll();
    }

    public Deck criar(DeckCriarDto dado){
        var deck = Deck.builder()
                .nome(dado.nome())
                .cores(dado.cores())
                .qnt_cartas(dado.qntCartas())
                .modo_jogo(dado.modoJogo())
                .valido(true)
                .build();

        return this.repository.save(deck);
    }

    public Deck atualizar(int id, DeckAtualizarDto dado){
        var deck = repository.findById(id)
                .orElseThrow();

        deck.setNome(dado.nome());
        deck.setCores(dado.cores());
        deck.setQnt_cartas(dado.qntCartas());
        deck.setModo_jogo(dado.modoJogo());
        deck.setValido(true);

        return repository.save(deck);
    }

    public Deck apagar(int id){
        var deck = repository.findById(id).orElseThrow();

        return repository.save(deck);
    }

    public Deck obterPorId(int id){
        var deck = repository.findById(id).orElseThrow();
        return deck;
    }
}