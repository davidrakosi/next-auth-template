import { signIn } from 'next-auth/react'

function Login({ providers }) {
    return (
        <div>
            <div>
                {Object.values(providers).map((provider) => (
                    <div key={provider.name}>
                        <button onClick={() => signIn(provider.id, { callbackUrl: '/' })}>
                            <span>Sign in with {provider.name}</span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Login
