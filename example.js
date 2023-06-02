const fs = require("fs");
const path = require("path");
const { html_to_pdf } = require(".");

try {
    (async () => {
        const dataBinding = {
            boxes: [
                {
                    length: 534,
                    breadth: 53,
                    width: 54,
                },
                {
                    length: 43,
                    breadth: 543,
                    width: 543,
                },
                {
                    length: 321,
                    breadth: 99,
                    width: 53,
                },
                {
                    length: 32,
                    breadth: 32,
                    width: 23,
                },
                {
                    length: 64,
                    breadth: 99,
                    width: 12,
                },
                {
                    length: 565,
                    breadth: 45,
                    width: 99,
                },
                {
                    length: 99,
                    breadth: 99,
                    width: 99,
                },
                {
                    length: 4,
                    breadth: 566,
                    width: 776,
                },
                {
                    length: 65,
                    breadth: 76,
                    width: 99,
                },
                {
                    length: 786,
                    breadth: 54,
                    width: 45,
                },
                {
                    length: 54,
                    breadth: 99,
                    width: 56,
                },
                {
                    length: 999,
                    breadth: 99,
                    width: 999,
                },
                {
                    length: 99,
                    breadth: 65,
                    width: 99,
                },
                {
                    length: 43,
                    breadth: 999,
                    width: 498,
                },
                {
                    length: 34,
                    height: 765,
                    width: 45,
                },
                {
                    length: 99,
                    breadth: 23,
                    width: 554,
                },
                {
                    length: 999,
                    breadth: 234,
                    width: 939,
                },
                {
                    length: 999,
                    breadth: 34,
                    width: 99,
                },
                {
                    length: 999,
                    breadth: 99,
                    width: 999,
                },
                {
                    length: 99,
                    breadth: 999,
                    width: 999,
                },
                {
                    length: 999,
                    breadth: 43,
                    width: 99,
                },
                {
                    length: 99,
                    breadth: 999,
                    width: 43,
                },
                {
                    length: 999,
                    breadth: 322,
                    width: 999,
                },
                {
                    length: 999,
                    breadth: 999,
                    width: 99,
                },
                {
                    length: 999,
                    breadth: 999,
                    width: 999,
                },
            ],
            invoice_number: "7732bg23efsa38",
            date: "16/12/2023",
            payment_terms_label: "Due On Receipt",
            due_date: "23/12/2022",
            reference_number: 38495743584,
            payment_mode: "Cash",
            place_of_supply: "MH",
            supplier_details: {
                supplier_name: "Merhaki Foods and Nutrition Private Limited",
                gst_no: "27AABCR1718E1ZP",
                billing_address: {
                    street: " 3rd, 4th Floor, 9/1. 9th Main, Sector 6, HSR Layout, HSR Layout,Bengaluru (Bangalore) Urban, Karnataka 560102, India,",
                    city: "Maharashtra",
                    country: "India",
                },
            },
            customer_details: {
                billing_address: {
                    name: "Reliance Retail Limited",
                    street: " CTS no F 1079 Plot no 86 1st 2nd 3rd and 4th Floor,",
                    city: "Maharashtra",
                    country: "India",
                    gst_no: "27AABCR1718E1ZP",
                },
                shipping_address: {
                    name: "Reliance Retail Limited",
                    street: " CTS no F 1079 Plot no 86 1st 2nd 3rd and 4th Floor,",
                    city: "Maharashtra",
                    country: "India",
                    gst_no: "27AABCR1718E1ZP",
                },
            },
            transporter: {
                name: "XpressBess",
                vehicle_number: "Up14 BM0567",
                dispatch_number: "98765432168",
                eway_bill: "721318345301",
                box_number: 100,
                shipment_weight: "1000Kg",
            },
            items: [
                {
                    index: 1,
                    img_url:
                        "https://molly-prod.s3.ap-south-1.amazonaws.com/1668479250897_Teal.png",
                    name: "Yellow Chimes Earrings (YCFJER- 05HOPDNG-GL)1000000053112 Yellow Chimes",
                    sku: "71171990",
                    ean: "8904387252224",
                    hsn_or_sac: 71171990,
                    quantity: 321,
                    rate: 76523,
                    cgst_rate: "24.6%",
                    sgst_rate: "30.4%",
                    gst: "234",
                    igst_rate: "33.3%",
                    igst: 1703,
                    item_total: 25000,
                },
                {
                    index: 2,
                    img_url:
                        "https://molly-prod.s3.ap-south-1.amazonaws.com/1668479250897_Teal.png",
                    name: "Yellow Chimes Earrings (YCFJER- 05HOPDNG-GL)1000000053112 Yellow Chimes",
                    sku: "71171990",
                    hsn_or_sac: 71171990,
                    ean: "8904387252224",
                    quantity: 345,
                    rate: 5345,
                    cgst_rate: "24.6%",
                    sgst_rate: "30.4%",
                    gst: "234",
                    igst_rate: "99.3%",
                    igst: 2342,
                    item_total: 23423,
                },
                {
                    index: 3,
                    img_url:
                        "https://molly-prod.s3.ap-south-1.amazonaws.com/1668479250897_Teal.png",
                    name: "Yellow Chimes Earrings (YCFJER- 05HOPDNG-GL)1000000053112 Yellow Chimes",
                    sku: "71171990",
                    hsn_or_sac: 71171990,
                    ean: "8904387252224",
                    quantity: 345,
                    rate: 5345,
                    cgst_rate: "24.6%",
                    sgst_rate: "30.4%",
                    gst: "234",
                    igst_rate: "99.3%",
                    igst: 2342,
                    item_total: 23423,
                },
                {
                    index: 4,
                    img_url:
                        "https://molly-prod.s3.ap-south-1.amazonaws.com/1668479250897_Teal.png",
                    name: "Yellow Chimes Earrings (YCFJER- 05HOPDNG-GL)1000000053112 Yellow Chimes",
                    sku: "71171990",
                    hsn_or_sac: 71171990,
                    ean: "8904387252224",
                    quantity: 345,
                    rate: 5345,
                    cgst_rate: "24.6%",
                    sgst_rate: "30.4%",
                    gst: "234",
                    igst_rate: "99.3%",
                    igst: 2342,
                    item_total: 23423,
                },
                {
                    index: 5,
                    img_url:
                        "https://molly-prod.s3.ap-south-1.amazonaws.com/1668479250897_Teal.png",
                    name: "Yellow Chimes Earrings (YCFJER- 05HOPDNG-GL)1000000053112 Yellow Chimes",
                    sku: "71171990",
                    hsn_or_sac: 71171990,
                    ean: "8904387252224",
                    quantity: 345,
                    rate: 5345,
                    cgst_rate: "24.6%",
                    sgst_rate: "30.4%",
                    gst: "234",
                    igst_rate: "99.3%",
                    igst: 2342,
                    item_total: 23423,
                },
                {
                    index: 6,
                    img_url:
                        "https://molly-prod.s3.ap-south-1.amazonaws.com/1668479250897_Teal.png",
                    name: "Yellow Chimes Earrings (YCFJER- 05HOPDNG-GL)1000000053112 Yellow Chimes",
                    sku: "71171990",
                    hsn_or_sac: 71171990,
                    ean: "8904387252224",
                    quantity: 345,
                    rate: 5345,
                    cgst_rate: "24.6%",
                    sgst_rate: "30.4%",
                    gst: "234",
                    igst_rate: "99.3%",
                    igst: 2342,
                    item_total: 23423,
                },
            ],
            sub_total: 252324.89,
            tax_total: 7364.78,
            shipping_charges: 87544.53,
            total: 2834732.34,
            balance_due: 837.54,
            total_quantity: 3212.0,
            irn_img:
                "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.techinasia.com%2Fwp-content%2Fuploads%2F2010%2F11%2Fqrcode1.png&tbnid=jnM6dFH6ov1GAM&vet=12ahUKEwjSmOPEyqT_AhU223MBHaEACVgQMygMegUIARCDAg..i&imgrefurl=https%3A%2F%2Fwww.techinasia.com%2Fqr-codes-social-marketing-2&docid=nui7L0bKf6IdrM&w=234&h=234&q=random%20qr%20image&ved=2ahUKEwjSmOPEyqT_AhU223MBHaEACVgQMygMegUIARCDAg",
            irn: "83517da0b7acdec370e8eeb27fe31dfe3921884916ebbb6c0ac16813cd793ca5",
            ack_no: "112315087713663",
            ack_date: "2023-01-16 10:50:00",
            total_amount_in_words:
                "Indian Rupee Three Hundred Twelve and Twelve Paise Only.",
            total: 600,
            notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a mauris at nulla pretium hendrerit. Mauris erat neque, vehicula at cursus eget, eleifend ac purus",
            terms: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a mauris at nulla pretium hendrerit. Mauris erat neque, vehicula at cursus eget, eleifend ac purus",
            isWatermark: true,
        };

        const templateHtml = fs.readFileSync(
            path.join(process.cwd(), "invoice.html"),
            "utf8"
        );

        const options = {
            format: "A4",
            headerTemplate: "<p></p>",
            footerTemplate: "<p></p>",
            displayHeaderFooter: false,
            // margin: {
            //     top: "40px",
            //     bottom: "100px",
            // },
            printBackground: true,
            path: "invoice.pdf",
        };

        await html_to_pdf({ templateHtml, dataBinding, options });

        console.log("Done: invoice.pdf is created!");
    })();
} catch (err) {
    console.log("ERROR:", err);
}
