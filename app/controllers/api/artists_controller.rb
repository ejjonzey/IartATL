class Api::ArtistsController < ApplicationController
    def index
        @location = Location.find(params[:id])
        @artists = Artist.all
        render json: @artists
    end

    def show
        @location = Location.find(params[:id])
        @artist = Artist.find(params[:id])
        render json: @artist
    end


    def create
        @location = Location.find(params[:id])        
        @artist = Artist.create!(artist_params)
        render json: @artist
    end

    def update
        @location = Location.find(params[:id])        
        @artist = Artist.find(params[:id])
        @artist.update!(artist_params)
        render json: @artist
    end


    def destroy
        @location = Location.find(params[:id])        
        @artist = Artist.find(params[:id])
        @artist.destroy
        render json:{
            message: "successfully deleted artist."
    }
    end

    private

    def artist_params
        params.require(:artist).permit(:name, :photo_url, :description, :location)
    end   
end
