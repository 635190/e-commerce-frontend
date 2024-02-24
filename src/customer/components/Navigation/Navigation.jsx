
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Avatar, Button, Menu, MenuItem } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import { navigation } from './NavigationData';
import { useNavigate } from 'react-router-dom'
import AuthModal from '../../Auth/AuthModal'




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const navigate=useNavigate()

  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openAuthModal, setopenAuthModal] = useState(false);

  const handleUserClick = (event) => {
    // setOpenUserMenu(!openUserMenu);
    setAnchorEl(event.currentTarget);
  };
  
  const handleCloseUserMenu = (event) => {
    setAnchorEl(null);
    // setOpenUserMenu(false);
  };

  const handleCategoryClick = (category, section, item, close) => {
      navigate(`/${category.id}/${section.id}/${item.id}`)
    close();
  }
  
  // Define handleOpen function
  const handleOpen = () => {
    setopenAuthModal(true);
  }

  const handleClose = () => {
    setopenAuthModal(false);
  }

  return (
    <div className="bg-white pb-10">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                              'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div key={item.name} className="group relative text-sm">
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                              </div>
                              <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                <span className="absolute inset-0 z-10" aria-hidden="true" />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                      Sign in
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav aria-label="Top" className="mx-auto">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center px-11">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">

                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="data:image/png;base64,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"
                  alt=""
                />

              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch z-10">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open, close }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-indigo-600 text-indigo-600'
                                  : 'border-transparent text-gray-700 hover:text-gray-800',
                                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (

                                        <div key={item.name} className="group relative text-base sm:text-sm">
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                            <span className="absolute inset-0 z-10" aria-hidden="true" />
                                            {item.name}
                                          </a>
                                          <p aria-hidden="true" className="mt-1">
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li key={item.name} className="flex">
                                                <p
                                                  onClick={() =>
                                                    handleCategoryClick(
                                                      category,
                                                      section,
                                                      item,
                                                      close
                                                    )
                                                  }
                                                  className=' cursor-pointer hover:text-gray-800'
                                                >
                                                  {item.name}
                                                </p>

                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className='ml-auto flex items-center'>
                <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                  {false ? (
                    <div>
                      <Avatar
                        className="text-white"
                        onClick={handleUserClick}
                        aria-controls={openUserMenu ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openUserMenu ? 'true' : undefined}
                        sx={{
                          bgcolor: deepPurple[500],
                          color: 'white',
                          cursor: 'pointer',
                        }}
                      >
                        P
                      </Avatar>


                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openUserMenu}
                        onClose={handleCloseUserMenu}
                        MenuListProps={{
                          'aria-labelledby': 'basic-menu',
                        }}
                      >
                        <MenuItem onClick={handleCloseUserMenu}>
                          profile
                        </MenuItem>

                        <MenuItem onClick={()=>navigate("/account/order")}>
                          My Orders
                        </MenuItem>
                        <MenuItem>
                          Logout
                        </MenuItem>
                      </Menu>
                    </div>
                  ) : (

                    <Button onClick={handleOpen}
                      className='text-sm font-medium text-gray-700 hover:text-gray-800'
                    >
                      Signin
                    </Button>
                  )}
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <AuthModal handleClose={handleClose} open={openAuthModal} />
    </div>
  )
}
