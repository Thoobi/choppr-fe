import { AppConfig, showConnect, UserSession } from '@stacks/connect';

const appConfig = new AppConfig(['store_write', 'publish_data']);
const userSession = new UserSession({ appConfig });

const appDetails = {
  name: 'Choppr',
  icon: '/next.svg'
}
function authenticate() {
  showConnect({
    appDetails: appDetails,
    redirectTo: '/',
    onFinish: () => {
      const userData = userSession.loadUserData();
      console.log(userData);
    },
    userSession,
  });
}

export { authenticate, userSession }