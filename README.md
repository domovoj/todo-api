# Todo API

If you are on development you should run:

* `npm install`
* `npm start`

Use the [*http://localhost:4000/*](http://localhost:4000/) for api

API:

* `/api/todos`
    * GET
        Returns all todos
    * POST
        Creates new todo. Require body parameter `value`, `isChecked` - optional
    * Delete
        Deletes todo by id. Require body parameter `id`

* `/api/deleteAll`
    * GET
        Removes all todos
