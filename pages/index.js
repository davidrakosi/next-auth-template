import { signIn, signOut, useSession } from 'next-auth/react'

export default function Home() {
    const { data: session } = useSession()

    const logIn = () => {
        signIn('google', { callbackUrl: '/' })
    }

    const logOut = (e) => {
        e.preventDefault()
        signOut()
    }

    if (!session)
        return (
            <div>
                <h1>You are not logged in!</h1>

                <button onClick={logIn}>Log In</button>
            </div>
        )

    return (
        <div>
            <h1>Home Page</h1>

            <button onClick={logOut}>Log Out</button>
        </div>
    )
}
