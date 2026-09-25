package com.proway.magic.controllers;

import com.proway.magic.dtos.ColecaoAtualizarDto;
import com.proway.magic.dtos.ColecaoCriarDto;
import com.proway.magic.models.Colecao;
import com.proway.magic.services.ColecaoService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/colecao")
public class ColecaoController {
    private final ColecaoService service;

    public ColecaoController(ColecaoService service) {
        this.service = service;
    }

    @GetMapping
    public List<Colecao> listar(){
        return service.listar();
    }

    @PostMapping
    public Colecao criar(@RequestBody @Valid ColecaoCriarDto dto){
        return service.criar(dto);
    }

    @PutMapping("/{id}")
    public Colecao atualizar(@PathVariable int id,
                          @RequestBody @Valid ColecaoAtualizarDto dto){
        return service.atualizar(id, dto);
    }

    @DeleteMapping("/{id}")
    public Colecao apagar(@PathVariable int id){
        return service.apagar(id);
    }

    @GetMapping("/{id}")
    public Colecao obterPorId(@PathVariable int id){
        return service.obterPorId(id);
    }
}
