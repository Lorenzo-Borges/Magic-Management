package com.proway.magic.controllers;

import com.proway.magic.dtos.CartaAtualizarDto;
import com.proway.magic.dtos.CartaCriarDto;
import com.proway.magic.models.Carta;
import com.proway.magic.services.CartaService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/carta")
@CrossOrigin(origins = "http://localhost:4200")
public class CartaController {
    private final CartaService service;

    public CartaController(CartaService service) {
        this.service = service;
    }

    @GetMapping
    public List<Carta> listar(){
        return service.listar();
    }

    @PostMapping
    public Carta criar(@RequestBody @Valid CartaCriarDto dto){
        return service.criar(dto);
    }

    @PutMapping("/{id}")
    public Carta atualizar(@PathVariable int id,
                             @RequestBody @Valid CartaAtualizarDto dto){
        return service.atualizar(id, dto);
    }

    @DeleteMapping("/{id}")
    public Carta apagar(@PathVariable int id){
        return service.apagar(id);
    }

    @GetMapping("/{id}")
    public Carta obterPorId(@PathVariable int id){
        return service.obterPorId(id);
    }
}
