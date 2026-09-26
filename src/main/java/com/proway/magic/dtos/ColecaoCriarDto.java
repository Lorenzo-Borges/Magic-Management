package com.proway.magic.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record ColecaoCriarDto(
        @NotBlank @Size(min=2, max=60)
        String nome,

        @NotNull
        Integer ano,

        @Size(max=255)
        String descricao,

        @NotNull
        Integer qntCartas
) {}
