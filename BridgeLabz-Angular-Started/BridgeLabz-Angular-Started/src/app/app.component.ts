import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'Helloworld';

  //UC2
  imgUrl = "https://media.licdn.com/dms/image/v2/C510BAQEYyeT3P0H_mw/company-logo_200_200/company-logo_200_200/0/1630611149363/bridgelabz_com_logo?e=2147483647&v=beta&t=TFgRiaA55f57NqQFnUbnsKu3mQo7c-LOfD8_iNSgtNM"

  //UC3
  url = "https://www.bridgelabz.com";

  //UC4
  userName: string = "";

  ngOnInit() : void {
    //UC1
    this.title = "Hello from BridgeLabz.";

  }

  onClick(event : Event){

    console.log("Save button is clicked : ", event);
    window.open(this.url, "_blank");

  }

}
