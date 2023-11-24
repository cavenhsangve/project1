// page.server.ts for secret environmental variables eg. talking to file, db, httprequest & etc

import db from '$lib/database'
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
    const post = await db.post.findUnique({
        where: { slug: params.slug }
    })

    if (!post) {
        throw error(404, 'Post not found')
    }

    return { post }
}