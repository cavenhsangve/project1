<script>
    import { page } from '$app/stores'
</script>

<h1>Yikes!</h1>

<p>Something went horribly wrong but the blast radius has been contained to this route.</p>

<pre>
    {JSON.stringify($page, null, 2)}
</pre>