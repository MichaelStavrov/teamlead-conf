package ok.millionaire.entity;

import java.util.Collection;

public record QuestionDto(int id, String question, Collection<Option> answers, String questionId) {
}