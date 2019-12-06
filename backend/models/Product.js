const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    productUrl: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: [
            'HW', 'Banking', 'HCI'
        ]
    },
});

let Product = model('Product', productSchema)

module.exports = Product
module.exports.initialList = () => {
    Product.find({}).then(products => {
        if (products.length > 0) return


        Product.create(

            {
                name: "Vibbek",
                description: "Cloud-based TMS",
                image:
                    "https://tr-sys.com/wp-content/themes/trsys/assets/img/partners/sw-solution-providers/vibbek.png",
                productUrl: "https://www.vibbek.com/en/product/",
                type: "Banking"
            },
            {
                name: "INFINIDAT",
                description: "Multi-Petabyte Storages",
                image:
                    "https://marketplace.vmware.com/resources/apps/infinibox__1546010338411.png",
                productUrl:
                    "https://marketplace.vmware.com/vsx/solutions/infinibox?ref=related",
                type: "HW"
            },
            {
                name: "Lenovo",
                description: "ThinkSystem Servers",
                image:
                    "https://www.lenovo.com/medias/lenovo-data-center-rack-server-thinksystem-sr860-subseries-hero.png?context=bWFzdGVyfHJvb3R8MTExMTg3fGltYWdlL3BuZ3xoMmMvaDViLzk1ODYwOTQxMTI3OTgucG5nfDkzMzU1ZTM0NDViNDMxMDczMjBhNzYwODkzZjU3MzA3YTdkOGJjNzc2Yzk0ZWRhNjZmZWVjNjUwMzMwNDg3Mzc",
                productUrl:
                    "https://www.lenovo.com/us/en/data-center/servers/c/servers",
                type: "HW"
            },
            {
                name: "Lenovo",
                description: "ThinkSystem Storages",
                image:
                    "https://www.lenovo.com/medias/lenovo-data-center-storage-san-thinksystem-de-hybrid-subseries-hero.png?context=bWFzdGVyfHJvb3R8MTA2MzQ4fGltYWdlL3BuZ3xoZDkvaGNhLzk4MTYyOTU2MDQyNTQucG5nfDg4YjY1MmZhMTRkMjAyZDk1ZmNhYTdmODE2NmMzZjdjNDIzZmM4MWJiNjM2YTdmZTEzNmVlZmRjOTFlM2VmMDc",
                productUrl:
                    "https://www.lenovo.com/us/en/data-center/storage/c/storage",
                type: "HW"
            },
            {
                name: "OpenWay",
                description: "Payment Processing SW",
                image:
                    "https://images.glints.com/unsafe/1024x0/glints-dashboard.s3.amazonaws.com/company-logo/2daa178c42ec2ea9b274430807f107a7.png",
                productUrl: "https://www.openwaygroup.com/",
                type: "Banking"
            },
            {
                name: "VX Series VMware",
                description: "VMware HCI Appliance",
                image:
                    "https://www3.lenovo.com/medias/lenovo-data-center-thinkagile-vx-series-subseries-hero.png?context=bWFzdGVyfHJvb3R8MTA2NjAzfGltYWdlL3BuZ3xoM2UvaDRiLzk2ODM3OTc2MzkxOTgucG5nfGNlNzQxOTA1NzMwMWFlZWUxZmRkOWEyMDU3OGIyMWMyYmM4NjM0YzkzYjA5NThmNDkwNzIwMzNhMGZmOWNlY2U",
                productUrl: "https://www.lenovo.com/us/en/data-center/software-defined-infrastructure/ThinkAgile-VX-Series/p/WMD00000340",
                type: "HCI"
            },
            {
                name: "HX Series Nutanix",
                description: "Nutanix HCI Appliance",
                image:
                    "https://www.lenovo.com/medias/lenovo-converged-systems-hx-series-subseries-hero.png?context=bWFzdGVyfHJvb3R8OTMxODR8aW1hZ2UvcG5nfGgxOS9oYTMvOTMxMTUxMzAxODM5OC5wbmd8OTFmN2RmNzMxNGFlNzJjNTRmMWI2MjE2YTg4NWFkYWYwMjgzOGM0OWE3ZmY2N2FiMDcxMmRlYzlhMzk2MzZjMA",
                productUrl: "https://www.lenovo.com/us/en/data-center/software-defined-infrastructure/ThinkAgile-HX-Series/p/WMD00000326",
                type: "HCI"
            },
            {
                name: "CP Series",
                description: "Customizable Cloud Solution",
                image:
                    "https://static.lenovo.com/ww/img/data-center/uberflip/sdi/lenovo-data-center-software-defined-infrastructure-thinkagile-cp-series.png",
                productUrl: "https://www.lenovo.com/us/en/data-center/software-defined-infrastructure/ThinkAgile-CP-Series/p/WMD00000362",
                type: "HCI"
            },
            {
                name: "SX Series Microsoft",
                description: "Hybrid Cloud",
                image:
                    "https://www.lenovo.com/medias/lenovo-software-defined-infrastructure-thinkagile-microsoft-azure-stack-subseries-hero.png?context=bWFzdGVyfHJvb3R8NjM1MDR8aW1hZ2UvcG5nfGhkYS9oMGUvOTU5NDUyMTk3Njg2Mi5wbmd8NWNhY2Q0YmEyMzE2NjkwODA2MzIzMzg3ZTQxZjllY2QzNjM5M2ZmNzlkZTdkNjFiNjlhYjM4YzUxNzI1YTE3Yg",
                productUrl: "https://www.lenovo.com/us/en/data-center/software-defined-infrastructure/ThinkAgile-SX-for-Microsoft-Azure-Stack/p/WMD00000272",
                type: "HCI"
            }

        )
    })
}