import { json, type RequestHandler } from "@sveltejs/kit";
import db from '$lib/database'

export const GET: RequestHandler = async ({ url }) => {
    const limit = Number(url.searchParams.get('limit') ?? 30)
    const order = url.searchParams.get('order') ?? 'asc'
    
    const posts = await db.post.findMany({
        orderBy: { id: order },
        take: limit
    })

    // event.setHeaders({
    //     'Cache-Control': 'max-age=60' //only for static webpage
    //     // 'Cache-Control': 'public, max-age=0, s-maxage=60' //server side rendering
    // })
    return json(posts)
}