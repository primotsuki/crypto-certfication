import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
    {
        title: 'Inicio',
        icon: 'home-outline',
        link: '/pages/dashboard',
    },{
        title: 'Nueva Solicitud',
        icon: 'email-outline',
        link: '/pages/solicitudes'
    },{
        title: 'Mis Solicitudes',
        icon: 'inbox-outline',
        link: '/pages/mis-solicitudes'
    },{
        title: 'Mis certificados',
        icon: 'folder-outline',
        link: '/pages/certificados'
    },{
        title: 'Validar certificado',
        icon: 'search-outline',
        link: '/pages/validar'
    }
]