package ok.millionaire.service;

import java.util.List;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReadWriteLock;
import java.util.concurrent.locks.ReentrantReadWriteLock;

import ok.millionaire.entity.Category;
import ok.millionaire.entity.GameSession;
import ok.millionaire.repository.GameSessionRepository;

public class GameSessionService {

    // Оно тут как бы совсем не нужно, но я очень спешил и воткнул на всякий случай
    private final ReadWriteLock rwLock = new ReentrantReadWriteLock();

    private final GameSessionGenerator gameSessionGenerator;
    private final GameSessionRepository gameSessionRepository;

    public GameSessionService(GameSessionGenerator gameSessionGenerator,
                              GameSessionRepository gameSessionRepository) {
        this.gameSessionGenerator = gameSessionGenerator;
        this.gameSessionRepository = gameSessionRepository;
    }

    public GameSession startNew(List<Category> categories) {
        Lock writeLock = rwLock.writeLock();
        writeLock.lock();
        try {
            GameSession session = gameSessionGenerator.generateNewGameSession(categories);
            gameSessionRepository.saveSession(session);
            return session;
        } finally {
            writeLock.unlock();
        }
    }
}
