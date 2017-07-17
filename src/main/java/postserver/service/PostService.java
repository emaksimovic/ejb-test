package postserver.service;

import java.util.List;

import postserver.domain.Post;
import postserver.dto.PostDto;

public interface PostService {
	
	public List<Post> getPosts() throws Exception;
	public Post savePost(PostDto post) throws Exception;

}
