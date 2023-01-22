puts "seeding"

Task.create(title: "Clean car", due_date: DateTime.new(2023,9,14), completed: false, priority: "low")
Task.create(title: "Do laundry", due_date: DateTime.new(2023,9,14), completed: true, priority: "medium")
Task.create(title: "Groceries", due_date: DateTime.new(2023,9,14), completed: false, priority: "high")

puts "done"
