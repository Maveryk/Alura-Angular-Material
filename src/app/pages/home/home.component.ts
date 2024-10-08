import { Component } from '@angular/core';
import { PromocaoService } from '../../core/services/promocao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private servicoPromocao: PromocaoService) {

  }

  ngOnInit(): void {
    this.servicoPromocao.listar()
      .subscribe(
        resposta => {
          console.log(resposta)
        }
      )
  }
}
