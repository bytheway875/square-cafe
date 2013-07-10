require 'bundler/setup'
require 'uri'

Bundler.require


get '/' do
  erb :index
end

get '/taxes' do
  # how many drinks * 100 cents
  puts Array(params[:drink]).length.inspect
  (Array(params[:drink]).length * 100).to_s
end

post '/shop' do
  'Thanks for your order'
end

post '/signups' do
  puts "\n" * 3
  puts "Received email: #{params[:email]}"
  puts URI.decode(params[:email])
  puts "\n" * 3

  "Thanks for signing up!"
end
