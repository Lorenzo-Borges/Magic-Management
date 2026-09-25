package com.proway.magic.controllers;

import com.proway.magic.dtos.DeckAtualizarDto;
import com.proway.magic.dtos.DeckCriarDto;
import com.proway.magic.models.Deck;
import com.proway.magic.services.DeckService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/deck")
public class DeckController {
    private final DeckService service;

    public DeckController(DeckService service) {
        this.service = service;
    }

    @GetMapping
    public List<Deck> listar(){
        return service.listar();
    }

    @PostMapping
    public Deck criar(@RequestBody @Valid DeckCriarDto dto){
        return service.criar(dto);
    }

    @PutMapping("/{id}")
    public Deck atualizar(@PathVariable int id,
                              @RequestBody @Valid DeckAtualizarDto dto){
        return service.atualizar(id, dto);
    }

    @DeleteMapping("/{id}")
    public Deck apagar(@PathVariable int id){
        return service.apagar(id);
    }

    @GetMapping("/{id}")
    public Deck obterPorId(@PathVariable int id){
        return service.obterPorId(id);
    }
}