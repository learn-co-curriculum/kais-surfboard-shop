class Api::SurfboardsController < ApplicationController 

    def index 
        render json: Surfboard.order(:skill_level).to_json(include: [ :categories ])
    end

    def show 
        binding.pry
        render json: Surfboard.find_by(id: params[:id]).to_json(include: [ :categories ])
    end

    def create 
        surfboard = Surfboard.create(surfboard_params)
        if surfboard.save 
            render json: { id: surfboard.id, success: 'ok' }
        else 
            render json: { message: 'error' }, status: 412
        end 
    end

    def destroy 
        surfboard = Surfboard.find_by(id: params[:id]) 
        if surfboard.delete 
            render json: { sucess: 'ok' }
        else 
            render json: { message: 'error' }, status: 412
        end
    end

    private 

        def surfboard_params 
            params.require(:surfboard).permit(:name, :length, :price, :quantity, category_ids: [])
        end
end

# An Array of surfboards sorted by skill level with their category [] √ √ √ √