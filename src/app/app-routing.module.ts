import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent} from './landing/landing.component';
import { GalleryComponent} from  './gallery/gallery.component';
import { AboutComponent} from './about/about.component';
import { EquipmentComponent} from  './equipment/equipment.component';
import { ContactComponent} from  './contact/contact.component';
import { BlogComponent} from  './blog/blog.component';


const routes: Routes = [
{

        path: "",component: LandingComponent

},

{

        path:"gallery",component: GalleryComponent

},

{

        path:"about",component: AboutComponent

},

{

        path:"equipment",component: EquipmentComponent

},

{

        path:"contact",component: ContactComponent

},

{

        path:"blog",component: BlogComponent

}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
