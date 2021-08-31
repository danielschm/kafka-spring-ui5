package com.danielschmitz.kafka.model;

import java.sql.Timestamp;

public class DataEntry {
    private final double result;
    private final double newTotalResult;
    private final Timestamp timestamp;

    public DataEntry(double result, double newTotalResult) {
        this.result = result;
        this.newTotalResult = newTotalResult;
        this.timestamp = new Timestamp(System.currentTimeMillis());
    }

    public double getResult() {
        return result;
    }

    public double getNewTotalResult() {
        return newTotalResult;
    }

    public Timestamp getTimestamp() {
        return timestamp;
    }

    public String toString() {
        return "DataEntry{" + "result=" + result + ", newTotalResult=" + newTotalResult + ", timestamp=" + timestamp + ";";
    }
}
