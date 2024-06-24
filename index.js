addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const path = url.pathname;
  const queryParams = url.searchParams;

  if (path === '/search' && queryParams.has('q')) {
    const query = queryParams.get('q');
    return Response.redirect(`https://google.com?q=${query}`, 302);
  } else if (path === '/' && !queryParams.has('q')) {
    return Response.redirect('https://google.com', 302);
  } else if (path === '/github') {
    return Response.redirect('https://github.com/uhidontkno/plsgoogle.it', 302);
  } else {
    return Response.redirect(`https://google.com${path}`, 302);
  }
}
