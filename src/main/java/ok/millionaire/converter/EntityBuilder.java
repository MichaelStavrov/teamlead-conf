package ok.millionaire.converter;

public interface EntityBuilder<Dto, Entity> {

    Entity build(Dto dto);
}
