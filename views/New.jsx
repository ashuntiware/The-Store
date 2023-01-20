const React = require('react')

class New extends React.Component{render() {
    return (
        <div>
            <h1>Find New Makeup</h1>
            <form action='/makeup' method='POST'>
                Name: <input type='text' name='name'/>
                <br />
                <input type='submit' name='' value='Find Makeup'/>
            </form>
            <a href="/makeup">Back to Makeup</a>
        </div>
    );
}
}

module.exports = New;