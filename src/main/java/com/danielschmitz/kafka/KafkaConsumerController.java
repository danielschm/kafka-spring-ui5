package com.danielschmitz.kafka;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.stereotype.Component;

@EnableScheduling
@Component
public class KafkaConsumerController
{
    @Autowired
    private SimpMessagingTemplate template;

    public KafkaConsumerController() {
        System.out.println("WebsocketController instantiated.");
    }

    @KafkaListener(topics = "Result")
    public void processKafkaMessage(String json) {
        template.convertAndSend("/topic/data", json);
    }
}
