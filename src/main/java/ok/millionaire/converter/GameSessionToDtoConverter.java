package ok.millionaire.converter;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.lang.NonNull;

import ok.millionaire.entity.GameSession;
import ok.millionaire.entity.NewGameDto;
import ok.millionaire.entity.Option;
import ok.millionaire.entity.QuestionDto;
import ok.millionaire.entity.ShortOption;

public class GameSessionToDtoConverter implements ToDtoConverter<GameSession, NewGameDto> {

    @Override
    public NewGameDto convert(@NonNull GameSession value) {
        return Optional.of(value)
            .map(entity -> new NewGameDto(
                    entity.sessionId(),
                    entity.questionsMap()
                        .entrySet()
                        .stream()
                        .map(item -> new Pair<>(item.getKey(), item.getValue()))
                        .map(pair ->
                            new QuestionDto(
                                // счетчик идет с нуля, для фронтов нужен от 1
                                pair.left() + 1,
                                pair.right().text(),
                                convertShortOptions(pair.right().options()),
                                pair.right().questionId()
                            )
                        ).toList()
                )
            ).get();
    }

    private List<Option> convertShortOptions(List<ShortOption> shortOptions) {
        List<ShortOption> options = new ArrayList<>(shortOptions);
        Collections.shuffle(options);
        List<Option> optionsDto = new ArrayList<>();
        int count = 1;
        for (ShortOption option : options) {
            optionsDto.add(new Option(count++, option.text(), option.correct()));
        }
        return optionsDto;
    }

    record Pair<L, R>(L left, R right) {
    }
}
