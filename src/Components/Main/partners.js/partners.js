import React from "react";

import "./partners.css"

const PartnersComponent = () => {
    return (
        <section className="partner_one">
            <div className="sec_one">
                <h2 className="h2_tag">
                    Trusted by 2000+ <br />
                    Companies Worldwide
                </h2>
            </div>
            <div className="sec_two">
                <img
                    className="images"
                    src="https://www.nicepng.com/png/detail/880-8808596_png-file-svg-google-black-and-white-logo.png"
                ></img>

                <img
                    className="images"
                    src="https://p.kindpng.com/picc/s/29-297023_netflix-logo-png-black-banner-black-and-white.png"
                ></img>

                <img
                    className="images"
                    src="https://www.pngitem.com/pimgs/m/132-1322127_airbnb-logo-white-png-transparent-png.png"
                ></img>

                <img
                    className="images"
                    src="https://www.citypng.com/public/uploads/preview/-11596307623br3hlq9vjt.png"
                ></img>
            </div>
        </section>
    )
}

export default PartnersComponent