package ok.millionaire.entity;

import java.util.Map;

public record GameSession(String sessionId,
                          Map<Integer, QuestionData> questionsMap) {
}
