const React = require('react');

    class BasketballIndex extends React.Component {
      render() {
          const { basketball } = this.props;
          return (
                  <div>
                      <h1>NBA Page</h1>
                      <ul>
                          {basketball.map((basketball, i) => {
                              return (
                                  <li>
                                      The{' '} 
                                     {basketball.Team}
                                      {' '}
                                      are from the {basketball.Conference}  {' '}
                                      and there colors are {basketball.Colors}
                                    </li>
                              );
                          })}
                      </ul>
  
                  </div>
          );
      }
    }
    module.exports = BasketballIndex;