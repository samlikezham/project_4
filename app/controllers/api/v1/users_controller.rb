class Api::V1::UsersController < ApplicationController
  def index
    render json: User.all
  end

  def create
    user = User.create(fruit_params)
    render json: user
  end

  def destroy
    User.destroy(params[:id])
  end

  def update
    user = User.find(params[:id])
    user.update_attributes(user_params)
    render json: user
  end

  private

  def fruit_params
    params.require(:user).permit(:id, :username, :password, :high_score)
  end
end