<!-- fetch is a function build into js that you can use to send requests to an api
use pass the url into the fetch so it knows where to go. any api is usuable as long as it is public.
you request a fetch then it returns a response
you request a obj{} and it returns a fetch (obj{})..actually returns a Promise because fetch is async -->

<!-- api_token.. is a password or signature.. it is necessary because the retainer needs to limit the times you can call them. they need to know who is calling their api and how many times -->

<!-- Get Request Parameters.. you need to send parameters so the api can return you specific items that you asked for
some api needs something more secure.. which is called a Header.. it is not a parameter... to get Header you create a response obj{}.  -->

<!-- error handling.. the .catch block doesnt catch the error because successfully acessing the api is consider success regardless of what data comes back. -->

<!-- POST Request... is similar to Get .. it where you need to pass any additional data that youb need to pass to the server.. submit forms. -->

<!-- Http request is a request from a client to a server. from a js app to a api.
why use fetch? because you can use it natively without installing a 3rd party library.. supports most modern applications..XHR uses callbacks which gets messy -->