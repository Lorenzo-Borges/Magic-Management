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

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCores() {
        return cores;
    }

    public void setCores(String cores) {
        this.cores = cores;
    }

    public Integer getQnt_cartas() {
        return qnt_cartas;
    }

    public void setQnt_cartas(Integer qnt_cartas) {
        this.qnt_cartas = qnt_cartas;
    }

    public String getModo_jogo() {
        return modo_jogo;
    }

    public void setModo_jogo(String modo_jogo) {
        this.modo_jogo = modo_jogo;
    }

    public Boolean getValido() {
        return valido;
    }

    public void setValido(Boolean valido) {
        this.valido = valido;
    }
}
