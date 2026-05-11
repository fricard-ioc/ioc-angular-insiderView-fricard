import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detall',
  standalone: true,
  imports: [],
  templateUrl: './detall.component.html',
  styleUrl: './detall.component.scss'
})
export class DetallComponent implements OnInit {
  id: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
