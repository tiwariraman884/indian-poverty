import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Mail, Lock, Globe, ArrowRight, Shield, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();

    // Get the page user came from, default to dashboard
    const from = (location.state as any)?.from?.pathname || '/dashboard';

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            // Simulate API call - replace with actual authentication
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Mock validation
            if (email && password.length >= 6) {
                // Profile "creation" via AuthContext
                const name = email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1);
                login(email, name);

                setSuccess(true);

                // Redirect after short delay to show success message
                setTimeout(() => {
                    navigate(from, { replace: true });
                }, 1000);
            } else {
                throw new Error('Invalid credentials');
            }
        } catch (err) {
            setError('Invalid email or password. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setError('');
        setIsLoading(true);

        try {
            // Simulate Google OAuth - in production, integrate with Google OAuth API
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Mock successful Google authentication
            const mockGoogleEmail = 'user@gmail.com';
            login(mockGoogleEmail, 'Official User');

            setSuccess(true);

            // Redirect after short delay
            setTimeout(() => {
                navigate(from, { replace: true });
            }, 1000);
        } catch (err) {
            setError('Google authentication failed. Please try again.');
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-govBlue via-blue-700 to-blue-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full">
                {/* Logo & Header */}
                <div className="text-center mb-8">
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center p-3 shadow-2xl shadow-black/20 group hover:scale-105 transition-transform duration-300 border border-white/10">
                            <img src="/images/logo.png" alt="SAMPARK" className="w-full h-full object-contain" />
                        </div>
                    </div>
                    <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">SAMPARK Stack™</h2>
                    <p className="text-blue-200 font-medium">Secured Socio-Technical Operating System</p>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-3xl shadow-2xl p-8">
                    {success ? (
                        <div className="text-center py-8">
                            <div className="flex justify-center mb-4">
                                <CheckCircle className="w-16 h-16 text-green-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Login Successful!</h3>
                            <p className="text-gray-600 mb-4">Redirecting you to the platform...</p>
                            <div className="flex justify-center">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-govBlue"></div>
                            </div>
                        </div>
                    ) : (
                        <>
                            {/* Error Message */}
                            {error && (
                                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                                    {error}
                                </div>
                            )}

                            {/* Google Login */}
                            <button
                                onClick={handleGoogleLogin}
                                disabled={isLoading}
                                className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-200 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-all mb-6 group disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                <span className="group-hover:translate-x-0.5 transition-transform">
                                    {isLoading ? 'Connecting...' : 'Continue with Google'}
                                </span>
                            </button>

                            <div className="relative mb-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-200"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-4 bg-white text-gray-500">Or continue with email</span>
                                </div>
                            </div>

                            {/* Email/Password Form */}
                            <form onSubmit={handleLogin} className="space-y-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            id="email"
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            disabled={isLoading}
                                            className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-govBlue focus:border-transparent transition-all disabled:opacity-50"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Lock className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            id="password"
                                            type="password"
                                            required
                                            minLength={6}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            disabled={isLoading}
                                            className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-govBlue focus:border-transparent transition-all disabled:opacity-50"
                                            placeholder="••••••••"
                                        />
                                    </div>
                                    <p className="mt-1 text-xs text-gray-500">Minimum 6 characters</p>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            type="checkbox"
                                            className="h-4 w-4 text-govBlue focus:ring-govBlue border-gray-300 rounded"
                                        />
                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                            Remember me
                                        </label>
                                    </div>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-govBlue hover:text-blue-800">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-govBlue text-white rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/30 group disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                            Signing In...
                                        </>
                                    ) : (
                                        <>
                                            Sign In
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </form>

                            <div className="mt-6 text-center">
                                <p className="text-sm text-gray-600">
                                    Don't have an account?{' '}
                                    <a href="#" className="font-semibold text-govBlue hover:text-blue-800">
                                        Contact your administrator
                                    </a>
                                </p>
                            </div>
                        </>
                    )}
                </div>

                {/* Security Badge */}
                <div className="mt-6 flex items-center justify-center gap-2 text-blue-200 text-sm">
                    <Shield className="w-4 h-4" />
                    <span>Secured by Government of India Infrastructure</span>
                </div>

                <div className="mt-4 text-center">
                    <Link to="/" className="text-blue-200 hover:text-white text-sm font-medium transition-colors">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
