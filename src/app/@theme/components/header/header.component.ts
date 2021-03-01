import { Component, OnDestroy, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService, NbToastrService } from '@nebular/theme';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AuthService } from '../../../services/auth.service';
import { DatabaseService } from '../../../services/database.service';
import { Router } from '@angular/router';
@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;

  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  currentTheme = 'default';
  userMenu = [ { title: 'Salir', data: { id: 'cerrar' } },{ title: 'Cambiar Contraseña', data: { id: 'recuperar' } } ];
  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private userService: UserData,
              private layoutService: LayoutService,
              private breakpointService: NbMediaBreakpointsService,
              public auth: AuthService,
              public bd: DatabaseService,
              public router: Router,
              public afAuth: AngularFireAuth,
              private toastrService: NbToastrService) {
  }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;



    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);

      this.menuService.onItemClick().subscribe ((event) => {
        if (event.item.data.id=='cerrar') {
          this.auth.signOut ()
          .then (() => {
            console.log ("Salir");

            this.router.navigate(['login']);
          })
          .catch ((error: any) => {
            console.log ('error', error);
          });
        }
        else if (event.item.data.id=='recuperar')
        {
          this.afAuth.auth.sendPasswordResetEmail(this.auth.email_user_logeado).then(
            () => {
              // success, show some message
               // Mensaje Toastr
               this.toastrService.show(
                'Con información para que cambie su contraseña.',
                `Le enviamos un correo`, {limit: 3, status:"success" }
                );
            },
            err => {
              // handle errors
              let message: string;

              switch (err) {
                case 'auth/wrong-password':
                  message = 'Invalid login credentials.';
                  break;
                case 'auth/network-request-failed':
                  message = 'Please check your internet connection';
                  break;
                case 'auth/too-many-requests':
                  message =
                    'We have detected too many requests from your device. Take a break please!';
                  break;
                case 'auth/user-disabled':
                  message =
                    'Your account has been disabled or deleted. Please contact the system administrator.';
                  break;
                case 'auth/requires-recent-login':
                  message = 'Please login again and try again!';
                  break;
                case 'auth/email-already-exists':
                  message = 'Email address is already in use by an existing user.';
                  break;
                case 'auth/user-not-found':
                  message =
                    'We could not find user account associated with the email address or phone number.';
                  break;
                case 'auth/phone-number-already-exists':
                  message = 'The phone number is already in use by an existing user.';
                  break;
                case 'auth/invalid-phone-number':
                  message = 'The phone number is not a valid phone number!';
                  break;
                case 'auth/invalid-email  ':
                  message = 'The email address is not a valid email address!';
                  break;
                case 'auth/cannot-delete-own-user-account':
                  message = 'You cannot delete your own user account.';
                  break;
                 default:
                  message = 'Oops! Something went wrong. Try again later.';
                  break;
              }
              // Mensaje Toastr
              this.toastrService.show(
                message,
                `Error`, {limit: 3, status:"danger" }
                );
            }
          );
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
