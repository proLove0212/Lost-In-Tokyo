const Highlight = props => (
  <span className={'relative highlight highlight-${props.color}'}>
    <span className="relative z-2">{props.children}</span>
  </span>
);

const Intro = () => (
  <div className="m-auto-ns f4 f3-m f2-1 tc w-80-1 normal">
    <div className="mb3 mb4-ns">
      <Highlight color='aqua'>Lost in Tokyo</Highlight> is a directory of fun places to see, play in and <Highlight color='yellow'>explore</Highlight>, in <Highlight color='blue'>Tokyo</Highlight>, Japan.
  </div>
    <div>
      From <Highlight color='blue'>museums</Highlight> and <Highlight color='blue'>galleries</Highlight>, to <Highlight color='pink'>Robot Restaurants</Highlight> and <Highlight color='pink'>kitten cafes</Highlight>, Tokyo is the gift that keeps on giving. <Highlight color='yellow'>Dattebayo!</Highlight>
    </div>
  </div>
);

const Nav = () => (
  <nav>
    <ul>
      <li>About</li>
      <li>Tickets</li>
      <li><img src="../images/logo.svg" /></li>
      <li>Journal</li>
      <li>Contact</li>
    </ul>
  </nav>
)

const App = () => (
  <div>
    <div className="min-vh-100 ph4 flex flex-column">
      {}
      <Intro />
      {}
    </div>
    <div className="flex flex-wrap container">
      {}
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'));
