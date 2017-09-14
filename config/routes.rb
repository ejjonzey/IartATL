Rails.application.routes.draw do
namespace :api do

    resources :artists 
    resources :arts
end
end
