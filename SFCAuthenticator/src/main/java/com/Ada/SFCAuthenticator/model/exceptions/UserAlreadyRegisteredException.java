package com.Ada.SFCAuthenticator.model.exceptions;

import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus
public class UserAlreadyRegisteredException extends RuntimeException {
  public UserAlreadyRegisteredException(String description) {
    super("Usuário com email %s já está registrado.".formatted(description));
  }
}
