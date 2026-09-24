import { Component, OnInit, signal, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subject } from 'rxjs';
import { Service } from './services/service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('my-app');


  numeroSubject = new Subject<number>()
  numero:number = 0
  photos:any[] = []


  constructor(private service:Service, private cdr:ChangeDetectorRef){}

  //ngOninit this.service.getArray.SUBSCRIBE!!
  ngOnInit(): void {
    this.service.getPhotos().subscribe(photos=>{
      this.photos = photos.map((p: any) => ({ //map per creare un fittizio array delle card e gestire la loro "cancellazione" singola con il loro rispettivo buntton
      ...p,
      isVisible: true
    }));
     console.log(this.photos)
    })

    //subscribe della subject inviata al onClick
    this.numeroSubject.subscribe(numero=>{
      this.numero=numero
    })

    this.cdr.detectChanges()
  }

 //incremento il numero ogni volta che clicco:
  onClick(){
    this.numeroSubject.next(this.numero+1) //+1 perchè viene letto e chiamato ogni volta, quindi incrementa ogni volta di uno!!
    }

 //bottone per eliminare la card usando l'index
  eliminaClick(index:number){
    this.photos[index].isVisible = false
  }

  }


