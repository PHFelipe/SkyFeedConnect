package com.Ada.SkyFeedConnect.security;

import com.Ada.SkyFeedConnect.model.User;
import com.Ada.SkyFeedConnect.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class UserDatailServiceImpl implements UserDetailsService {

  private final UserRepository userRepository;

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    User user = this.userRepository.findByUsername(username).orElseThrow(
            () -> new UsernameNotFoundException("User not found"));
    return UserDetailsImpl.build(user);
  }
}