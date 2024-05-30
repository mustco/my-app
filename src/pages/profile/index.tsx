import { useSession } from "next-auth/react"
const ProfilePage = () => {
    const {data}:any = useSession();
    console.log(data);
    return(
        <div style={{marginTop:'60px'}}>
            {
                data && (
                    <h1>{data.user.fullname}</h1>
                )
            }
        </div>
    )
}

export default ProfilePage