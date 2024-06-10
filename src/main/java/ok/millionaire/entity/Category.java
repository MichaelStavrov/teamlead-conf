package ok.millionaire.entity;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

public enum Category {
    JAVA(1, "Java"),
    PYTHON(2, "Python"),
    JAVASCRIPT(3, "JavaScript"),
    SCALA(4, "Scala"),
    SQL(5, "SQL"),
    NOSQL(6, "NOSQL"),
    SWIFT(7, "Swift"),
    C(8, "C"),

    COMMON(0, "common"),
    ALGO(99, "algo");

    private static final List<Category> SELECTABLE = List.of(JAVA, PYTHON, JAVASCRIPT, SCALA, SQL, NOSQL, SWIFT, C);

    private static final Map<Integer, Category> BY_ID_MAP = Arrays.stream(values())
        .collect(Collectors.toMap(Category::getId, Function.identity()));

    private static final Map<String, Category> BY_NAME_MAP = Arrays.stream(values())
        .collect(Collectors.toMap(category -> category.getCategory().toLowerCase(), Function.identity()));

    private final int id;
    private final String category;

    Category(int id, String category) {
        this.id = id;
        this.category = category;
    }

    public int getId() {
        return id;
    }

    public String getCategory() {
        return category;
    }

    public static Category getById(int id) {
        return Optional.ofNullable(BY_ID_MAP.get(id))
            .orElseThrow(() -> new IllegalArgumentException("Invalid category ID"));
    }

    public static Category getByName(String name) {
        return Optional.ofNullable(BY_NAME_MAP.get(name.toLowerCase()))
            .orElseThrow(() -> new IllegalArgumentException("Invalid category ID"));
    }

    public static List<Category> getSelectable() {
        return SELECTABLE;
    }
}
