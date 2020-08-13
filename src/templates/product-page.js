import React, { useState, useEffect, useRef } from "react"
import { graphql, Link } from "gatsby"
import { Image, Transformation } from "cloudinary-react"
import ColourSelect from "../components/colour-select"

export default function ProductPage({ data }) {
  const [colourTransformation, setColour] = useState("")
  let [colourName, getColour] = useState("")
  let [imgsrc, setImgsrc] = useState('');
  const imageRef = useRef()
  
  if (colourName.length === 0) {
    getColour(() => colourName = 'original')
  }

  useEffect(() => {
    setImgsrc(() => imageRef.current.src);
    if (imageRef.current) {
      const observer = new MutationObserver(muts => {
        muts.forEach(m => {
          if (m.type === 'attributes' && m.attributeName === 'src') {
            setImgsrc(() => m.target.src);
          }
        });
      });
      observer.observe(imageRef.current, {
        attributes: true
      })
    }
  }, [imgsrc]);

  return (
    <div className="flex flex-col md:flex-row">
      <Image
        innerRef={imageRef}
        cloudName="tamas-demo"
        publicId={data.markdownRemark.frontmatter.image}
        width="600"
        crop="scale"
        fetchFormat="auto"
        quality="auto"
        secure="true"
        className="h-full w-full md:mx-8 rounded-lg"
      >
        <Transformation rawTransformation={colourTransformation} />
      </Image>
      <div className="mt-4 md:mt-0 md:w-2/3 md:mx-8">
        <Link className="font-bold text-red-600" to="/products">
          ← Back to products
        </Link>
        <h1 className="font-bold text-4xl text-black-900">
          {data.markdownRemark.frontmatter.name}
        </h1>
        <span className="block font-semibold text-lg text-red-600">
          £{data.markdownRemark.frontmatter.price}
        </span>
        <button
          className="btn btn-green mt-4 snipcart-add-item"
          data-item-id={data.markdownRemark.frontmatter.id}
          data-item-custom1-name="Colour"
          data-item-custom1-options={colourName}
          data-item-price={data.markdownRemark.frontmatter.price}
          data-item-url={
            "https://inspiring-blackwell-7a9dc1.netlify.app/" +
            data.markdownRemark.fields.slug
          }
          data-item-name={data.markdownRemark.frontmatter.name}
          data-item-image={imgsrc}
        >
          Add to cart
        </button>
        <div
          className="markdown mt-4"
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html,
          }}
        ></div>
        {data.markdownRemark.fields.slug === "/products/light-jumper/" ? (
          <ColourSelect changeColour={setColour} getColourName={getColour} />
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        id
        name
        price
        image
      }
      fields {
        slug
      }
    }
  }
`
