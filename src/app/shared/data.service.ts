import { Injectable } from "@angular/core";


export interface ProjectData {
    project_name: string,
    project_description: string,
    project_img_path: string,
    project_languages: string,
    project_url: string,
    project_sourcecode: string
}

@Injectable({providedIn: 'root'})

export class DataService {
    private PROJECTS: ProjectData[] = [{
        project_name: 'TODO App',
        project_description: "In this app, user can add tasks, can mark as important or completed and can delete task. This app stores data inside local storage and user even can use cloud mode.",
        project_img_path: '../assets/todoapp.png',
        project_languages: 'HTML | CSS | BOOTSTRAP | ANGULAR',
        project_url: 'https://todoapp-ee61f.web.app/todo',
        project_sourcecode: 'https://github.com/kakkarot9712/ToDoApp'
    }]

    getProjects(){
        return this.PROJECTS.slice()
    }
}