import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  public ngOnInit() {
    $(document).ready(function () {
        $('#sidebar').mCustomScrollbar({
            theme: 'minimal'
        });

        $('#sidebarCollapse').on('click', function () {
            $('#sidebar, #content').toggleClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });
    });
  }

  getPage(outlet) {
    return outlet.activatedRouteData['page'] || 'dashboard';
  }

}
