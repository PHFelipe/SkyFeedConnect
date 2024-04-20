package com.Ada.SFCAuthenticator.model.exceptions;

public class UserAlreadyRegisteredException extends RuntimeException {
  public UserAlreadyRegisteredException(String description) {
    super("Usuário com email %s já está registrado.".formatted(description) );
  }
}
