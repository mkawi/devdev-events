'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'

export async function login(formData: FormData) {
    const supabase = createClient()

    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/')
}

export async function signOut() {
    const supabase = createClient()
    const { error } = await supabase.auth.signOut()

    if (error) {
        redirect('/error')
    }

    revalidatePath('/login', 'layout')
    redirect('/login')
}


export async function signup(formData: FormData) {
    const supabase = createClient()

    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        options: {
            data: {
                role: formData.get("role") as string
            }
        }
    }

    const { error } = await supabase.auth.signUp(data)

    if (error) {
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/')
}

export async function addEvent(date: { from: Date, to: Date }, formData: FormData) {
    const supabase = createClient()

    const data = {
        title: formData.get('title'),
        location: formData.get('location'),
        start_date: date.from,
        end_date: date.to,
        type: formData.get('type'),
        price: Number(formData.get('price')),
        image: formData.get('imgurl'),
        description: formData.get('desc'),
    }

    const { error } = await supabase
        .from('events')
        .insert(data)

    if (error) {
        redirect('/error')
    }

    revalidatePath('/events', 'layout')
    redirect('/events')
}

export async function subscribeEvent(event_id, formData) {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        console.log("ERROR: ", user)
        redirect('/error')
    }

    const data = {
        event_id: event_id,
        user_id: user.id,
    }

    const { error } = await supabase
        .from('subscribed_events')
        .insert(data)

    if (error) {
        redirect('/error')
    }

    revalidatePath('/events', 'layout')
    redirect('/events')
}