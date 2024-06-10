package ok.millionaire.entity;

import java.util.List;

public record NewGameDto(String sessionId, List<QuestionDto> questions) {
}
