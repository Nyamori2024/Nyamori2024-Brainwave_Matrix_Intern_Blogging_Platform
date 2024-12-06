const PostForm = () => {
    return (
        <form className="bg-white p-6 shadow-md rounded">
            <input type="text" placeholder="Title" className="block w-full mb-4 p-2 border" />
            <textarea placeholder="Content" className="block w-full mb-4 p-2 border"></textarea>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
        </form>
    );
};

export default PostForm;
