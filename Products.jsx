import React, { useEffect, useState, useRef } from 'react';



export default function Products() {

    const [focusedInput, setFocusedInput] = useState({});
    const [formDataArray, setFormDataArray] = useState(
        [
            {
                "id": 8378585088313,
                "title": "The Videographer Snowboard",
                "body_html": null,
                "vendor": "wajid_test",
                "product_type": "",
                "created_at": "2023-06-15T11:32:47-04:00",
                "handle": "the-videographer-snowboard",
                "updated_at": "2023-10-13T15:33:12-04:00",
                "published_at": "2023-06-15T11:32:48-04:00",
                "template_suffix": null,
                "published_scope": "web",
                "tags": "",
                "status": "active",
                "admin_graphql_api_id": "gid://shopify/Product/8378585088313",
                "variants": [
                    {
                        "id": 45439185322297,
                        "product_id": 8378585088313,
                        "title": "Default Title",
                        "price": "885.95",
                        "sku": "",
                        "position": 1,
                        "inventory_policy": "deny",
                        "compare_at_price": null,
                        "fulfillment_service": "manual",
                        "inventory_management": "shopify",
                        "option1": "Default Title",
                        "option2": null,
                        "option3": null,
                        "created_at": "2023-06-15T11:32:47-04:00",
                        "updated_at": "2023-10-27T16:13:18-04:00",
                        "taxable": true,
                        "barcode": null,
                        "grams": 0,
                        "image_id": null,
                        "weight": 0,
                        "weight_unit": "kg",
                        "inventory_item_id": 47485650239801,
                        "inventory_quantity": 50,
                        "old_inventory_quantity": 50,
                        "requires_shipping": true,
                        "admin_graphql_api_id": "gid://shopify/ProductVariant/45439185322297"
                    }
                ],
                "options": [
                    {
                        "id": 10617452233017,
                        "product_id": 8378585088313,
                        "name": "Title",
                        "position": 1,
                        "values": [
                            "Default Title"
                        ]
                    }
                ],
                "images": [
                    {
                        "id": 41796797923641,
                        "alt": "The top and bottom view of a snowboard. The top has view is turquoise and black with graphics of\n        trees. The bottom view is turquoise with the word hydrogen written in cursive.",
                        "position": 1,
                        "product_id": 8378585088313,
                        "created_at": "2023-06-15T11:32:47-04:00",
                        "updated_at": "2023-06-15T11:32:49-04:00",
                        "admin_graphql_api_id": "gid://shopify/ProductImage/41796797923641",
                        "width": 1600,
                        "height": 1600,
                        "src": "https://picsum.photos/200",
                        "variant_ids": []
                    }
                ],
                "image": {
                    "id": 41796797923641,
                    "alt": "The top and bottom view of a snowboard. The top has view is turquoise and black with graphics of\n        trees. The bottom view is turquoise with the word hydrogen written in cursive.",
                    "position": 1,
                    "product_id": 8378585088313,
                    "created_at": "2023-06-15T11:32:47-04:00",
                    "updated_at": "2023-06-15T11:32:49-04:00",
                    "admin_graphql_api_id": "gid://shopify/ProductImage/41796797923641",
                    "width": 1600,
                    "height": 1600,
                    "src": "https://cdn.shopify.com/s/files/1/0782/0528/8761/files/Main.jpg?v=1686843169",
                    "variant_ids": []
                }
            },
            {
                "id": 8378585343,
                "title": "The Editor",
                "body_html": null,
                "vendor": "wajid_test",
                "product_type": "",
                "created_at": "2023-06-15T11:32:47-04:00",
                "handle": "the-videographer-snowboard",
                "updated_at": "2023-10-13T15:33:12-04:00",
                "published_at": "2023-06-15T11:32:48-04:00",
                "template_suffix": null,
                "published_scope": "web",
                "tags": "",
                "status": "active",
                "admin_graphql_api_id": "gid://shopify/Product/8378585088313",
                "variants": [
                    {
                        "id": 45439185322297,
                        "product_id": 8378585088313,
                        "title": "Default Title",
                        "price": "885.95",
                        "sku": "",
                        "position": 1,
                        "inventory_policy": "deny",
                        "compare_at_price": null,
                        "fulfillment_service": "manual",
                        "inventory_management": "shopify",
                        "option1": "Default Title",
                        "option2": null,
                        "option3": null,
                        "created_at": "2023-06-15T11:32:47-04:00",
                        "updated_at": "2023-10-27T16:13:18-04:00",
                        "taxable": true,
                        "barcode": null,
                        "grams": 0,
                        "image_id": null,
                        "weight": 0,
                        "weight_unit": "kg",
                        "inventory_item_id": 47485650239801,
                        "inventory_quantity": 50,
                        "old_inventory_quantity": 50,
                        "requires_shipping": true,
                        "admin_graphql_api_id": "gid://shopify/ProductVariant/45439185322297"
                    }
                ],
                "options": [
                    {
                        "id": 10617452233017,
                        "product_id": 8378585088313,
                        "name": "Title",
                        "position": 1,
                        "values": [
                            "Default Title"
                        ]
                    }
                ],
                "images": [
                    {
                        "id": 41796797923641,
                        "alt": "The top and bottom view of a snowboard. The top has view is turquoise and black with graphics of\n        trees. The bottom view is turquoise with the word hydrogen written in cursive.",
                        "position": 1,
                        "product_id": 8378585088313,
                        "created_at": "2023-06-15T11:32:47-04:00",
                        "updated_at": "2023-06-15T11:32:49-04:00",
                        "admin_graphql_api_id": "gid://shopify/ProductImage/41796797923641",
                        "width": 1600,
                        "height": 1600,
                        "src": "https://cdn.shopify.com/s/files/1/0782/0528/8761/files/Main.jpg?v=1686843169",
                        "variant_ids": []
                    }
                ],
                "image": {
                    "id": 41796797923641,
                    "alt": "The top and bottom view of a snowboard. The top has view is turquoise and black with graphics of\n        trees. The bottom view is turquoise with the word hydrogen written in cursive.",
                    "position": 1,
                    "product_id": 8378585088313,
                    "created_at": "2023-06-15T11:32:47-04:00",
                    "updated_at": "2023-06-15T11:32:49-04:00",
                    "admin_graphql_api_id": "gid://shopify/ProductImage/41796797923641",
                    "width": 1600,
                    "height": 1600,
                    "src": "https://cdn.shopify.com/s/files/1/0782/0528/8761/files/Main.jpg?v=1686843169",
                    "variant_ids": []
                }
            }
        ]
    );

    


    // const { data, isLoading, isError, error } = useAppQuery({

    //     url: "/api/products",
    //     reactQueryOptions: {
    //         select: (data) => {

    //             const products = [];

    //             console.log("-------------------");
    //             console.log(data.products);

    //             console.log("-------------------");
                    // setFormDataArray(data);
    //             data.products.forEach((product) => {
    //                 products.push({
    //                     id: product.id,
    //                     image: product.image.src,
    //                     title: product.title,
    //                 });
    //             });
   
    //             return products;
    //         }
    //     }
    // });


    const isLoading = false;
    const isError = false;
    const error = false;





    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Add your logic to send formData to Laravel backend here
        console.log('Form data submitted:', formDataArray);
    };



    const selectedResources = [];
    const allResourcesSelected = [];
    // const { selectedResources, allResourcesSelected } = useIndexResourceState(data);

    const handleInputChange = ({ value, id, key }) => {
        setFocusedInput({ id, key });
        setFormDataArray((prevValue) => {
          const rowIndex = prevValue.findIndex((data) => data.id === id);
      
          if (rowIndex !== -1) {
            var updatedData = [...prevValue];
            // Update the specified key in the variant
            updatedData[rowIndex][key] = value;
            return updatedData;
          } else {
            // Handle the case where the row is not found
            const newItem = {
              id: id,
              [key]: value,
              // Add other properties as needed
            };
            const updatedData = [...prevValue, newItem];
            console.error(`Row with id ${id} not found. Adding a new item.`);
            return updatedData;
          }
        });
    };
      



    const Input = ({ id ,value, onChange, placeholder, name, type, min, max }) => {
        const inputRef = useRef(null);

        useEffect(() => {
          if (inputRef.current) {
            if(inputRef.current['name'] === focusedInput['key'] && inputRef.current['id'] == focusedInput['id']){
                inputRef.current.focus();
            }
          }
        }, [value]); // Set focus whenever the value changes
      
        return (
          <>
            <input
              value={value}
              onChange={(e) => {onChange(e)}}
              name={name}
              ref={inputRef}
              type={type || 'text'}
              placeholder={placeholder}
              id={id}
              min={min}
              max={max}
            />
          </>
        );
    };
        
    // ));

    if (isLoading) {
        return <h3>Loading ......</h3>;
    }
    if (isError) {
        return <h3>{error.message}</h3>;
    }

    return (

        <div>
            <form onSubmit={handleFormSubmit}>
                <button type='submit'>submit</button>
                <table>
                {/* <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product Title</th>
                        <th>Discount</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                    </tr>
                </thead> */}
                        <tbody>
                                {formDataArray.map((item, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td><img width={100} height={100} src={item.images['0'].src} /></td>
                                            <td>
                                                <Input
                                                    name={'title'}
                                                    value={item['title']}
                                                    placeholder="Enter Title"
                                                    type="text"
                                                    id={item['id']}
                                                    onChange={(e) =>
                                                        handleInputChange({
                                                            value: e.target.value,
                                                            id: item['id'],
                                                            key: e.target.name,
                                                        })
                                                    }
                                                />
                                            </td>
                                            <td>
                                                <Input
                                                    name={'discount'}
                                                    value={item['discount']}
                                                    placeholder="Enter Discount"
                                                    type="number"
                                                    id={item['id']}
                                                    onChange={(e) =>
                                                        handleInputChange({
                                                            value: e.target.value,
                                                            id: item['id'],
                                                            key: e.target.name,
                                                        })
                                                    }
                                                    min={0}
                                                />
                                            </td>
                                            <td>
                                                <select 
                                                    onChange={(e) => 
                                                        handleInputChange({
                                                            value: e.target.value,
                                                            id: item['id'],
                                                            key: e.target.name,
                                                        })
                                                    }
                                                    name={`discount_type`}
                                                    required
                                                >
                                                    <option value="">Select</option>
                                                    <option value="percentage">Percentage %</option>
                                                    <option value="fix">Fix Price</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input
                                                    onChange={(e) => 
                                                        handleInputChange({
                                                            value: e.target.value,
                                                            id: item['id'],
                                                            key: e.target.name,
                                                        })
                                                    }
                                                    type="date"
                                                    name={`start_date`}
                                                    min={new Date().toJSON().slice(0, 10)}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    onChange={(e) => 
                                                        handleInputChange({
                                                            value: e.target.value,
                                                            id: item['id'],
                                                            key: e.target.name,
                                                        })
                                                    }
                                                    type="date"
                                                    name={`end_date`}
                                                    min={item['start_date']}
                                                />
                                            </td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                </table>    
               
            </form>
        </div>

    );
}


