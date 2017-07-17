package postserver.rest;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import postserver.domain.Post;
import postserver.dto.PostDto;

@Path("/posts")
public interface PostRest {
	
	@GET
	@Produces("application/json; charset=UTF-8")
	public List<Post> getPosts() throws Exception;
	
	@POST
	@Consumes("application/json; charset=UTF-8")
	@Produces("application/json; charset=UTF-8")
	public Post savePost(PostDto post) throws Exception;

}
