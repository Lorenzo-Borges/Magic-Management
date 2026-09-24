package com.proway.magic.repositories;

import com.proway.magic.models.Colecao;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ColecaoRepository extends JpaRepository<Colecao, Integer> {
}