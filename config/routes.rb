Rails.application.routes.draw do
  root 'root#index'
  get '/greeting', to: 'root#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    namespace :v1 do
      resources :messages, only: [:index, :show, :create, :update, :destroy]
    end
  end
end
