class BlockingsController < ApplicationController
  before_action :require_user

  def new
    @other_user = User.find(params[:user_id])
    current_user.block(@other_user)
    flash[:success] = "User #{@other_user.username} has been blocked and can no longer follow you"

    respond_to do |format|
      format.html { redirect_to :back }
      format.js { render 'blocking' }
    end
  end

  def destroy
    @other_user = User.find(params[:user_id])
    current_user.unblock(@other_user)
    flash[:success] = "User #{@other_user.username} has been unblocked.  We're all friends!  Yay!"

    respond_to do |format|
      format.html { redirect_to :back }
      format.js { render 'blocking' }
    end
  end
end
