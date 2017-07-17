package postserver.dao.impl;

import java.lang.reflect.ParameterizedType;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import postserver.dao.BaseDao;

public class JpaBaseDao<T> implements BaseDao<T> {

	@PersistenceContext(unitName = "esad-pu")
	protected EntityManager entityManager;

	private final Class<T> entityType;

	@SuppressWarnings("unchecked")
	public JpaBaseDao() {
		this.entityType = ((Class<T>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[0]);
	}

	public T getByID(Long ID) {
		return entityManager.find(entityType, ID);
	}

	public T save(T type) {
		entityManager.persist(type);
		return type;
	}

	public T update(T type) {
		return entityManager.merge(type);
	}

	public void delete(T type) {
		entityManager.remove(entityManager.contains(type) ? type : entityManager.merge(type));
	}
}
