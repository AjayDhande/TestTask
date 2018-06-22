class ImageController < ApplicationController
	
	##--
  ## Created On: 22/06/2018
  ## Purpose: To get into main page.
  #++
	def new
		@image = Image.new
	end 
  
  ##--
  ## Created On: 22/06/2018
  ## Purpose: To save the images into the database.
  #++
	def create
    if params[:image].present?
      image_value = params[:image][:picture]
  	  image_value.each do |img|
  			Image.create(picture: img[1])
  		end	
  		flash[:notice] = "Image has been uploaded successfully."
		else
      flash[:error] = "Please select image"
    end
    redirect_to root_path
	end
end
