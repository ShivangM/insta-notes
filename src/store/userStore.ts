import { LoginParams, User, RegisterParams } from '@/domain/entities/User';
import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import toast from 'react-hot-toast';

interface UserState {
  userData: null | User;
  logout: () => void;
  loginUser: (authRes: any) => Promise<boolean>;
  signupUser: (authRes: any) => Promise<boolean>;
}

const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        userData: null,

        logout: async () => {
          set({ userData: null });
          useUserStore.persist.clearStorage();
        },

        loginUser: async (params: LoginParams) => {
          const res = await fetch('http://localhost:8000/dj-rest-auth/login/', {
            method: 'POST',
            body: JSON.stringify(params),
            headers: {
              'Content-Type': 'application/json',
            },
          }).then((res) => res.json());

          if (res.user) {
            set({ userData: res.user });
            return true;
          } else {
            toast.error('Something went wrong!');
          }

          return false;
        },

        signupUser: async (params: RegisterParams) => {
          const res = await fetch(
            'http://localhost:8000/dj-rest-auth/registration/',
            {
              method: 'POST',
              body: JSON.stringify(params),
              headers: {
                'Content-Type': 'application/json',
              },
            }
          ).then((res) => res.json());

          if (res.user) {
            set({ userData: res.user });
            return true;
          } else {
            toast.error('Something went wrong!');
          }

          return false;
        },
      }),
      {
        name: 'user-storage',
        storage: createJSONStorage(() => sessionStorage),
        partialize: (state) => ({ userData: state.userData }),
        // onRehydrateStorage: (state) => {
        //   console.log('hydration starts');

        //   // optional
        //   return (state, error) => {
        //     if (error) {
        //       console.log('an error happened during hydration', error);
        //     } else {
        //       const auth = getAuth();
        //       if (!auth) {
        //         state?.setUserData(null);
        //       }
        //     }
        //   };
        // },
      }
    )
  )
);

export default useUserStore;
