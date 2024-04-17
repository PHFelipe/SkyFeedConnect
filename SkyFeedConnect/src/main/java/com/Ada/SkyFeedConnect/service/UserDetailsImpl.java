package com.Ada.SkyFeedConnect.service;

import com.Ada.SkyFeedConnect.model.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;

public class UserDetailsImpl implements UserDetails {

  private Long id;
  private String name;
  private String username;
  private String email;
  private String password;

  public UserDetailsImpl(Long id, String name, String username, String email, Collection<? extends GrantedAuthority> authorities) {
    super();
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.authorities = authorities;
  }

  public static UserDetailsImpl build(User user) {
    return new UserDetailsImpl(
            user.getId(),
            user.getUsername(),
            user.getLogin(),
            user.getEmail(),
            new ArrayList<>());
  }

  private Collection<? extends GrantedAuthority> authorities;

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return this.authorities;
  }

  @Override
  public String getPassword() {
    return this.password;
  }

  @Override
  public String getUsername() {
    return this.username;
  }

  @Override
  public boolean isAccountNonExpired() {
    return true; //A princípio o usuário nunca expira
  }

  @Override
  public boolean isAccountNonLocked() {
    return true;//A princípio o usuário nunca fica bloqueado
  }

  @Override
  public boolean isCredentialsNonExpired() {
    return true; //A princípio o usuário nunca expira
  }

  @Override
  public boolean isEnabled() {
    return true; //A princípio o usuário nunca expira
  }
}
