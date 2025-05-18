//fetch() : The fetch() method of the Window interface starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.

/*
syntax:

fetch(resource)
fetch(resource, options)

Parameters
:
resource
This defines the resource that you wish to fetch. This can either be:

A string or any other object with a stringifier — including a URL object — that provides the URL of the resource you want to fetch. The URL may be relative to the base URL, which is the document's baseURI in a window context, or WorkerGlobalScope.location in a worker context.
A Request object.

options (Optional)
A RequestInit object containing any custom settings that you want to apply to the request.


Return value
A Promise that resolves to a Response object.

*/
