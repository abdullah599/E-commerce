import React from "react";
import { Customer } from "../DemoData/CustomerData";

const CustomerTable = () => {
  return (
    <div className="w-[100%] max-w-[450px] md:max-w-[1200px]">
      <div className="  ">
        <div className="py-8 ">
          <div className="    w-[100%]">
            <div className="inline-block min-w-full overflow-hidden rounded-3xl shadow bg-[color:var(--background-color-3)] w-[100%]">
              <table className="min-w-full leading-normal bg-[color:var(--background-color-3)] w-[100%]">
                <thead>
                  <tr className="">
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-white uppercase bg-[color:var(--background-color-2)] border-b border-gray-200 "
                    >
                      Customer
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-white uppercase bg-[color:var(--background-color-2)] border-b border-gray-200"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-white uppercase bg-[color:var(--background-color-2)] border-b border-gray-200"
                    >
                      Address
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Customer.map((customer) => (
                    <tr className="bg-[color:var(--background-color-3)]">
                      <td className="px-5 py-5 text-sm  border-b border-gray-200">
                        <div className="flex items-center">
                          <div className="flex-shrink-0"></div>
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {customer.first_name + " " + customer.last_name}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-5 py-5 text-sm  border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {customer.email}
                        </p>
                      </td>
                      <td className="px-5 py-5 text-sm  border-b border-gray-200">
                        <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 bg-green-200 rounded-full opacity-50"
                          ></span>
                          <span className="relative">{customer.address}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div class="flex flex-col items-center px-5 py-5 bg-[color:var(--background-color-3)] xs:flex-row xs:justify-between">
                <div class="flex items-center ">
                  <button
                    type="button"
                    class="w-full p-4 text-base text-gray-600 bg-[color:var(--background-color-3)] border rounded-l-xl hover:bg-gray-100"
                  >
                    <svg
                      width="9"
                      fill="currentColor"
                      height="8"
                      class=""
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    class="w-full px-4 py-2 text-base text-indigo-500 bg-[color:var(--background-color-3)] border-t border-b hover:bg-gray-100 "
                  >
                    1
                  </button>
                  <button
                    type="button"
                    class="w-full px-4 py-2 text-base text-gray-600 bg-[color:var(--background-color-3)] border hover:bg-gray-100"
                  >
                    2
                  </button>
                  <button
                    type="button"
                    class="w-full px-4 py-2 text-base text-gray-600 bg-[color:var(--background-color-3)] border-t border-b hover:bg-gray-100"
                  >
                    3
                  </button>
                  <button
                    type="button"
                    class="w-full px-4 py-2 text-base text-gray-600 bg-[color:var(--background-color-3)] border hover:bg-gray-100"
                  >
                    4
                  </button>
                  <button
                    type="button"
                    class="w-full p-4 text-base text-gray-600 bg-[color:var(--background-color-3)] border-t border-b border-r rounded-r-xl hover:bg-gray-100"
                  >
                    <svg
                      width="9"
                      fill="currentColor"
                      height="8"
                      class=""
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTable;
