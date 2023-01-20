const React = require('react')

class Show extends React.Component {
    render() {
        const { makeup } = this.props
        console.log(this.props)
        return(

            <div>
                <h1> Find All The Makeup</h1>
                <h2>{makeup.name.charAt(0).toUpperCase() + makeup.name.slice(1)}</h2>
                <img src={'http://img.pokemondb.net/artwork/' + makeup.name.toLowerCase() + ".jpg"} ></img>
                <a href='/makeup/new'>Find a New <Makeup></Makeup></a> | <a href="/makeup">Back to Found Makeup</a>
            </div>
        )
    }
}

module.exports = Show