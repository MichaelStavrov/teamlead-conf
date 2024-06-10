package ok.millionaire.rest;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.apache.commons.io.FileUtils;
import org.springframework.http.ResponseEntity;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ok.millionaire.converter.ToDtoConverter;
import ok.millionaire.entity.Category;
import ok.millionaire.entity.GameSession;
import ok.millionaire.entity.LogAnswerDto;
import ok.millionaire.entity.NewGameDto;
import ok.millionaire.service.GameSessionService;

@RestController
public class GameController {

    private final ToDtoConverter<GameSession, NewGameDto> converter;
    private final GameSessionService gameSessionService;

    public GameController(ToDtoConverter<GameSession, NewGameDto> converter,
                          GameSessionService gameSessionService) {
        this.converter = converter;
        this.gameSessionService = gameSessionService;
    }

    @GetMapping("app/start")
    public NewGameDto startNewGameByGet(@RequestParam(name = "category", required = false) List<String> categories) {
        GameSession session = gameSessionService.startNew(
            Optional.ofNullable(categories)
                .filter(value -> !CollectionUtils.isEmpty(value))
                .map(value -> value.stream().map(Category::getByName).collect(Collectors.toList()))
                .orElse(Collections.emptyList())
        );
        return converter.convert(session);
    }

    @PostMapping("app/start")
    public NewGameDto startNewGame(@RequestBody(required = false) List<String> categories) {
        GameSession session = gameSessionService.startNew(
            Optional.ofNullable(categories)
                .filter(value -> !CollectionUtils.isEmpty(value))
                .map(value -> value.stream().map(Category::getByName).collect(Collectors.toList()))
                .orElse(Collections.emptyList())
        );
        return converter.convert(session);
    }



    private static final Object fileLogLock = new Object();
    private static final String dir = "./data/answers";
    private static final SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    @PostMapping("app/loganswer")
    public ResponseEntity<Void> logAnswer(@RequestBody LogAnswerDto logAnswerDto) {
        String questionId = logAnswerDto.questionId();
        if (questionId != null && !questionId.isBlank()) {
            synchronized (fileLogLock) {

                try {
                    FileUtils.forceMkdir(new File(dir));
                } catch (IOException ignore) {  }

                String filename = dir + "/" + questionId;
                try {
                    FileUtils.writeStringToFile(
                            new File(filename),
                              df.format(new Date()) + "|" + logAnswerDto.correct() + "|" + logAnswerDto.time() + "|" + logAnswerDto.answer() + "\n",
                            true
                    );
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }

        return ResponseEntity.ok().build();
    }
}
