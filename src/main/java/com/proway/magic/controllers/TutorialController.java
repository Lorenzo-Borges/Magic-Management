package com.proway.magic.controllers;

import com.proway.magic.dtos.TutorialAtualizarDto;
import com.proway.magic.dtos.TutorialCriarDto;
import com.proway.magic.models.Tutorial;
import com.proway.magic.services.TutorialService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tutorial")
public class TutorialController {
        private final TutorialService service;

        public TutorialController(TutorialService service) {
            this.service = service;
        }

        @GetMapping
        public List<Tutorial> listar(){
            return service.listar();
        }

        @PostMapping
        public Tutorial criar(@RequestBody @Valid TutorialCriarDto dto){
            return service.criar(dto);
        }

        @PutMapping("/{id}")
        public Tutorial atualizar(@PathVariable int id,
                                   @RequestBody @Valid TutorialAtualizarDto dto){
            return service.atualizar(id, dto);
        }

        @DeleteMapping("/{id}")
        public Tutorial apagar(@PathVariable int id){
            return service.apagar(id);
        }

        @GetMapping("/{id}")
        public Tutorial obterPorId(@PathVariable int id){
            return service.obterPorId(id);
        }
    }
