import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='font-bold'>1.When should you use context api?</h2>
            <p>Answer:when some data needs to be accessible by many components at different nesting levels.
            The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. 
            </p>
            <h2 className='font-bold'>2.What is Random hook?</h2>
            <p>A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks
            Hooks are reusable functions. When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook. Custom Hooks start with "use". Example: useFetch .
            </p>
            <h1 className='font-bold'>3.what is usehref?</h1>
            <p>useHref - The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router. useResolvedPath - This hook resolves the pathname of the location in the given to value against the pathname of the current location. </p>
            <h2 className='font-bold'>4.what is useMemo?</h2>
            <p>The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running. In this example, we have an expensive function that runs on every render. When changing the count or adding a todo, you will notice a delay in execution.
</p>
        </div>
    );
};

export default Blog;