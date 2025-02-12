import { render } from 'preact';
import { App } from './app';
import './index.scss';

const isUserProfilePage = (userName: string) => {
  const path = window.location.pathname;
  const urlName = path.split('/')[1];
  const isProfilePage = urlName === userName;
  return isProfilePage;
};

const injectApp = () => {
  // Check if user is logged in
  const loggedInuserAvatar = document.querySelector('button[data-login]');
  if (!loggedInuserAvatar) return;

  // Read loggedin User name and id
  const loggedInUserName = loggedInuserAvatar.getAttribute('data-login') || '';
  const avatarImg = loggedInuserAvatar.querySelector('img');
  const userId = avatarImg?.src?.split('/')?.pop()?.split('?')[0];

  if (!userId) return;

  //Check if user is on profile page
  if (!isUserProfilePage(loggedInUserName)) return;

  // Load the app
  const pinnedItemsForm = document.querySelector(`#user-${userId}-pinned-items-reorder-form`);

  if (pinnedItemsForm) {
    const existingRoot = document.getElementById('gh-repo-organizer-root');
    if (!existingRoot) {
      const root = document.createElement('div');
      root.id = 'gh-repo-organizer-root';
      root.style.marginTop = '20px';
      pinnedItemsForm.insertAdjacentElement('afterend', root);

      render(<App />, root);
    }
  }
};

injectApp();
