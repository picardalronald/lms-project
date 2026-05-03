package com.lms.backend.user.controller;

import com.lms.backend.user.dto.LoginRequest;
import com.lms.backend.user.dto.RegisterRequest;
import com.lms.backend.user.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin("*")
public class AuthController {

    private final AuthService service;

    @PostMapping("/register")
    public ResponseEntity<String> register(
            @RequestBody RegisterRequest request
    ) {

        String result = service.register(request);

        if (result.equals("Email already exists")) {

            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(result);
        }

        return ResponseEntity.ok(result);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(
            @RequestBody LoginRequest request
    ) {

        String result = service.login(request);

        if (
                result.equals("Invalid password") ||
                        result.equals("User not found")
        ) {

            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(result);
        }

        return ResponseEntity.ok(result);
    }
}