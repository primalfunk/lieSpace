class Api::PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  
  def index
    render json: Post.dump
  end

  def show
    render json: Post.dump_one(params[:id])
  end

  def create
    post = Post.new(post_params)
    if post.save
      render json: post
    else
      render json: {errors: post.errors}
    end
  end

  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: {errors: @post.errors}
    end
  end

  def destroy
    @post.destroy
  end

  private
    def post_params
      params.require(:id).permit(:title, :body, :user_name)
    end

    def set_post
      @post = Post.find(params[:id])
    end
end
