import { numberAttribute } from "@angular/core";

export class taskStructure {
    title: String;
    description: String;
    priority: String;
    deadline: Date;
    status: String;

    constructor() {
        this.title = '';
        this.description = '';
        this.priority = '';
        this.deadline = new Date();
        this.status = '';
    }
}