import { json, type RequestHandler } from "@sveltejs/kit";
import db from '$lib/database'

export const GET: RequestHandler = async (event) => {
    const posts = await db.post.findMany({
        take: Math.round(Math.random() * 30)
    })

    event.setHeaders({
        'Cache-Control': 'max-age=60' //only for static webpage
        // 'Cache-Control': 'public, max-age=0, s-maxage=60' //server side rendering
    })
    return json(posts)
}