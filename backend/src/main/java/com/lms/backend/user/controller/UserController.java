package com.lms.backend.user.controller;
import com.lms.backend.user.dto.UserDto;
import com.lms.backend.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService service;

    @PostMapping
    public UserDto createUser(
            @RequestBody UserDto dto
    ){
        return service.createUser(dto);
    }

    @GetMapping
    public List<UserDto> getUsers(){
        return service.getAllUsers();
    }
}