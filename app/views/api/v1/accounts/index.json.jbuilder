json.array @accounts do |account|
  json.extract! account, :id, :name, :description
end
