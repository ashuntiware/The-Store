const React = require('react')
class Index extends React.Component {
    render() {
      const { allMakeup } = this.props;
      return (
        <div>
          <h1>The Makeup Store</h1>
          <nav>
            <a href="/makeup/New">Create a New Makeup</a>
          </nav>
          <ul>
            {allMakeup.map((makeup, i) => {
              return (
                <li> {/*inserted the form and like for deleting pokemon */}
                  <a href={`/makeup/${makeup._id}/edit`}>Edit</a> 
                  
                  <form
                    action={`/makeup/${makeup._id}?_method=DELETE`}
                    method="POST"
                  >
                    <br /><br /> <br /><br />
                    <input type="submit" value="DELETE" />
                  </form>
  
                  <a href={`/makeup/${makeup.id}`}>
                    {" "}
                    {makeup.name.charAt(0).toUpperCase() + makeup.name.slice(1)}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }
  
  module.exports = Index;