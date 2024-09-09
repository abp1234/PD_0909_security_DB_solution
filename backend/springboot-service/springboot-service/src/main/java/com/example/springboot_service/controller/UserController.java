package main.java.com.example.springboot_service.controller;

import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @GetMapping
    public String getUsers(){
        return "";
    }
}
