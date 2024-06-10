package ok.millionaire.config;

import java.util.List;
import java.util.Set;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import ok.millionaire.converter.AddRatingEntityBuilder;
import ok.millionaire.converter.EntityBuilder;
import ok.millionaire.converter.GameSessionToDtoConverter;
import ok.millionaire.converter.RatingSetToDtoListConverter;
import ok.millionaire.converter.ToDtoConverter;
import ok.millionaire.entity.AddRatingDto;
import ok.millionaire.entity.GameSession;
import ok.millionaire.entity.NewGameDto;
import ok.millionaire.entity.RatingDto;
import ok.millionaire.entity.RatingEntity;
import ok.millionaire.repository.GameSessionRepository;
import ok.millionaire.repository.QuestionsRepository;
import ok.millionaire.repository.RatingRepository;
import ok.millionaire.service.GameSessionGenerator;
import ok.millionaire.service.GameSessionService;

@Configuration
public class ApplicationConfiguration {

    @Bean
    public ToDtoConverter<GameSession, NewGameDto> gameSessionToDtoConverter() {
        return new GameSessionToDtoConverter();
    }

    @Bean
    public QuestionsRepository questionsRepository() {
        return new QuestionsRepository();
    }

    @Bean
    public GameSessionGenerator gameSessionGenerator(QuestionsRepository questionsRepository) {
        return new GameSessionGenerator(questionsRepository);
    }

    @Bean(destroyMethod = "dumpOnDestroy")
    public GameSessionRepository gameSessionRepository() {
        return new GameSessionRepository();
    }

    @Bean
    public GameSessionService gameSessionService(GameSessionGenerator gameSessionGenerator,
                                                 GameSessionRepository gameSessionRepository) {
        return new GameSessionService(gameSessionGenerator, gameSessionRepository);
    }

    @Bean
    public EntityBuilder<AddRatingDto, RatingEntity> addRatingEntityBuilder() {
        return new AddRatingEntityBuilder();
    }

    @Bean
    public ToDtoConverter<Set<RatingEntity>, List<RatingDto>> ratingSetToDtoListConverter() {
        return new RatingSetToDtoListConverter();
    }

    @Bean(destroyMethod = "dumpOnDestroy")
    public RatingRepository ratingRepository() {
        return new RatingRepository();
    }
}
