import React from 'react'

import Movie from '../../views/Movie'


class Home extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
        }
    }

    componentWillUnmount() {
        // you need to unbind the same listener that was binded.
        window.removeEventListener('scroll', this.infiniteScroller, false);
    }

    render () {
        return (
            <section className="container main home">
                <header className="row">
                    <div className="col-12">
                        <h1>Coming Soon</h1>
                    </div>
                </header>
                    <Movie
                    />
            </section>
        )
    }
}

export default Home

