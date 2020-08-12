import { Link } from "gatsby"
import React, { useState } from "react"
import { Helmet } from "react-helmet"

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)
  return (
    <header>
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>
      <nav className="bg-black text-white">
        <div className="flex flex-wrap container justify-between mx-auto p-2">
          <Link to="/" className="flex items-center no-underline">
            <span className="ml-2 font-bold">{siteTitle}</span>
          </Link>
          <button
            className="block md:hidden border border-white flex items-center px-3 py-2"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <g>
                <rect fill="none" height="22" width="22" y="-1" x="-1" />
              </g>
              <g>
                <title>Menu</title>
                <line
                  y2="4.5"
                  x2="18.7426"
                  y1="4.5"
                  x1="1.54282"
                  strokeWidth="3.5"
                  stroke="red"
                  fill="none"
                />
                <line
                  y2="10"
                  x2="18.7426"
                  y1="10"
                  x1="1.54282"
                  strokeWidth="3.5"
                  stroke="green"
                  fill="none"
                />
                <line
                  y2="17.5"
                  x2="18.7426"
                  y1="17.5"
                  x1="1.54282"
                  strokeWidth="3.5"
                  stroke="yellow"
                  fill="none"
                />
              </g>
            </svg>
          </button>
          <div
            className={`${
              isExpanded ? `block` : `hidden`
            } md:block md:flex md:items-center w-full md:w-auto ml-auto`}
          >
            <div className="text-lg font-bold mt-3 md:m-0">
              <Link
                to="/"
                activeClassName="text-red-600 underline"
                className="block p-1 md:px-4 md:inline-block"
              >
                Home
              </Link>

              <Link
                to="/products"
                partiallyActive
                activeClassName="text-red-600 underline"
                className="block p-1 md:px-4 md:inline-block"
              >
                Products
              </Link>
              <button className="snipcart-checkout inline-block align-middle">
                <span className="shopping-cart inline-block align-middle">
                  <svg
                    className="w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="red"
                      d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"
                    />
                  </svg>
                </span>
                <span className="snipcart-items-count inline-block align-middle p-1"></span>
                <span className="snipcart-total-price inline-block align-middle p-1"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
