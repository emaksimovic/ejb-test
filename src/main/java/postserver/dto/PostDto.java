package postserver.dto;

import java.util.Date;

import javax.xml.bind.annotation.XmlRootElement;

import postserver.domain.Post;

@XmlRootElement
public class PostDto {
	private String name;
	private String content;
	private String createdBy;
	private Date createdOn;

	public PostDto() {}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public Date getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(Date createdOn) {
		this.createdOn = createdOn;
	}
	
	public Post toPost() {
		Post p = new Post();	
		p.setCreatedBy(this.getCreatedBy());
		p.setCreatedOn(this.getCreatedOn());
		p.setPostContent(this.getContent());
		p.setPostName(this.getName());
		return p;
	}
}
