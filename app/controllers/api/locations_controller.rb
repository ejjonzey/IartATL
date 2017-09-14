class Api::LocationsController < ApplicationController

    def index
        @locations = Location.all
        render json: @locations
    end

    def show
        @location = Location.find(params[:id])
        @artists = @location.artists.all
        render json:{
            location: @location,
            artists: @artists
        }
    end

    def create
        @location = Loction.new(location_params)
        render json: @location
    end

    def update
        @location = Location.find(params[:id])
        render json: @location
    end

    def destroy
        @location = Location.fin(params[:id])
        @location.destroy
        render json:{
            message: "Location successfully destroyed!"
        }
    end

    private
    def location_params
        params.require(:location).permit(:address, :photo_url, :description)
    end

end
