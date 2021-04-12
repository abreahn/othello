Rails.application.routes.draw do
  root to: "boards#index"
  resources :boards, only: [:index, :new] do
    collection do
      get 'cpu'
    end
  end
end
