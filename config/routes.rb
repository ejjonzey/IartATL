Rails.application.routes.draw do
namespace :api do
    resources :artists

    resources :locations do
        resources :artists
    end
end
end
