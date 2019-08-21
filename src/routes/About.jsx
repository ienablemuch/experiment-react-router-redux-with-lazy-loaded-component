import React from "react";
import { connect } from "react-redux";

const About = ({ pathname, search, hash }) => (
    <div>
        This is About
        <br />
        And this is the pathname: {pathname}
    </div>
);

const mapStateToProps = state => ({
    pathname: state.router.location.pathname,
    search: state.router.location.search,
    hash: state.router.location.hash
});

export default connect(mapStateToProps)(About);
