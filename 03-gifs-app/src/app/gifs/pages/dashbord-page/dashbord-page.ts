import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenu } from '../../components/side-menu/side-menu';

@Component({
  selector: 'app-dashbord-page',
  imports: [RouterOutlet, SideMenu],
  templateUrl: './dashbord-page.html',
  styleUrl: './dashbord-page.css'
})
class DashbordPage {

}

export default DashbordPage
