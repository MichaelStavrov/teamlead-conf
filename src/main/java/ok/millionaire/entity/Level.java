package ok.millionaire.entity;

import java.util.Arrays;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

public enum Level {
    EASY(1, "easy"),
    MEDIUM(2, "medium"),
    HARD(3, "hard"),
    ;

    private static final Map<Integer, Level> BY_CODE = Arrays.stream(values())
        .collect(Collectors.toMap(Level::getId, Function.identity()));

    private final int id;
    private final String value;

    Level(int id, String value) {
        this.id = id;
        this.value = value;
    }

    public int getId() {
        return id;
    }

    public String getValue() {
        return value;
    }

    public static Level getById(int code) {
        Level level = BY_CODE.get(code);
        if (level == null) {
            throw new IllegalArgumentException("Unsupported code " + code);
        }
        return level;
    }
}
