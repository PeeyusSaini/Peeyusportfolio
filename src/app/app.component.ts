import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyPortfolioAng';

  ngOnInit() {
    document.addEventListener("DOMContentLoaded", function(event) {
      // After 3 seconds, hide the loader
      setTimeout(function() {
        const loader = document.getElementById('ftco-loader');
        if (loader) {
          loader.classList.remove('show');
        }
      }, 1000); // 3000 milliseconds = 3 seconds
    });
  }
  
}
