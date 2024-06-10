package ok.millionaire.converter;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Set;
import java.util.concurrent.atomic.AtomicInteger;

import ok.millionaire.entity.RatingDto;
import ok.millionaire.entity.RatingEntity;

public class RatingSetToDtoListConverter implements ToDtoConverter<Set<RatingEntity>, List<RatingDto>> {

    private final static Comparator<RatingEntity> RATING_COMPARATOR = Comparator
        .comparingInt(RatingEntity::score)
        .reversed()
        .thenComparingLong(RatingEntity::time)
        .thenComparingLong(RatingEntity::created);

    @Override
    public List<RatingDto> convert(Set<RatingEntity> value) {
        List<RatingDto> result = new ArrayList<>();
        AtomicInteger id = new AtomicInteger();
        value.stream()
            .sorted(RATING_COMPARATOR)
            .forEach(entity -> {
                result.add(new RatingDto(id.incrementAndGet(), entity.name(), entity.score(), entity.time()));
            });
        return result;
    }
}
