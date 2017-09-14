Rails.application.routes.draw do
mount_devise_token_auth_for 'User', at: 'auth'
namespace :api do

    resources :locations do
    resources :artists
    end
end
end


