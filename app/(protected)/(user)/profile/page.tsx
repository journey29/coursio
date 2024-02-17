import UserInfo from '@/components/UserInfo'
import { currentUser } from '@/lib/auth'

const Profile = async () => {
    const user = await currentUser();

    return (
        <UserInfo user={user} label='User info' />
    )
}

export default Profile