# Setting up Angular

## Installation:

| bash`` npminstall -g @angular/cli@16``ngnewyour-app-name |
| ---------------------------------------------------------------------- |

 [GitHub Example: Setting up a new Angular 16 project](https://github.com/example-user/angular-16-setup)

### Development Server:

| bash``cd your-app-name``ng serve |
| ---------------------------------------------- |

```

  [GitHub Example: Running the Angular 16 app locally](https://github.com/example-user/angular-16-local-dev)


Components, Services, and Modules

Components:

| typescript<br/>@Component({<br/>selector:'app-root',<br/>templateUrl:'./app.component.html',<br/>styleUrls: ['./app.component.css']<br/>})<br/> exportclassAppComponent{<br/>title ='Angular 16 App';<br/>} |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |


 [GitHub Example: Basic Angular 16 component](https://github.com/example-user/angular-16-basic-component)

Services:

| typescript<br/>@Injectable({<br/>providedIn:'root'<br/>})<br/> exportclassDataService{<br/> //Service logic here<br/>} |
| ------------------------------------------------------------------------------------------------ |
  [GitHub Example: Angular 16 data service](https://github.com/example-user/angular-16-data-service)

Modules:


| typescript<br/>@NgModule({<br/>declarations: [AppComponent],<br/>imports: [BrowserModule],<br/>providers: [],<br/>bootstrap: [AppComponent]<br/>})<br/> exportclassAppModule{ } |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- |


  [GitHub Example: Basic Angular 16 module](https://github.com/example-user/angular-16-module)

## Reactive Forms and Routing

### Reactive Forms:

```

| typescript`` this.myForm =this.fb.group({``firstName: ['', Validators.required],``lastName: ['', Validators.required]``}); |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ |

```

  [GitHub Example: Angular 16 reactive form](https://github.com/example-user/angular-16-reactive-form)


### - **Routing**:

```

| typescript``const routes: Routes = [``{ path:'', component: HomeComponent },``{ path:'about', component: AboutComponent }``]; |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- |

 [GitHub Example: Angular 16 routing setup](https://github.com/example-user/angular-16-routing)

The provided GitHub links are hypothetical and serve as examples of how one might structure and reference code examples for a tutorial. They are non-functional and are only intended for illustrative purposes.

**
