package postserver.service.impl;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import postserver.dao.impl.JpaPostDao;
import postserver.domain.Post;
import postserver.dto.PostDto;
import postserver.service.PostService;

@Stateless
public class PostServiceImpl implements PostService {
	
	@Inject
	private JpaPostDao postDao;

	public List<Post> getPosts() throws Exception {
		return postDao.getPosts();
	}

	public Post savePost(PostDto post) throws Exception {
		return postDao.save(post.toPost());
	}

}
