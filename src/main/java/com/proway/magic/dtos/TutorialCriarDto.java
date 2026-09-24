package com.proway.magic.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record TutorialCriarDto(
        @NotBlank @Size(max=20)
        String modoJogo,

        @Size(max=255)
        String descricao
) {
}
