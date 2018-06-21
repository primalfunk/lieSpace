i = 1
5.times do
  name = Faker::Name.name
  email = "test#{i}@test.com"
  password = "password"
  password_confirmation = "password"
  User.create(name: name, email: email, password: password, password_confirmation: password, reset_password_token: nil)
  puts "Created user #{name}, #{email}"
  i += 1
end

i = 1
User.all.each do
  5.times do
    title = Faker::HitchhikersGuideToTheGalaxy.character
    body = Faker::HitchhikersGuideToTheGalaxy.quote
    Post.create(title: title, body: body, user_id: i)
    puts "Created post: #{title} - #{body} on user_id: #{i}"
  end
  i += 1
end