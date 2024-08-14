import { Component } from '@angular/core';
import { Depoimento } from '../../../core/types/type';
import { DepoimentoService } from '../../../core/services/depoimento.service';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrl: './depoimentos.component.scss'
})
export class DepoimentosComponent {
  depoimentos: Depoimento[] = [];
  
  constructor(private service: DepoimentoService) {
  }

  ngOnInit(): void {
    this.service.listar().subscribe(
      res => {
        this.depoimentos = res;
      }
    )
  }
}
