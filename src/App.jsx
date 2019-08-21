import React, { Suspense, lazy } from "react";
import "./App.css";

import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const Home = lazy(() => import("./routes/Home" /* webpackChunkName: 'home' */));
const About = lazy(() =>
    import("./routes/About" /* webpackChunkName: 'about' */)
);

function App({ pathname, search, hash }) {
    return (
        <div className="App">
            <table>
                <tbody>
                    <tr>
                        <td>Pathname</td>
                        <td>{pathname}</td>
                    </tr>
                    <tr>
                        <td>Search</td>
                        <td>{search}</td>
                    </tr>
                    <tr>
                        <td>Hash</td>
                        <td>{hash}</td>
                    </tr>
                </tbody>
            </table>
            <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
            <Link to="/qwerty">Qwerty</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route render={() => <div>Miss</div>} />
                </Switch>
            </Suspense>
        </div>
    );
}

const mapStateToProps = state => ({
    pathname: state.router.location.pathname,
    search: state.router.location.search,
    hash: state.router.location.hash
});

export default connect(mapStateToProps)(App);
