package ok.millionaire.rest;

import java.util.List;
import java.util.Set;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import ok.millionaire.converter.EntityBuilder;
import ok.millionaire.converter.ToDtoConverter;
import ok.millionaire.entity.AddRatingDto;
import ok.millionaire.entity.RatingDto;
import ok.millionaire.entity.RatingEntity;
import ok.millionaire.repository.RatingRepository;

@RestController
public class RatingController {

    private final RatingRepository ratingRepository;
    private final EntityBuilder<AddRatingDto, RatingEntity> addRatingEntityBuilder;
    private final ToDtoConverter<Set<RatingEntity>, List<RatingDto>> ratingSetToDtoListConverter;

    private final ObjectMapper mapper = new ObjectMapper();

    public RatingController(
        RatingRepository ratingRepository,
        EntityBuilder<AddRatingDto, RatingEntity> addRatingEntityBuilder,
        ToDtoConverter<Set<RatingEntity>, List<RatingDto>> ratingSetToDtoListConverter
    ) {
        this.ratingRepository = ratingRepository;
        this.addRatingEntityBuilder = addRatingEntityBuilder;
        this.ratingSetToDtoListConverter = ratingSetToDtoListConverter;
    }

    @PostMapping("app/rating")
    public ResponseEntity<Void> addRating(@RequestBody AddRatingDto addRatingDto) {
        ratingRepository.addRating(addRatingEntityBuilder.build(addRatingDto));
        return ResponseEntity.ok().build();
    }

    @GetMapping("app/rating")
    public List<RatingDto> getRating() {
        return ratingSetToDtoListConverter.convert(ratingRepository.getRating());
    }

    @GetMapping("app/rating/drop")
    public ResponseEntity<Void> dropRating() {
        ratingRepository.clearRating();
        return ResponseEntity.ok().build();
    }

    @GetMapping("app/rating/raw")
    public ResponseEntity<String> getRawRating() throws JsonProcessingException {
        return ResponseEntity.ok(mapper.writeValueAsString(ratingRepository.getRating()));
    }
}
