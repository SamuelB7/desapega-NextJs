import { GetServerSideProps } from "next"
import { api } from "../../services/api"


export default function User(data) {
    return (
        <div>
            <h1>{JSON.stringify(data)}</h1>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { user_id } = ctx.params

    const { data } = await api.get(`/user/${user_id}`)

    return {
        props: {
            data
        }
    }
}