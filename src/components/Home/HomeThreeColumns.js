import "../../scss/HomeThreeColumns.scss";
import React from "react";

const HomeThreeColumns = () => {
    return (
        <div className="background-color">
            <div className="articles">
                <div className="article">
                    <p className="number">10</p>
                    <p className="article-title">ODDANYCH WORKÓW</p>
                    <p className="article-t">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
                        enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className="article">
                    <p className="number">5</p>
                    <p className="article-title">WSPARTYCH ORGANIZACJI</p>
                    <p className="article-t">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
                        enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className="article">
                    <p className="number">7</p>
                    <p className="article-title">ZORGANIZOWANYCH ZBIÓREK</p>
                    <p className="article-t">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
                        enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>

            </div>

        </div>
    )
};

export default HomeThreeColumns;