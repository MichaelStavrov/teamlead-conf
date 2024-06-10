package ok.millionaire.converter;

public interface ToDtoConverter<Entity, Dto> {

    Dto convert(Entity value);
}
