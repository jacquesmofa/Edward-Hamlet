import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const ProgramsPage = lazy(() => import('../pages/programs/page'));
const TeamPage = lazy(() => import('../pages/team/page'));
const ImpactPage = lazy(() => import('../pages/impact/page'));
const PartnersPage = lazy(() => import('../pages/partners/page'));
const GalleryPage = lazy(() => import('../pages/gallery/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/programs',
    element: <ProgramsPage />,
  },
  {
    path: '/team',
    element: <TeamPage />,
  },
  {
    path: '/impact',
    element: <ImpactPage />,
  },
  {
    path: '/partners',
    element: <PartnersPage />,
  },
  {
    path: '/gallery',
    element: <GalleryPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
