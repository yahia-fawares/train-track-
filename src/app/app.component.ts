import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/shared/header/header.component";
import { AuthService } from './Services/auth.service';
import { MapComponent } from "./components/home-components/map/map.component";
import { TripsComponent } from "./components/home-components/trips/trips.component";
import { NgxSpinnerModule } from "ngx-spinner";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MapComponent, TripsComponent,NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {





}
