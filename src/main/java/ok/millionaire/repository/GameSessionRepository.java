package ok.millionaire.repository;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.databind.ObjectMapper;

import ok.millionaire.entity.GameSession;

public class GameSessionRepository {

    private static final Logger LOG = LoggerFactory.getLogger(GameSessionRepository.class);

    private static final String FILE_NAME = "./data/dump-%s.json";

    private final ObjectMapper serializer = new ObjectMapper();

    private final Map<String, GameSession> inMemorySessionsStore = new ConcurrentHashMap<>();

    public GameSession getSessionById(String sessionId) {
        return inMemorySessionsStore.get(sessionId);
    }

    public void saveSession(GameSession session) {
        inMemorySessionsStore.put(session.sessionId(), session);
    }

    public boolean exists(String sessionId) {
        return inMemorySessionsStore.get(sessionId) != null;
    }

    public void dumpOnDestroy() {
        File target = new File(String.format(FILE_NAME, System.currentTimeMillis()));
        try (FileWriter writer = new FileWriter(target)) {
            serializer.writeValue(writer, inMemorySessionsStore);
            LOG.info("Dumped to file {}", target);
        } catch (IOException e) {
            LOG.error("Can't dump to file {}", target, e);
        }
    }
}
