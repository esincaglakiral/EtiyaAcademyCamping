import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
  //* onPush Note: 1. Yol @Input'un parent'da yeniden set edilmesi.
  //* sadece bellek adreslerine. bellek adreslerinde verilerin değişikliğine bakmıyor.
  //child.component.ts:   @Input() items!: MegaMenuItem[];
  //parent.component.html: <app-footer [items]="items"></app-footer>
  //parent.component.ts:  items = [{}, {}]

  //* onPush Note: 2. Yol html içerisinde bir event çağrılması.
  //child.component.html:  <button (click)="configureItems()">Child'da Event'de değeri değiştir</button>

  //* onPush Note: 3. Yol Manuel olarak değişikliğin duyurulması.
  //child.component.ts: this.changeDetectorRef.markForCheck();

  constructor() {}

  ngOnInit(): void {}
}
