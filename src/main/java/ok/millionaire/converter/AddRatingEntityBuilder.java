package ok.millionaire.converter;

import java.util.UUID;

import ok.millionaire.entity.AddRatingDto;
import ok.millionaire.entity.RatingEntity;

public class AddRatingEntityBuilder implements EntityBuilder<AddRatingDto, RatingEntity> {

    @Override
    public RatingEntity build(AddRatingDto addRatingDto) {
        return new RatingEntity(
            UUID.randomUUID().toString().replace("-", ""),
            addRatingDto.name(),
            addRatingDto.score(),
            addRatingDto.time(),
            System.currentTimeMillis()
        );
    }
}
