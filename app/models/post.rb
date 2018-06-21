class Post < ApplicationRecord
  belongs_to :user

  def self.dump
    Post.find_by_sql("select p.id as id, p.title, p.body, u.name as user_name from posts p join users u on p.user_id = u.id")
  end

  def self.dump_one(id)
    Post.find_by_sql("select p.id as id, p.title, p.body, u.name as user_name from posts p join users u on p.user_id = u.id where p.id = #{id} ")
  end

end
