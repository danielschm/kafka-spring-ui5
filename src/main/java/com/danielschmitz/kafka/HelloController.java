package com.danielschmitz.kafka;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

    @GetMapping("/api/v1/data")
    public String data() {
        if (Math.random() > 0.5) {
            return "Data" + Math.random();
        }
        return "";
    }

}