package ok.millionaire.entity;

import java.util.List;

public record QuestionData(Level level, String text, List<ShortOption> options, String exclusiveTag, String questionId) {
}