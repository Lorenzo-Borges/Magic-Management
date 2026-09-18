package com.proway.magic.models;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "decks")
public class Deck {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(length = 50, nullable = false)
    private String nome;

    @Column(length = 10, nullable = true)
    private String cores;

    @Column(nullable = false)
    private Integer qnt_cartas;

    @Column(length = 20, nullable = false)
    private String modo_jogo;

    @Column(nullable = false)
    private Boolean valido;
}
