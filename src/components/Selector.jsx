import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { ChevronsUpDown, CheckIcon  } from "lucide-react"

function Selector({ data, selected, setSelected }) {
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? data
      : data.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="w-full">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="block w-full px-4 py-1 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-[#1e213b] dark:text-gray-300 dark:border-gray-600">
            <Combobox.Input
              className="w-full bg-white dark:bg-[#1e213b] outline-none border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 dark:text-gray-200"
              displayValue={(person) => person.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronsUpDown 
                className="h-5 w-5 text-gray-400 hover:text-gray-500"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-[#1e213b] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
              {filteredPeople.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-[rgba(123,93,249,0.7)] dark:bg-[rgba(123,93,249,0.7)] text-white" : "text-gray-900 dark:text-gray-200"
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

export default Selector;