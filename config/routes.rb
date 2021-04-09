Rails.application.routes.draw do
  root to: "boards#index"
  resources :boards, only: [:index, :new]
end
