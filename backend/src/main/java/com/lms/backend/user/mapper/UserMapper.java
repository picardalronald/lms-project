package com.lms.backend.user.mapper;


import com.lms.backend.user.dto.UserDto;
import com.lms.backend.user.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toDto(User user);

    User toEntity(UserDto dto);
}
