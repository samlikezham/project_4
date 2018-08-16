Rails.application.routes.draw do

get '/users', to: 'users#index'
get '/users/:id', to: 'users#show'
post '/users', to: 'users#create'
delete '/users/:id', to: 'users#delete'
put '/users/:id', to: 'users#update'
post '/users/login', to: 'users#login'
get '/users/find/:name', to: 'users#checkUser'


  # namespace :api do
  #   namespace :v1 do
  #    resources :users, only: [:index, :create, :destroy, :update]
  #     root to: 'site#home'
  #   end
  # end
end
