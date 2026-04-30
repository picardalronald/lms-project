package com.lms.backend.user.service;


import com.lms.backend.user.dto.UserDto;
import com.lms.backend.user.entity.User;
import com.lms.backend.user.mapper.UserMapper;
import com.lms.backend.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository repository;
    private final UserMapper mapper;

    public UserDto createUser(UserDto dto) {

        User user = mapper.toEntity(dto);

        User savedUser = repository.save(user);

        return mapper.toDto(savedUser);
    }

    public List<UserDto> getAllUsers() {
        return repository.findAll()
                .stream()
                .map(mapper::toDto)
                .toList();
    }
}