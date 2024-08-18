import React from "react";

const Pricing = () => {
  return (
    <section className="flex flex-col items-center px-12 md:px-20 mb-20">
      <h1 className="text-3xl font-bold mb-8">Our Pricing</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 w-full">
        <div className="w-full max-w-sm p-6 bg-white border rounded-lg hover:shadow-md">
          <div className="mb-4">
            <h2 className="text-xl font-bold my-5">Monthly</h2>
            <p className="text-gray-600">
              Empower Your Business with our IT solution
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-lg my-2">
              Price: <span className="text-3xl font-bold">$50</span>/month
            </div>
            <button className="w-full py-2 bg-blue-800 text-white rounded-md">
              Buy Now
            </button>
            <ul className="list-disc pl-5 space-y-3">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
              <li>Feature 5</li>
              <li>Feature 6</li>
              <li>Feature 7</li>
              <li>Feature 8</li>
              <li>Feature 9</li>
            </ul>
            <a href="/" className="text-blue-800 flex items-center">
              Learn More <ArrowRightIcon className="ml-1" />
            </a>
          </div>
        </div>

        <div className="w-full max-w-sm p-6 bg-white border rounded-lg hover:shadow-md">
          <div className="mb-4">
            <h2 className="text-xl font-bold my-5">Monthly</h2>
            <p className="text-gray-600">
              Empower Your Business with our IT solution
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-lg my-2">
              Price: <span className="text-3xl font-bold">$50</span>/month
            </div>
            <button className="w-full py-2 bg-blue-800 text-white rounded-md">
              Buy Now
            </button>
            <ul className="list-disc pl-5 space-y-3">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
              <li>Feature 5</li>
              <li>Feature 6</li>
              <li>Feature 7</li>
              <li>Feature 8</li>
              <li>Feature 9</li>
            </ul>
            <a href="/" className="text-blue-800 flex items-center">
              Learn More <ArrowRightIcon className="ml-1" />
            </a>
          </div>
        </div>

        <div className="w-full max-w-sm p-6 bg-white border rounded-lg hover:shadow-md">
          <div className="mb-4">
            <h2 className="text-xl font-bold my-5">Monthly</h2>
            <p className="text-gray-600">
              Empower Your Business with our IT solution
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-lg my-2">
              Price: <span className="text-3xl font-bold">$50</span>/month
            </div>
            <button className="w-full py-2 bg-blue-800 text-white rounded-md">
              Buy Now
            </button>
            <ul className="list-disc pl-5 space-y-3">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
              <li>Feature 5</li>
              <li>Feature 6</li>
              <li>Feature 7</li>
              <li>Feature 8</li>
              <li>Feature 9</li>
            </ul>
            <a href="/" className="text-blue-800 flex items-center">
              Learn More <ArrowRightIcon className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default Pricing;
