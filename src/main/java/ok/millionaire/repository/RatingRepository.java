package ok.millionaire.repository;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.LinkedHashSet;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import ok.millionaire.entity.RatingEntity;

public class RatingRepository {

    private static final Logger LOG = LoggerFactory.getLogger(RatingRepository.class);

    private static final String FILE_NAME = "./data/rating.json";

    private final ObjectMapper serializer = new ObjectMapper();

    private final Set<RatingEntity> ratingHolder;

    public RatingRepository() {
        this.ratingHolder = init();
    }

    public synchronized void addRating(RatingEntity entity) {
        ratingHolder.add(entity);
    }

    public synchronized Set<RatingEntity> getRating() {
        return ratingHolder;
    }

    public synchronized void clearRating() {
        this.ratingHolder.clear();
    }

    public void dumpOnDestroy() {
        File target = new File(FILE_NAME);
        try (FileWriter writer = new FileWriter(target)) {
            serializer.writeValue(writer, ratingHolder);
            LOG.info("Dumped to file {}", target);
        } catch (IOException e) {
            LOG.error("Can't dump to file {}", target, e);
        }
    }

    private Set<RatingEntity> init() {
        File target = new File(FILE_NAME);
        if (!target.exists()) {
            LOG.info("File {} does not exist, starting with empty store", target);
            return new LinkedHashSet<>();
        }
        try (FileReader reader = new FileReader(target)) {
            Set<RatingEntity> entities = serializer.readValue(reader, new TypeReference<LinkedHashSet<RatingEntity>>() {
            });
            LOG.info("Loaded rating state from file {} with {} records", target, entities.size());
            return entities;
        } catch (IOException e) {
            LOG.error("Can't dump to file {}", target, e);
            throw new RuntimeException(e);
        }
    }
}
