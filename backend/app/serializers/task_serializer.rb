class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :due_date, :completed, :priority
end
