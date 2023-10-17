import { useContext } from "react"
import { Card } from "../../components/blog-pages/Card"
import { SimpleLayout } from "../../components/blog-pages/SimpleLayout"
import { UserContext } from "../../app"
import './blogs.css'
import React from "react";
import { downloadStorageDocument, uploadStorageDocument } from "../../api-client/apiModules/users"

function Blog({ blog, setEditBlog, removeBlog, setCreateBlogModal }: any) {
  const {user, setUser} = useContext(UserContext)

  const editBlog = (blog: any) => {
    setEditBlog(blog);
    setCreateBlogModal(true);
}

  return (
    <>
    <article className="flex max-w-xl flex-col items-start justify-between">
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={blog.datetime} className="text-gray-500">
          {blog.date}
        </time>
        <a
          href="#"
          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
        >
          Marketing
        </a>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <a href={`/blogs/blog/${blog.id}`}>
            <span className="absolute inset-0" />
            {blog.title}
          </a>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{blog.description}</p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <img src={blog.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <a href={blog.author}>
              <span className="absolute inset-0" />
              {blog.author}
            </a>
          </p>
        </div>
      </div>
      {
          blog.authorId === user.id &&
            <div className='self-end'>
              <button className='p-1 bg-yellow-400 rounded-md mr-1' onClick={() => editBlog(blog)}>Edit</button>
              <button className='p-1 bg-red-400 rounded-md' onClick={() => removeBlog(blog.id)}>Delete</button>
            </div>
        }
    </article>
    </>
  )
}

export default function BlogsList({ list, setCreateBlogModal, setEditBlog, removeBlog, downloadableBlogs }: any) {
  const [toggle, setToggle] = React.useState(false);
  const [file, setFile] = React.useState<any>('');
  const {user, setUser} = React.useContext(UserContext);

  function handleFileChange(event: any) {
    setFile(event.target.files[0]);
  }

  return (
      <div className="bg-white py-20 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-4 lg:px-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-4 lg:px-4">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
            {/* Toggle Downloadable Blogs */}
            <div className="flex align-items">
              <span className='mr-5 mt-2 text-lg leading-8 text-gray-600'>Downloadable Blogs:</span>
              <label className="switch mt-2">
                <input type="checkbox" checked={toggle} onChange={() => setToggle(!toggle)}/>
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          { user.id ?
            !toggle ?
            <button onClick={() => setCreateBlogModal(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Create Blog
            </button>
            :
            <div>
              <div className='flex mb-1'>
                  <label className="block text-sm font-medium text-gray-700 mr-3">File</label>
                  <input type="file" onChange={handleFileChange} name='file'/>
              </div>
              <button onClick={() => uploadStorageDocument(`blogs`, file)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Upload
              </button>
            </div>
            : null
          }
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-4 lg:px-4">
        <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 px-4 sm:px-4 lg:px-4 sm:mt-16 sm:pt-16">
          <div className="flex max-w-3xl flex-col space-y-16">
            { !toggle ? list.map((blog: any) => (
              <Blog key={blog.id} blog={blog} setEditBlog={setEditBlog} removeBlog={removeBlog} setCreateBlogModal={setCreateBlogModal} />
            ))
            :
              <ul>
                {downloadableBlogs.map((blog: any) => (
                  <li key={blog} className='underline text-teal-500' onClick={() => downloadStorageDocument(`blogs/${blog}`, blog)}>
                    <p>{blog}</p>
                  </li>
                ))
                }
              </ul>
            }
          </div>
        </div>
        </div>
      </div>
  )
}
