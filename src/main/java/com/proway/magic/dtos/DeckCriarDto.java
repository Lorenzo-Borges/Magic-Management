package com.proway.magic.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record DeckCriarDto(
        @NotBlank @Size(min=2, max=60)
        String nome,

        @NotBlank @Size(max=20)
        String modoJogo,

        @NotBlank @Size(max=30)
        String cores,

        Boolean valido,

        @NotNull
        Integer qntCartas
) {
}
