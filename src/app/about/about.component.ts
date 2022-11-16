import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  skillsets: string[]
  tools: string[]
  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.skillsets = this.dataservice.getSkillSet()
    this.tools = this.dataservice.getTools()
  }

  formatName(str: string){
    return str.toLowerCase().replace(' ', '-')
  }

  getPath(str: string){
    let formattedName = this.formatName(str)
    return `../../assets/svgs/${formattedName}.svg`
  }
}
