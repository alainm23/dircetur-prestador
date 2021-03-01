import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Desarrollado por <b><a href="#!" target="_blank">PuntoPro</a></b> 2020</span>
  `,
})
export class FooterComponent {
}
