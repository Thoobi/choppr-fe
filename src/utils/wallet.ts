
import { useAuthStore } from '@/store/auth.store';
import { AppConfig, showConnect, UserSession } from '@stacks/connect';

export const useConnect = () => {
  const appConfig = new AppConfig(['store_write', 'publish_data']);
  const userSession = new UserSession({ appConfig });
  const { setWalletAddress, setSteps, setToken } = useAuthStore();
  
  if (typeof window !== "undefined") {
    window.onload = function () {
      if (userSession.isSignInPending()) {
        userSession.handlePendingSignIn().then(userData => {
          console.log(userData);
        });
      } else if (userSession.isUserSignedIn()) {
      }
    };
  }
  

  const appDetails = {
      name: 'Choppr',
      icon: '/next.svg'
  }
  function authenticate() {
      showConnect({
        appDetails,
        redirectTo: '/',
        onFinish: () => {
          const userData = userSession.loadUserData();
          console.log(userData);
          setWalletAddress(userData.profile.stxAddress.mainnet)
          setToken(userData.authResponseToken);
          setSteps(2);
        },
        userSession,
      });
    }

    return {authenticate, userSession}
}