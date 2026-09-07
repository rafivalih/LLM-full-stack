package com.llmfullstackproject.llmfullstack_backend;

import org.springframework.ai.openai.OpenAiChatModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class Controller {

    private final OpenAiChatModel chatmodel;

    public Controller(OpenAiChatModel chatmodel) {
        this.chatmodel = chatmodel;
    }

    @PostMapping("/openai")
    public ResponseEntity<String> getAnswer(@RequestBody String question) {
        try {
            String response = chatmodel.call(question);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            System.out.println("OpenAI API Error: " + e.getMessage());
            return ResponseEntity.ok("Not enough tokens");
        }
    }
}