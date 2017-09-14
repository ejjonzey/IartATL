Rails.application.routes.draw do
namespace :api do

    resources :locations do
        resources :artists
    end
end
end
