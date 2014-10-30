require "sinatra"
require "json"
require 'sinatra/cross_origin'

configure do
  enable :cross_origin
end

get '/items' do
	cross_origin
	return [{:nombre => 'Mayonesa', :precio => '25'},
			{:nombre => 'Mostaza', :precio => '24'},
			{:nombre => 'Ketchup', :precio => '23'}
		].to_json
end
