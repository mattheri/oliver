import { cx } from "cva";
import { Fragment } from "react";
import { Button, If } from "~/common";
import type { Recipe } from "~/recipes/types";

import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  LinkIcon,
  PencilIcon,
} from "@heroicons/react/20/solid";

type Props = Partial<Pick<Recipe, "url">> & {
  canEdit?: boolean;
  isFavorite?: boolean;
};

export default function RecipeHeader({
  url,
  canEdit,
  isFavorite,
}: Props) {
  return (
    <section className="flex items-center justify-between py-4">
      <section className="flex gap-4">
        <If condition={!!canEdit}>
          <If.Then>
            <span className="hidden sm:block">
              <Button>
                <PencilIcon className="h-5 w-5" aria-hidden="true" />
                Edit
              </Button>
            </span>
          </If.Then>
        </If>

        <If condition={!!url}>
          <If.Then>
            <span className="hidden sm:block">
              <Button intent="secondary" to={url!}>
                <LinkIcon className="h-5 w-5" aria-hidden="true" />
                Source
              </Button>
            </span>
          </If.Then>
        </If>
        <Menu as="div" className="relative sm:hidden">
          <Menu.Button className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400">
            More
            <ChevronDownIcon
              className="-mr-1 ml-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={cx(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700",
                    )}
                  >
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={cx(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700",
                    )}
                  >
                    View
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </section>
    </section>
  );
}
