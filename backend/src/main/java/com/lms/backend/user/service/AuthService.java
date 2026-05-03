package com.lms.backend.user.service;

import com.lms.backend.user.dto.LoginRequest;
import com.lms.backend.user.dto.RegisterRequest;
import com.lms.backend.user.entity.User;
import com.lms.backend.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository repository;

    private final BCryptPasswordEncoder encoder =
            new BCryptPasswordEncoder();

    public String register(RegisterRequest request) {

        if (repository.existsByEmail(request.getEmail())) {
            return "Email already exists";
        }

        User user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(
                        encoder.encode(request.getPassword())
                )
                .build();

        repository.save(user);

        return "User registered successfully";
    }

    public String login(LoginRequest request) {

        User user = repository.findByEmail(request.getEmail())
                .orElse(null);

        if (user == null) {
            return "User not found";
        }

        boolean valid = encoder.matches(
                request.getPassword(),
                user.getPassword()
        );

        if (!valid) {
            return "Invalid password";
        }

        return "Login successful";
    }
}