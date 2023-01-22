Rails.application.routes.draw do
  resources :tasks, only: [:index, :destroy, :create, :update]

end
