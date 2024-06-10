package ok.millionaire.service;

import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Random;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.lang.Nullable;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;

import ok.millionaire.entity.Category;
import ok.millionaire.entity.GameSession;
import ok.millionaire.entity.Level;
import ok.millionaire.entity.QuestionData;
import ok.millionaire.repository.QuestionsRepository;

public class GameSessionGenerator {

    private static final Set<Category> commonCategories = Set.of(Category.COMMON, Category.ALGO);
    private static final ThreadLocal<Random> randomHolder = ThreadLocal.withInitial(SecureRandom::new);

    private static final int QUESTIONS = 9;
    private static final Map<Level, Integer> QUESTIONS_PER_LEVEL = new HashMap<>() {{
        put(Level.EASY, 3);
        put(Level.MEDIUM, 3);
        put(Level.HARD, 3);
    }};

    private final QuestionsRepository questionsRepository;

    public GameSessionGenerator(QuestionsRepository questionsRepository) {
        this.questionsRepository = questionsRepository;
    }

    public GameSession generateNewGameSession(@Nullable List<Category> additionalCategories) {
        Set<Category> categories = new HashSet<>(commonCategories);
        if (!CollectionUtils.isEmpty(additionalCategories)) {
            categories.addAll(additionalCategories);
        }
        Map<Level, Map<Category, List<QuestionData>>> data = questionsRepository.getAllData();
        Map<Integer, QuestionData> questionDataMap = new HashMap<>();
        int counter = 0;

        int questionsRemain = QUESTIONS;
        while (questionsRemain > 0) {
            for (Level level : Level.values()) {
                int questionsPerLevel = QUESTIONS_PER_LEVEL.get(level);
                Map<Category, List<QuestionData>> levelData = copyQuestionsData(Optional
                    .ofNullable(data.get(level))
                    .orElseThrow(() -> new RuntimeException("Something went wrong")));
                List<Category> levelCategories = new ArrayList<>(categories);
                Set<String> tagsToExclude = new HashSet<>();
                while (questionsPerLevel-- > 0) {
                    questionDataMap.put(counter++, getQuestionByCategoryOrRandom(levelData, levelCategories,
                        level, tagsToExclude));
                    questionsRemain--;
                }
            }
        }
        return new GameSession(
            UUID.randomUUID().toString().replace("-", ""),
            questionDataMap
        );
    }

    private QuestionData getQuestionByCategoryOrRandom(Map<Category, List<QuestionData>> questionsData,
                                                       List<Category> categories,
                                                       Level level,
                                                       Set<String> tagsToExclude) {
        QuestionData result = null;
        while (result == null && !questionsData.isEmpty() && categories.size() > 0) {
            Category category = categories.get(randomHolder.get().nextInt(categories.size()));
            if (CollectionUtils.isEmpty(questionsData.get(category))) {
                questionsData.remove(category);
                categories.remove(category);
                continue;
            }
            List<QuestionData> questions = questionsData.get(category);
            int index = randomHolder.get().nextInt(questions.size());
            result = questions.get(index);
            if (StringUtils.hasText(result.exclusiveTag())) {
                if (tagsToExclude.contains(result.exclusiveTag())) {
                    questions.remove(index);
                    result = null;
                    continue;
                }
                tagsToExclude.add(result.exclusiveTag());
            }
            questions.remove(index);
        }
        return Optional.ofNullable(result).orElseThrow(() -> new RuntimeException("Can't get question for level "
            + level + " and categories " + categories));
    }

    private Map<Category, List<QuestionData>> copyQuestionsData(Map<Category, List<QuestionData>> data) {
        return data.entrySet().stream()
            .collect(Collectors.toMap(Map.Entry::getKey, entry -> new ArrayList<>(entry.getValue())));
    }
}
