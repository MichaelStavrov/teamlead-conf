package ok.millionaire.entity;

public record LogAnswerDto(String questionId, boolean correct, String answer, long time) {
}
