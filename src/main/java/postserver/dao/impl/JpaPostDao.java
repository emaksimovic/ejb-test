package postserver.dao.impl;

import java.util.List;

import javax.persistence.Query;

import postserver.domain.Post;

public class JpaPostDao extends JpaBaseDao<Post> {

	public List<Post> getPosts() {
		Query query = entityManager.createNamedQuery("getAllPosts");
		@SuppressWarnings("unchecked")
		List<Post> result = query.getResultList();
		return result;
	}
}