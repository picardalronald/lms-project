package com.lms.backend.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.lms.backend.user.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
}