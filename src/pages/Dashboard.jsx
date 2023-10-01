import logo from "../assets/asp.png";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full md:w-2/4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg m-2 border border-white dark:bg-gray-800 dark:text-white">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 bg-white dark:bg-gray-800 grid place-items-center">
            <img src={logo} alt="tailwind logo" className="rounded-xl" />
          </div>
          <div className="w-full md:w-2/3 bg-white dark:bg-gray-800 dark:text-white p-3">
            <h3 className="font-black text-gray-800 dark:text-slate-400 md:text-3xl text-xl">
              asp
            </h3>
            <p className="md:text-lg text-gray-500 text-base line-clamp-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
              culpa exercitationem architecto, neque quibusdam aspernatur.
              Dolorum voluptates est rerum earum assumenda voluptate non
              necessitatibus hic, eos doloribus quos accusantium nisi?
            </p>

            <p className="text-xl font-black text-gray-800">
              <span className="text-gray-800 dark:text-slate-400 capitalize">
                Yazar: ASP
              </span>
              <br />
              <span className="text-gray-800 dark:text-slate-400 capitalize">
                Yayınlanma Tarihi: {new Date().toLocaleDateString()}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-2/4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg flex-1">
          <img
            className="rounded-t-lg"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt="asp"
          />

          <div className="p-5">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
              Noteworthy technology acquisitions 2021
            </h5>

            <p className="font-normal text-gray-700 mb-3">
              Here are the biggest enterprise technology acquisitions of 2021
              so far, in reverse chronological order.
            </p>
            <a
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
              href="#"
            >
              Read more
            </a>
          </div>
        </div>

        <div className="bg-white shadow-md  rounded-lg flex-1">
          <img
            className="rounded-t-lg"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt="asp"
          />

          <div className="p-5">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
              Noteworthy technology acquisitions 2021
            </h5>

            <p className="font-normal text-gray-700 mb-3">
              Here are the biggest enterprise technology acquisitions of 2021
              so far, in reverse chronological order.
            </p>
            <a
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
              href="#"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
