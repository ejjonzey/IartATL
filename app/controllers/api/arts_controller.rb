class Api::ArtsController < ApplicationController

    def index
        @art = Art.all
    end
    
    def new
        @art = Art.new
    end    
    
    def create
        @art = Art.create(artist_params)
        redirect_to arts_path(@art)
    end

    def show
        @art = Art.find(params[:id])
        render json: @art
    end

    def edit
        @art = Art.find(params[:id])
    end

    def update
        @art = Art.find(params[:id])
        @art.update!(art_params)
        redirect_to arts_path(@art)
    end

    def destroy
        @art = Art.find(params[:id])
        @art.destroy
        redirect_to arts_path
    end

    
    private
    def arts_params
        params.require(:arts).permit(:name, :photo_url, :description, :location)
    end
end
