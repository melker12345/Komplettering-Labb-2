BUGS:


TODO:

Login: 
    - Allow the user to log in and log out. [DONE]
        - One button that renders Login if the user is signed in and Logged out.
    
    - If the user is logged in, the user should be able to. These should be buttons in the blog view 
        - Create a new blog post, maybe an md editor page?
            - CreateBlog
        - Delete an existing blog post.


View blogs: [DONE]
    Each blog routs the user to the url :to="`/blogs/${blog.id}`.
    That page should display the full blog nicely.
    Every blog specific page should follow the same structure.


Hamburger menu:
    Smaller screens should have a hamburger menu with all the nav buttins in


Maybe:

- Allow logged in users to modify blogs.
- Markdown editor? how ward is it to implement? 

- Filter?
- Search?
- Pagination?
- Sort?


Intresting points:
what should happen if the user signs out on a page that requires the user to be signed in?
    redirect to home page?
    return 401?, 403?
