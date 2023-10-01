import { Formik, Form } from "formik";
import { Outlet } from "react-router-dom";

const NewBlog = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-2">New Blog</h1>
        <Formik
          initialValues={{
            title: "",
            content: "",
            imageUrl: "",
            category: "",
            status: "",
          }}
          // validationSchema={loginSchema}
          onSubmit={(values, actions) => {
            // login(values);
            // login fonksiyonu çağırıldı parametre olarak values gönderidi login post isteği içersindeki userdatanın içini dolduracak.
            actions.resetForm();
            actions.setSubmitting(false);
          }}
        >
          {({ handleChange, handleBlur, values, touched, errors }) => (
            <Form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-stone-950"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Image Url
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.imageUrl}
                  className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-stone-950"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Category
                </label>
                <select
                  value={values.category}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Select a category</option>
                  {/* Kategori seçeneklerini buraya ekleyin */}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Status</label>
                <select
                  value={values.category}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Select a status</option>
                  <option value="d">Draft</option>
                  <option value="p">Published</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Content
                </label>
                <textarea
                  value={values.content}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full p-2 border rounded"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-stone-900 text-white py-2 rounded-md hover:bg-stone-950 transition duration-300"
              >
                ADD BLOG
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <Outlet />
    </div>
  );
};

export default NewBlog;
