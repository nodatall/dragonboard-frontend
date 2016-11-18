import React, { Component } from 'react'
import NavMenu from './NavMenu'
import '../styles/home_nav.css'

class HomeNav extends Component {
  render () {
    return (
      <nav className="home-nav clearfix">
        <div className="nav-container">
          <div className="home-nav-left">
            <a className="logo" href="#">
              <div className="logo-green-square">
                <div>D</div>
              </div>
              <img className="logo-type" src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOTAuNjUgMjUuNDkiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48dGl0bGU+VW50aXRsZWQtMjwvdGl0bGU+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMS4zNywxLjg3SDYuNzlhMTQuODIsMTQuODIsMCwwLDEsNiwxLjA4LDExLjU1LDExLjU1LDAsMCwxLDQsMi43OEExMC40NiwxMC40NiwwLDAsMSwxOSw5LjU0YTEzLjQsMTMuNCwwLDAsMSwuNjksNC4xNywxMS42LDExLjYsMCwwLDEtLjk1LDQuNzcsMTEsMTEsMCwwLDEtNi4yNyw1LjkzLDEyLjY3LDEyLjY3LDAsMCwxLTQuNTEuOEgxLjM3Wk03LjcxLDIzLjA4YTExLDExLDAsMCwwLDMuODEtLjY1LDkuMTYsOS4xNiwwLDAsMCwzLjEtMS44OCw4LjYzLDguNjMsMCwwLDAsMi4wOC0zLDEwLjA5LDEwLjA5LDAsMCwwLC43NS00LDEwLDEwLDAsMCwwLS43LTMuNzcsOC43MSw4LjcxLDAsMCwwLTItMyw5LjUzLDkuNTMsMCwwLDAtMy4xNC0yQTExLDExLDAsMCwwLDcuNDgsNEgzLjYyVjIzLjA4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuMzcgLTAuOCkiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yOS4zNywyNS4yMVYxLjg3SDM1YTkuOTEsOS45MSwwLDAsMSwyLjg0LjQxQTcuMSw3LjEsMCwwLDEsNDAuMywzLjU0LDYuMjcsNi4yNywwLDAsMSw0Miw1LjY3YTYuNzMsNi43MywwLDAsMSwuNjQsMyw4LjIzLDguMjMsMCwwLDEtLjg4LDMuNzMsNS45MSw1LjkxLDAsMCwxLTIuOTEsMi43MWwuNzgsMS4zMSwxLjA4LDEuNzgsMS4yMywyLDEuMjMsMkw0NC4yNCwyNCw0NSwyNS4yMUg0Mi4zMXEtLjI2LS4zOS0uNjktMS4wOGwtLjk1LTEuNTQtMS4xMS0xLjgtMS4xNC0xLjg2TDM3LjM2LDE3LjJsLS44Ny0xLjRhMy41LDMuNSwwLDAsMS0uNjkuMDZIMzEuNTl2OS4zNVptMi4yMi0xMS40N2gzLjQ2YTUuODIsNS44MiwwLDAsMCwyLjYxLS41Miw0Ljc3LDQuNzcsMCwwLDAsMS42NS0xLjI5LDQuNyw0LjcsMCwwLDAsLjg1LTEuNjMsNS44Nyw1Ljg3LDAsMCwwLC4yNS0xLjU4QTQuNTksNC41OSwwLDAsMCw0MC4wOCw3YTQuNjYsNC42NiwwLDAsMC0xLTEuNTIsNC44MSw0LjgxLDAsMCwwLTEuNjctMS4wOEE2LjE3LDYuMTcsMCwwLDAsMzUuMDksNGgtMy41WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuMzcgLTAuOCkiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02OC44NSwyNS4yMXEtLjY1LTEuNS0xLjU0LTMuNjl0LTEuODMtNC42NGgtOXEtLjk1LDIuNDUtMS44Myw0LjY0dC0xLjU0LDMuNjlINTAuOTRsMS4zMS0zLjEycS44Mi0xLjk0LDEuNzYtNC4yNkw1NiwxM2wyLTQuODJxLjk1LTIuMzIsMS43NS00LjI1VDYxLC44UTYxLjUsMiw2Mi4zMSwzLjkzdDEuNzYsNC4yNWwyLDQuODIsMiw0LjgyLDEuNzUsNC4yNnEuOCwxLjk0LDEuMzIsMy4xMlpNNjAuNjgsNi41MlE2MCw4LjA1LDU5LjEzLDEwLjI3dC0xLjg1LDQuNjdoNy40NWwtMS44Ni00LjY3UTYyLDguMDUsNjEuMzMsNi41MmEzLjIyLDMuMjIsMCwwLDEtLjE2LS40NHEtLjEtLjMxLS4xNi0uNTctLjA3LjI2LS4xNi41N0EzLjM2LDMuMzYsMCwwLDEsNjAuNjgsNi41MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xLjM3IC0wLjgpIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNOTUuNjUsMTQuNTJWMjMuOGExMS45MSwxMS45MSwwLDAsMS0zLDEuMjMsMTQuMTMsMTQuMTMsMCwwLDEtMy41Ni40NCwxMywxMywwLDAsMS01LS45LDExLjExLDExLjExLDAsMCwxLTMuNzYtMi40NywxMSwxMSwwLDAsMS0yLjQtMy42OSwxMi4yLDEyLjIsMCwwLDEtLjg1LTQuNTgsMTIuMTgsMTIuMTgsMCwwLDEsMy41OC04Ljc2LDExLjkxLDExLjkxLDAsMCwxLDMuODYtMi41NSwxMiwxMiwwLDAsMSw0LjY2LS45MkExNCwxNCwwLDAsMSw5Mi41NiwyYTEwLjg0LDEwLjg0LDAsMCwxLDMuMDYsMS4yNEw5NC41LDUuMTFhOS40MSw5LjQxLDAsMCwwLTIuNTMtMSwxMS4yOCwxMS4yOCwwLDAsMC0yLjgzLS4zOCw5LjI2LDkuMjYsMCwwLDAtMy43Ny43OCwxMC4zNiwxMC4zNiwwLDAsMC0zLjE0LDIuMTIsOS44Nyw5Ljg3LDAsMCwwLTIuMTQsMy4xNyw5Ljc3LDkuNzcsMCwwLDAtLjc4LDMuODlBMTAsMTAsMCwwLDAsODAsMTcuNGE5LjQzLDkuNDMsMCwwLDAsMiwzLjA5LDkuMjUsOS4yNSwwLDAsMCwzLjA3LDIuMDksMTAsMTAsMCwwLDAsNCwuNzcsMTEuMjgsMTEuMjgsMCwwLDAsMi4yNy0uMjUsMTAuNjcsMTAuNjcsMCwwLDAsMi4yNy0uNzRWMTYuNDhoLTV2LTJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS4zNyAtMC44KSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEwNC4wOCwxMy41N0ExMS42MSwxMS42MSwwLDAsMSwxMDUsOC45NWExMiwxMiwwLDAsMSw2LjM0LTYuMzksMTEuNzksMTEuNzksMCwwLDEsOS4yNiwwLDEyLDEyLDAsMCwxLDMuODEsMi41OEExMi40MiwxMi40MiwwLDAsMSwxMjcsOC45NWExMS43NiwxMS43NiwwLDAsMSwwLDkuMjVBMTIuMjEsMTIuMjEsMCwwLDEsMTI0LjQyLDIyYTExLjk0LDExLjk0LDAsMCwxLTMuODEsMi41NSwxMiwxMiwwLDAsMS05LjI2LDBBMTEuODgsMTEuODgsMCwwLDEsMTA1LDE4LjIsMTEuNjEsMTEuNjEsMCwwLDEsMTA0LjA4LDEzLjU3Wm0yLjIyLDBhOS41Miw5LjUyLDAsMCwwLC43NywzLjgxLDEwLDEwLDAsMCwwLDIuMDgsMy4xLDkuNzIsOS43MiwwLDAsMCwzLjA3LDIuMDksOS4zMSw5LjMxLDAsMCwwLDMuNzYuNzcsOS40Myw5LjQzLDAsMCwwLDMuNzctLjc3LDkuNzgsOS43OCwwLDAsMCw1LjItNS4yLDkuODIsOS44MiwwLDAsMCwwLTcuNjEsMTAuMDgsMTAuMDgsMCwwLDAtMi4wOS0zLjEyLDkuNzMsOS43MywwLDAsMC0zLjEtMi4xMUE5LjQ0LDkuNDQsMCwwLDAsMTE2LDMuNzdhOS4yOCw5LjI4LDAsMCwwLTMuNzcuNzcsOS44Miw5LjgyLDAsMCwwLTUuMTUsNS4yM0E5LjY5LDkuNjksMCwwLDAsMTA2LjMsMTMuNTdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS4zNyAtMC44KSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE1Ny40NSwxLjg3VjI2LjI5cS0uOTUtMS4xNC0yLjM0LTIuNzN0LTMtMy4zOGwtMy4zMy0zLjY4cS0xLjcyLTEuODgtMy4zMi0zLjY4dC0yLjkzLTMuMzVxLTEuMzItMS41NS0yLjE3LTIuN2wtLjI5LS4zOC0uMzYtLjQ3LjEsMVYyNS4yMWgtMi4yMlYuOHEuOTUsMS4yMSwyLjMyLDIuNzh0MywzLjMzbDMuMzIsMy42MywzLjI4LDMuNjFxMS41OCwxLjc1LDMsMy4zdDIuMjUsMi43YTEuNzUsMS43NSwwLDAsMCwuMjYuNDFsLjM2LjQ3LS4xLTEuMDhWMS44N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xLjM3IC0wLjgpIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTY4LjgyLDI1LjIxVjEuODdoNS40NmExMi4zOCwxMi4zOCwwLDAsMSwzLC4zMyw2LjE1LDYuMTUsMCwwLDEsMi4yNywxQTQuNjYsNC42NiwwLDAsMSwxODEsNS4xMWE2Ljg0LDYuODQsMCwwLDEsLjUxLDIuNzgsOC4xOCw4LjE4LDAsMCwxLS4yLDEuODEsNS43LDUuNywwLDAsMS0uNjIsMS42LDQuNDMsNC40MywwLDAsMS0xLjExLDEuMjcsNSw1LDAsMCwxLTEuNy44Myw3LjcsNy43LDAsMCwxLDEuNzguNjIsNS41NSw1LjU1LDAsMCwxLDEuNTQsMS4xMSw1LjI5LDUuMjksMCwwLDEsMS4wOCwxLjY1LDUuNyw1LjcsMCwwLDEsLjQxLDIuMjQsNS44MSw1LjgxLDAsMCwxLS42MiwyLjc1LDUuNTYsNS41NiwwLDAsMS0xLjY1LDEuOTNBNy4zMyw3LjMzLDAsMCwxLDE3OCwyNC44M2ExMC4yMiwxMC4yMiwwLDAsMS0yLjc4LjM4Wk0xNzEsMy45djguNkgxNzVhNCw0LDAsMCwwLDMuMi0xLjI2LDQuNzIsNC43MiwwLDAsMCwxLjA4LTMuMTksMy43MSwzLjcxLDAsMCwwLTEuMzEtMy4xNyw1LjUyLDUuNTIsMCwwLDAtMy40LTFabTAsMTAuNTJ2OC43Nmg0YTcuNjQsNy42NCwwLDAsMCwyLjA5LS4yOCw1LjMxLDUuMzEsMCwwLDAsMS43Mi0uODJBMy44NywzLjg3LDAsMCwwLDE4MCwyMC43M2E0LjA1LDQuMDUsMCwwLDAsLjQyLTEuOSw0LDQsMCwwLDAtLjQ5LTIsMy45LDMuOSwwLDAsMC0xLjMyLTEuMzcsNi4xNSw2LjE1LDAsMCwwLTEuOS0uNzcsOS42NSw5LjY1LDAsMCwwLTIuMTctLjI0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuMzcgLTAuOCkiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xOTAuNzgsMTMuNTdhMTEuNjMsMTEuNjMsMCwwLDEsLjkzLTQuNjJBMTIuMDUsMTIuMDUsMCwwLDEsMTk4LDIuNTZhMTEuNDUsMTEuNDUsMCwwLDEsNC42Mi0uOTUsMTEuNTcsMTEuNTcsMCwwLDEsNC42NC45NSwxMiwxMiwwLDAsMSwzLjgxLDIuNTgsMTIuMzksMTIuMzksMCwwLDEsMi41NywzLjgxLDExLjc1LDExLjc1LDAsMCwxLDAsOS4yNUExMi4xOSwxMi4xOSwwLDAsMSwyMTEuMTIsMjJhMTEuOTMsMTEuOTMsMCwwLDEtMy44MSwyLjU1LDExLjczLDExLjczLDAsMCwxLTQuNjQuOTMsMTEuNjEsMTEuNjEsMCwwLDEtNC42Mi0uOTMsMTEuODksMTEuODksMCwwLDEtNi4zNC02LjM0QTExLjYzLDExLjYzLDAsMCwxLDE5MC43OCwxMy41N1ptMi4yMiwwYTkuNSw5LjUsMCwwLDAsLjc3LDMuODEsMTAsMTAsMCwwLDAsMi4wOCwzLjEsOS43Miw5LjcyLDAsMCwwLDMuMDcsMi4wOSw5LjMyLDkuMzIsMCwwLDAsMy43Ni43Nyw5LjQzLDkuNDMsMCwwLDAsMy43Ny0uNzcsOS43OCw5Ljc4LDAsMCwwLDUuMi01LjIsOS44Myw5LjgzLDAsMCwwLDAtNy42MSwxMC4wOSwxMC4wOSwwLDAsMC0yLjA5LTMuMTIsOS43Myw5LjczLDAsMCwwLTMuMS0yLjExLDkuNDQsOS40NCwwLDAsMC0zLjc3LS43Nyw5LjI4LDkuMjgsMCwwLDAtMy43Ny43Nyw5LjgyLDkuODIsMCwwLDAtNS4xNSw1LjIzQTkuNyw5LjcsMCwwLDAsMTkzLDEzLjU3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuMzcgLTAuOCkiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yMzguNTIsMjUuMjFxLS42NS0xLjUtMS41NC0zLjY5dC0xLjgzLTQuNjRoLTlxLS45NSwyLjQ1LTEuODMsNC42NHQtMS41NCwzLjY5aC0yLjIybDEuMzEtMy4xMnEuODItMS45NCwxLjc2LTQuMjZsMi00LjgyLDItNC44MnEuOTUtMi4zMiwxLjc1LTQuMjVUMjMwLjY4LjhRMjMxLjE3LDIsMjMyLDMuOTN0MS43Niw0LjI1bDIsNC44MiwyLDQuODIsMS43NSw0LjI2cS44LDEuOTQsMS4zMiwzLjEyWk0yMzAuMzUsNi41MnEtLjY1LDEuNTQtMS41NSwzLjc2VDIyNywxNC45NWg3LjQ1bC0xLjg2LTQuNjdxLS44OC0yLjIyLTEuNTQtMy43NmEzLjI2LDMuMjYsMCwwLDEtLjE2LS40NHEtLjEtLjMxLS4xNi0uNTdjMCwuMTctLjEuMzctLjE2LjU3QTMuMjYsMy4yNiwwLDAsMSwyMzAuMzUsNi41MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xLjM3IC0wLjgpIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjQ5LjI4LDI1LjIxVjEuODdoNS42NWE5LjkxLDkuOTEsMCwwLDEsMi44NC40MSw3LjEsNy4xLDAsMCwxLDIuNDMsMS4yNiw2LjI3LDYuMjcsMCwwLDEsMS43LDIuMTIsNi43Myw2LjczLDAsMCwxLC42NCwzLDguMjIsOC4yMiwwLDAsMS0uODgsMy43Myw1LjkxLDUuOTEsMCwwLDEtMi45MSwyLjcxbC43OCwxLjMxLDEuMDgsMS43OCwxLjIzLDIsMS4yMywyTDI2NC4xNSwyNGwuNzgsMS4yNGgtMi43MXEtLjI2LS4zOS0uNjktMS4wOGwtLjk1LTEuNTQtMS4xMS0xLjgtMS4xNC0xLjg2LTEuMDYtMS43My0uODctMS40YTMuNTEsMy41MSwwLDAsMS0uNjkuMDZIMjUxLjV2OS4zNVptMi4yMi0xMS40N0gyNTVhNS44Miw1LjgyLDAsMCwwLDIuNjEtLjUyLDQuNzYsNC43NiwwLDAsMCwxLjY1LTEuMjksNC42OCw0LjY4LDAsMCwwLC44NS0xLjYzLDUuODMsNS44MywwLDAsMCwuMjUtMS41OEE0LjU5LDQuNTksMCwwLDAsMjYwLDdhNC42Niw0LjY2LDAsMCwwLTEtMS41Miw0LjgsNC44LDAsMCwwLTEuNjctMS4wOEE2LjE4LDYuMTgsMCwwLDAsMjU1LDRoLTMuNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xLjM3IC0wLjgpIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjczLjcyLDEuODdoNS40MmExNC44MiwxNC44MiwwLDAsMSw2LDEuMDgsMTEuNTYsMTEuNTYsMCwwLDEsNCwyLjc4LDEwLjQ2LDEwLjQ2LDAsMCwxLDIuMjIsMy44MUExMy4zOSwxMy4zOSwwLDAsMSwyOTIsMTMuN2ExMS41OSwxMS41OSwwLDAsMS0uOTUsNC43NywxMSwxMSwwLDAsMS02LjI3LDUuOTMsMTIuNjcsMTIuNjcsMCwwLDEtNC41MS44aC02LjU3Wm02LjM0LDIxLjIxYTExLDExLDAsMCwwLDMuODEtLjY1LDkuMTcsOS4xNywwLDAsMCwzLjEtMS44OCw4LjY0LDguNjQsMCwwLDAsMi4wOC0zLDEwLjA5LDEwLjA5LDAsMCwwLC43NS00LDEwLDEwLDAsMCwwLS43LTMuNzcsOC43MSw4LjcxLDAsMCwwLTItMyw5LjUzLDkuNTMsMCwwLDAtMy4xNC0yQTExLDExLDAsMCwwLDI3OS44Myw0SDI3NlYyMy4wOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xLjM3IC0wLjgpIi8+PC9zdmc+" role="presentation"/>
            </a>
          </div>
          <div className="home-nav-right">
            <div className="home-nav-menu">
              <a href="#">product</a>
              <a href="#">PRICING</a>
              <a href="#">BLOG</a>
              <div className="nav-dropdown">
                <NavMenuButton />
              </div>
              <a className="login-nav" href="#">LOGIN</a>
              <a className="demo-button" href="#">BOOK A DEMO</a>
              <input className="trial-input" type="text" placeholder="Email address"/>
              <a className="nav-trial-button" href="#">Free Trial</a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}


let NavMenuButton = React.createClass({
  getInitialState() {
    return {
      isOpen: false
    }
  },

  toggleMenu(event) {
    // event.stopPropagation()
    this.setState({isOpen: !this.state.isOpen})
  },

  onClose() {
    this.setState({isOpen: false})
  },

  componentDidMount() {
    document.body.addEventListener('click', this.onClose)
  },

  componentWillUnmount() {
    document.body.removeEventListener('click', this.onClose)
  },

  render() {
    return <div>
      <a onClick={this.toggleMenu} href="#">More
      <div className="more-triangle"></div>
      </a>
      <NavMenu isOpen={this.state.isOpen} />
      </div>
  }
})

export default HomeNav
