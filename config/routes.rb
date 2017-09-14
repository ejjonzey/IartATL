Rails.application.routes.draw do
namespace :api do
    resources :locations
    resources :artists 
    resources :arts
end
end
