Rails.application.routes.draw do
namespace :api do

    resources :artists do
      resources :arts
    end
    resources :arts
end
end
