# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
#The line containing "class BlogPostsController" is the controller created by running $rails generate controller. It contains our CRUD methods that we use to manipulate data stored in a database. The controller is responsible for routing external requestion to internal actions.
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # The line containg @posts = BlogPost.all is there so that we can see ALL of the blog posts in our database. @posts is an instance variable assigned to the Ruby command that will show us ALL.
    @posts = BlogPost.all
  end

  def show
    # ---3)
    #The line containing @post = BlogPost.find.. is created so that we can find a specific blog post by its id, which is where params and id come into play. @post is an instance variable assigned to the logic that will FIND a specific blog post.
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # The word 'new' is a controller action that will return a form to create new data. In this case it would be the form needed to create a new blog post. 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # The line below is the logic needed to create a new blog post. @post is the instance variable decalred to hold the logic need. The .create attached to the BlogPost is a controller actoin the will create the data. The blog_post_params are the specified parameters that were created below that are required for any new or updated posts.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6)
  # The edit method is a controller method that will return a form for editing data. In this case it would return a form for editing a blog post.
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # post.update is the logic needed to update data. Update is a controller method that will 'submit' the updated data, in this case a blog post. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) In the case that the blog post in question is unsuccesully destroyed, or deleted, the else will redirect us back to the post we're wanting to delete. 
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  #The line containing 'private' is there so that everything below the word private, cannot be accessed or changed by the user. 
  private
  def blog_post_params
    # ---10)
    #The line containing params.require... is created so that we can specify what information must be passed into posts being created or updated. .require and .permit are methdods. The require method is there to ensure that a specific parameter is present and will return an error if it is not present. The permit methofd returns a copy of the parameters object, returning only the permitted keys and values.
    params.require(:blog_post).permit(:title, :content)
  end
end
