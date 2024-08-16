import React, { createContext, useState, ReactNode } from "react";
import Swal from 'sweetalert2';

interface AuthContextType {
  signed: boolean;
  user: any; 
  setUser: React.Dispatch<React.SetStateAction<any>>; 
  Login: (e:any,email: string, password: string) => Promise<void>;
  Logout: () => void;
}

const defaultAuthContext: AuthContextType = {
  signed: false,
  user: null,
  setUser: () => {}, 
  Login: async () => {}, 
  Logout: () => {} 
};

const AuthContext = createContext<AuthContextType>(defaultAuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null); 

  async function Login(e:any,email: string, password: string): Promise<void> {
      e.preventDefault()
    try {
      window.location.href='/'
    } catch (error) {
      await Swal.fire({
        icon: 'error',
        title: "Erro ao efetuar login",
        showDenyButton: false,
        showCancelButton: false,
        showConfirmButton: true,
        denyButtonText: 'Cancelar',
        confirmButtonText: 'Confirmar'
      });
    }
  }

  function Logout(): void {
    localStorage.clear();
    setUser(null);
    window.location.href='/Logout'
  }

  return (
    <AuthContext.Provider value={{ signed: Boolean(user), user, setUser, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
