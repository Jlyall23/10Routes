const React = require('react');

    class Index extends React.Component {
      render() {
          const { football } = this.props;
          return (
                  <div>
                      <h1>NFL Page</h1>
                      <ul>
                          {football.map((football, i) => {
                              return (
                                  <li>
                                      The{' '} 
                                     {football.Team}
                                      {' '}
                                      are from the {football.Conference}  {' '}
                                      and there colors are {football.Colors}
                                    </li>
                              );
                          })}
                      </ul>
  
                  </div>
          );
      }
    }
    module.exports = Index;