package com.alxmancia.apirestspringbootbackend.models.dao;

import com.alxmancia.apirestspringbootbackend.models.entity.Client;
import org.springframework.data.repository.CrudRepository;

public interface IClientDao extends CrudRepository<Client,Long> {
}
