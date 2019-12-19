const { Schema, model } = require('mongoose');

const serviceSchema = new Schema({
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
    serviceUrl: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: {
            values: [
                'Enterprise', 'Business'],
            message: 'Status is invalid, valid values include [Enterprise, Business].'
        },
    },
});

let Service = model('Service', serviceSchema)

module.exports = Service
module.exports.initialServicesList = () => {
    Service.find({}).then(services => {
        if (services.length > 0) return

        Service.create(
            {
                name: "Maintenance",
                description: "Post-Warranty Enterprise Multi-Vendor Maintenance",
                image: "http://cdn.onlinewebfonts.com/svg/download_96545.png",
                serviceUrl: `(<div className="col-md-12 cms-boxes">
                    <div className="containerTab" id="maintenance" style="display:none;">
                        <span className="closebtn" onclick="this.parentElement.style.display='none'">&times;</span>
                        <h2>Post Warranty Enterprise Multi-Vendor Maintenance</h2>
                        <div className="table-single-cell">
                            <p></p>
                            <h4 style="font-style:unset">With a Bulmag AD maintenance contract, you protect yourself
                                against
                                unplanned additional costs for repairs, support and
                                maintenance, which exceed your budget and can threaten the financing of projects
                            relevant to security.</h4>
                            <p></p>

                            <h5 className="lead-thin">From hardware maintenance and repairs to telephone support and system
                                monitoring, you get everything
                            you need for a smooth data centre. Thereby, your systems are excellently secured.</h5>
                            <p></p>

                            <div className="row row-table">
                                <div className="col-md-4 column text-left"><h3><strong>Server</strong></h3>
                                    <p><span lang="en-GB">The Bulmag AD maintenance contract for hardware combines proactive system maintenance using the Technogroup AG Remotetool and direct access to the expertise of the Technogroup AG knowledge database. This service is complemented by the Auto-Call-System RHS Baseline, which informs the Bulmag AD control centre about hardware failures of server units. Thereby, a&nbsp;Bulmag AD technician fixes the error with the right components before you even noticed the error yourself. Using our service, you profit from an exceptional system reliability that is necessary for smooth operations.</span>
                                    </p></div>
                                <div className="col-md-4 column text-left"><h3><strong>Storage</strong></h3>
                                    <p><span lang="en-GB">When every minute counts, play safe with a Bulmag AD service contract for storage systems. The service specifically designed for business critical storage systems provides integrated support for your storage environment, the associated virtual storage manager and the application software. You can adjust the scope of the contract depending on your desired level of availability. Besides support for storage solutions in large and medium-sized companies, Bulmag AD offers services for SAN infrastructure of all the main manufacturers, especially in heterogeneous system environments – independent of manufacturers.</span>
                                    </p></div>
                                <div className="col-md-4 column text-left"><h3><strong>Network</strong></h3>
                                    <p><span lang="en-GB">A flexible business requires a flexible IT. Your LAN, WAN or SAN infrastructure is crucial for the deployment of your existing applications, processes and services. Establish a higher service level while simultaneously allowing a more reliable, secure and dependable delivery of your data to the user.</span>
                                    </p>
                                    <p><span lang="en-GB">In the age of virtualisation, a dynamic administration of the network configuration is of vital importance. From SAN via LAN to the WAN infrastructure and despite of using small switches or powerful directors, Bulmag AD is your professional service provider for hardware maintenance. Besides Cisco, Brocade and Adva, Bulmag AD supports all major network products.</span>
                                    </p></div>
                            </div>
                            <div style="margin-bottom: 50px;"><h3><strong>Hyper-converged infrastructure</strong></h3>
                                <p>Hyper-converged systems are playing an ever greater role in both public and private
                                clouds.</p>
                                <p>Bulmag AD provides the right service contracts for all-round protection especially
                                    for those components, covering almost all known enterprise brands used for
                                computing, networking, and storage</p></div>
                            <div className="divider">
                                <span></span></div>
                            <div><h3><strong>Flexible SLAs</strong></h3>
                                <p className="lead-thin">The SLAs in Bulmag AD’s maintenance contracts can be selected
                                individually by every company that requires a maximum of IT availability:</p></div>
                        </div>


                    </div>
                </div>)`,
                type: "Enterprise"
            },

        )
    })
}