package com.proway.magic.services;

import com.proway.magic.dtos.CartaAtualizarDto;
import com.proway.magic.dtos.CartaCriarDto;
import com.proway.magic.models.Carta;
import com.proway.magic.repositories.CartaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartaService {
    private final CartaRepository repository;

    public CartaService(CartaRepository repository) {
        this.repository = repository;
    }

    public List<Carta> listar(){
        return this.repository.findAll();
    }

    public Carta criar(CartaCriarDto dado){
        var carta = Carta.builder()
                .nome(dado.nome())
                .cor(dado.cor())
                .tipo(dado.tipo())
                .colecao(dado.colecao())
                .ataque(dado.ataque())
                .resistencia(dado.resistencia())
                .raridade(dado.raridade())
                .lendaria(false)
                .build();

        return this.repository.save(carta);
    }

    public Carta atualizar(int id, CartaAtualizarDto dado){
        var carta= repository.findById(id)
                .orElseThrow();

        carta.setNome(dado.nome());
        carta.setCor(dado.cor());
        carta.setTipo(dado.tipo());
        carta.setColecao(dado.colecao());
        carta.setAtaque(dado.ataque());
        carta.setResistencia(dado.resistencia());
        carta.setRaridade(dado.raridade());
        carta.setLendaria(false);

        return repository.save(carta);
    }

    public Carta apagar(int id){
        var carta = repository.findById(id).orElseThrow();

        repository.delete(carta);
        return carta;
    }

    public Carta obterPorId(int id){
        var carta = repository.findById(id).orElseThrow();
        return carta;
    }
}
