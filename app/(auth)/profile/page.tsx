import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'
import Banner from '@/components/layout/Banner'
import { Profile } from '@/components/Profile'

export default async function ProfilePage() {
    const supabase = createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }

    return (
        <>
            <Banner title="My Profile" />
            <Profile />
        </>
    )
}