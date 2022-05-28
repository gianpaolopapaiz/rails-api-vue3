class Api::V1::AccountsController < Api::V1::BaseController
  def index
    @accounts = policy_scope(Account)
  end
end