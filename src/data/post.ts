export async function getPosts(): Promise<Post[]> {

    try{
        const response = await fetch("http://localhost:3000/posts");
        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        const posts = await response.json();
        return posts;

    } catch (error) {
        console.error('Error: ', error);
        throw error;
    }
}

/**
 * Create a new post.
 * 
 * @param {object} postData - The data for the new post.
 * @param {string} postData.title - The title of the post.
 * @param {string} postData.description - The description of the post.
 * @param {string} postData.body - The body of the post.
 * @returns {Promise<Post>} - A promise that resolves to the created post.
 * @throws {Error} - If there is an error creating the post.
 */
export async function createPost(postData: PostData): Promise<Post> {
    try {
        const response = await fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        });

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        const post = await response.json();
        return post;
    } catch (error) {
        console.error('Error: ', error);
        throw error;
    }
}

/**
 * Retrieves a post with the specified ID from the server.
 *
 * @param {string} id - The ID of the post to retrieve.
 * @return {Promise<Post>} A promise that resolves to the retrieved post.
 */
export async function getPost(id: string): Promise<Post> {
    try {
        const response = await fetch(`http://localhost:3000/posts/${id}`);
        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }
        return await response.json();

    } catch (error) {
        console.error('Error: ', error);
        throw error;
    }
}

export async function updatePost(id: string, postData: PostData): Promise<Post> {
    try {
        const response = await fetch(`http://localhost:3000/posts/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        });

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error: ', error);
        throw error;
    }
}

export async function destroyPost(id: string): Promise<void> {
    try {
        await fetch(`http://localhost:3000/posts/${id}`, {
            method: "DELETE",
        });

        return;
    } catch (error) {
        console.error('Error: ', error);
        throw error;
    }
}