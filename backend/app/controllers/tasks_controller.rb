class TasksController < ApplicationController

    def index
        tasks = Task.all
        render json: tasks
    end

    def update
        task = Task.find(params[:id])
        task.update!(task_params)
        render json: task, status: :accepted
    end

    def destroy
        task = Task.find(params[:id])
        task.destroy
        render json: task, status: :ok
    end

    def create
        task = Task.create!(task_params)
        render json: task, status: :created
    end


    private

    def task_params
        params.permit(:id, :title, :due_date, :completed, :priority)
    end
 
end
