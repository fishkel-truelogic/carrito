require 'json'

class Item
	attr_accessor :nombre
	attr_accessor :precio

	def initialize(nombre, precio)
		self.nombre = nombre
		self.precio = precio
	end

	def getJson()
		return {:nombre => self.nombre , :precio => self.precio}.to_json
end