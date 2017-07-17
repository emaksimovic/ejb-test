package postserver.rest.impl;

import java.util.List;

import javax.inject.Inject;

import postserver.domain.Post;
import postserver.dto.PostDto;
import postserver.rest.PostRest;
import postserver.service.PostService;;

public class PostRestImpl implements PostRest {
	
	@Inject
	private PostService postService;

	public List<Post> getPosts() throws Exception {
		return postService.getPosts();
	}

	public Post savePost(PostDto post) throws Exception {
		return postService.savePost(post);
	}

}