class Image < ApplicationRecord
	has_attached_file :picture,:styles => { :small => "100x100#", :large => "500x500>" }, :default_url => '/default_id.png'
  validates_attachment_content_type :picture, content_type: ['image/jpeg', 'image/jpg', 'image/png', 'image/png']
end
