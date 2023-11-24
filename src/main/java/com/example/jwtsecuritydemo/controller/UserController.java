package com.example.jwtsecuritydemo.controller;

import com.example.jwtsecuritydemo.entity.AuthRequest;
import com.example.jwtsecuritydemo.entity.UserInfo;
import com.example.jwtsecuritydemo.service.JwtService;
import com.example.jwtsecuritydemo.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class UserController {
    @Autowired
    private UserInfoService service;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @GetMapping("/welcome")
    public String welcome(){
        return "Welcome the endpoint not secured";
    }

    @PostMapping("/addNewUser")
    public String addNewUser(@RequestBody UserInfo userInfo){
        return service.addUser(userInfo);
    }

    @GetMapping("/user/userProfile")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public  String userProfile(){
        return "Welcome to User Profile";
    }

    @GetMapping("/user/adminProfile")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public  String adminProfile(){
        return "Welcome to Admin Profile";
    }

    @GetMapping("/generateToken")
    public  String authenticateAndGetToken(@RequestBody AuthRequest authRequest){
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUsername(),authRequest.getPassword()));
        if(authentication.isAuthenticated()){
            return jwtService.generateToken(authRequest.getUsername());
        }
        else{
            throw new UsernameNotFoundException("Invalid User Request");
        }
    }

}

