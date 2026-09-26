package com.proway.magic.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record CartaAtualizarDto(
        @NotBlank @Size(min=2, max=60)
        String nome,

        @NotBlank @Size(max=20)
        String tipo,

        @NotBlank @Size(max=20)
        String cor,

        @NotBlank @Size(max=50)
        String colecao,

        @NotBlank @Size(max=20)
        String raridade,

        @NotNull
        Integer ataque,

        @NotNull
        Integer resistencia,

        Boolean lendaria
) {
}
