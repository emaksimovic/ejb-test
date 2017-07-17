package postserver.dao;

public interface BaseDao <T> {      
    T getByID(Long ID);
    T save(T type);
    T update(T type);
    void delete(T type);
}