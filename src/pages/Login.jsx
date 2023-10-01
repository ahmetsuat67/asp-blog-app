import { Formik, Form } from "formik";
import { object, string } from "yup";
import useAuthCalls from "../hooks/useAuthCalls";


const Login = () => {
  const { login } = useAuthCalls();
  const loginSchema = object({
    email: string().required("Bu alan zorunludur"),
    password: string().required("Bu alan zorunludur"),
  });
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">LOG IN</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={(values, actions) => {
            login(values); 
            // login fonksiyonu çağırıldı parametre olarak values gönderidi login post isteği içersindeki userdatanın içini dolduracak.
            actions.resetForm();
            actions.setSubmitting(false);
          }}
        >
          {({ handleChange, handleBlur, values, touched, errors}) => (
            <Form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  E-MAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-stone-950"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-1"
                >
                  PASSWORD
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-stone-950"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-stone-900 text-white py-2 rounded-md hover:bg-stone-950 transition duration-300"
              >
                LOG IN
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
