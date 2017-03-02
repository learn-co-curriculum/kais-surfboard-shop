Rails.application.routes.draw do
  

  namespace :api do 
    resources :surfboards, only: [:index, :show, :create, :destroy]
  end

end
