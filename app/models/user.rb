class User
<<<<<<< HEAD
	if(ENV['DATABASE_URL'])
			 uri = URI.parse(ENV['DATABASE_URL'])
			 puts "using env database"
			 puts uri
			 DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
	 else
			 DB = PG.connect(host: "localhost", port: 5432, dbname: 'simplerails')
			 puts "not using env database"
	end

=======

	DB = PG.connect({:host => "localhost", :port => 5432, :dbname => 'jeopardy_development'})
>>>>>>> b68c805396f3395c7e69e7c32c039017909be105

	def self.all
		results = DB.exec("SELECT * FROM users;")
		return results.each do |result|
			{
			  "id" => result["id"].to_i,
			  "username" => result["username"],
			  "high_score" => result["high_score"]
			}
		end
	end

	def self.find(id)
		results = DB.exec("SELECT * FROM users WHERE id=#{id};")
		result = results.first
		return {
			"id" => result["id"].to_i,
			 "username" => result["username"],
			 "high_score" => result["high_score"].to_i
		}
	end

	def self.create(opts)
		results = DB.exec(
			<<-SQL
				INSERT INTO users (username, password, high_score)
				VALUES ( '#{opts["username"]}', '#{opts["password"]}', 0 )
				RETURNING id, username, high_score;
			SQL
		)
		result = results.first
		return {
			"id" => result["id"].to_i,
			"username" => result["username"],
			"high_score" => result["high_score"].to_i
		}
	end

	def self.delete(id)
	    results = DB.exec("DELETE FROM users WHERE id=#{id};")
	    return { "deleted" => true }
	end

	def self.update(id, opts)
		results = DB.exec(
			<<-SQL
				UPDATE users
<<<<<<< HEAD
				SET username='#{opts["username"]}',
=======
				SET username='#{opts["username"]}', 
>>>>>>> b68c805396f3395c7e69e7c32c039017909be105
					password='#{opts["password"]}'
				WHERE id=#{id}
				RETURNING id, username, password
			SQL
		)
		result = results.first
		return {
			"id" => result["id"].to_i,
			"username" => result["username"],
			"password" => result["password"],
			"high_score" => result["high_score"].to_i
		}
	end
end
<<<<<<< HEAD
=======



>>>>>>> b68c805396f3395c7e69e7c32c039017909be105
