import { getProviders, getSession, signOut, useSession } from 'next-auth/react'
import Login from '../components/Login'

export default function Home({ providers }) {
    const { data: session } = useSession()

    if (!session) return <Login providers={providers} />

    return (
        <div>
            <h1>Home Page</h1>

            <button
                onClick={(e) => {
                    e.preventDefault()
                    signOut()
                }}
            >
                Log Out
            </button>
        </div>
    )
}

export async function getServerSideProps(context) {
    const providers = await getProviders()
    const session = await getSession(context)

    return {
        props: {
            providers,
            session,
        },
    }
}
