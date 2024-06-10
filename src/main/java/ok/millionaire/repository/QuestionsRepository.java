package ok.millionaire.repository;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;

import ok.millionaire.entity.Category;
import ok.millionaire.entity.Level;
import ok.millionaire.entity.QuestionData;
import ok.millionaire.entity.ShortOption;

public class QuestionsRepository {

    private static final Logger LOG = LoggerFactory.getLogger(QuestionsRepository.class);

    private final Map<Level, Map<Category, List<QuestionData>>> loadedData;

    public QuestionsRepository() {
        this.loadedData = loadQuestionsDataFromFiles();
    }

    public Map<Level, Map<Category, List<QuestionData>>> getAllData() {
        return loadedData;
    }

    private Map<Level, Map<Category, List<QuestionData>>> loadQuestionsDataFromFiles() {
        try {
            PathMatchingResourcePatternResolver resolver =
                new PathMatchingResourcePatternResolver(QuestionsRepository.class.getClassLoader());
            Resource[] resources = resolver.getResources("questions/*txt");
            if (resources == null || resources.length == 0) {
                throw new RuntimeException("Resources with questions have not been found");
            }
            Map<Level, Map<Category, List<QuestionData>>> loadedData = new ConcurrentHashMap<>();

            for (Resource resource : resources) {
                try (BufferedReader reader = new BufferedReader(new InputStreamReader(resource.getInputStream()))) {
                    String line;
                    List<String> lines = new ArrayList<>();
                    while ((line = reader.readLine()) != null) {
                        lines.add(line);
                    }
                    if (CollectionUtils.isEmpty(lines)) {
                        LOG.warn("Can't read resource {}", resource);
                        continue;
                    }
                    int lineNumber = 0;
                    Category category = Category.getByName(lines.get(lineNumber++));
                    Level level = Level.getById(Integer.parseInt(lines.get(lineNumber++)));
                    String tag = Optional.ofNullable(lines.get(lineNumber++)).filter(StringUtils::hasText).orElse(null);
                    String text = lines.get(lineNumber++);
                    List<ShortOption> options = Arrays.asList(
                        new ShortOption(lines.get(lineNumber++), true),
                        new ShortOption(lines.get(lineNumber++), false),
                        new ShortOption(lines.get(lineNumber++), false),
                        new ShortOption(lines.get(lineNumber++), false)
                    );
                    loadedData.putIfAbsent(level, new ConcurrentHashMap<>());
                    Map<Category, List<QuestionData>> levelMap = loadedData.get(level);
                    levelMap.putIfAbsent(category, new ArrayList<>());
                    levelMap.get(category).add(new QuestionData(
                        level,
                        text,
                        options,
                        tag,
                        resource.getFilename()
                    ));
                    LOG.info("Question " + resource.getFilename() + " " + category + " " + level + " " + tag);
                }
            }

            for(Map.Entry<Level, Map<Category, List<QuestionData>>> e : loadedData.entrySet()) {
                for (Map.Entry<Category, List<QuestionData>> ee : e.getValue().entrySet()) {
                    LOG.info(e.getKey() + " " + ee.getKey() + " = " + ee.getValue().size());
                }
            }

            return loadedData;
        } catch (IOException e) {
            LOG.error("Error received during questions data reading", e);
            throw new RuntimeException("Can't read questions data", e);
        }
    }
}
