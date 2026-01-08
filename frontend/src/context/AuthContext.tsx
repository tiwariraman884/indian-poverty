import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
    email: string;
    name: string;
    role: string;
    avatar?: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (email: string, name: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const savedUser = localStorage.getItem('sampark_user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setIsLoading(false);
    }, []);

    const login = (email: string, name: string) => {
        const newUser = {
            email,
            name,
            role: 'District Administrator',
            avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=1E40AF&color=fff`
        };
        localStorage.setItem('sampark_user', JSON.stringify(newUser));
        localStorage.setItem('authToken', 'token-' + Date.now());
        setUser(newUser);
    };

    const logout = () => {
        localStorage.removeItem('sampark_user');
        localStorage.removeItem('authToken');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
