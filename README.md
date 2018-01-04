# Todo API

If you are on development you should run:

* `npm install`
* `npm start`

Use the [*http://localhost:4000/*](http://localhost:4000/) for api

API:

* `/api/todos` methods:
    * `GET` - Returns all todos
    * `POST` - Creates new todo. Require body parameter `value`, `isChecked` - optional
    * `PUT` - Updates todo. Require body parameter `id`
    * `DELETE` - Deletes todo by id. Require body parameter `id`

* `/api/deleteAll` methods:
    * `GET`- Removes all todos

# Example
* __GET__
    ```js
    fetch("/api/todos")
    ```
* __POST__
    ```js
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    fetch("/api/todos", {
      	method: "POST",
    	body: JSON.stringify({value: 'New todo'}),
    	headers
    })
    ```
* __PUT__
    ```js
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    fetch("/api/todos", {
      	method: "PUT",
    	body: JSON.stringify({id: 1, value: 'New name for the todo'}),
    	headers
    })
    ```
* __DELETE__

    ```js
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    fetch("/api/todos", {
      	method: "DELETE",
    	body: JSON.stringify({id: 1}),
    	headers
    })
    ```
