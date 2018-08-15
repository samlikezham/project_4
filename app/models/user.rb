class User

	DB = PG.connect({:host => "localhost", :port => 5432, :dbname => 'jeopardy_development'})

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
				SET username='#{opts["username"]}', 
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



