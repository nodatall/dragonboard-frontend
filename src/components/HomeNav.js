import React, { Component } from 'react'
import '../styles/home_nav.css'


class HomeNav extends Component {
  render () {
    return (
      <nav className="home-nav clearfix">
        <ul className="nav-container">
          <li className="home-nav-left">
            <a className="logo" href="#"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmlld0JveD0iMCAwIDI0MS4zNTggMzkiCiAgIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0MS4zNTggMzkiCiAgIGlkPSJzdmcyIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTEgcjEzNzI1IgogICBzb2RpcG9kaTpkb2NuYW1lPSIzMDB4NDguc3ZnIj4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGExNCI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGRlZnMKICAgICBpZD0iZGVmczEyIiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTI3NSIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI5MjciCiAgICAgaWQ9Im5hbWVkdmlldzEwIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp6b29tPSI2LjQyMTkwNDYiCiAgICAgaW5rc2NhcGU6Y3g9IjIzOS42Mjk0MSIKICAgICBpbmtzY2FwZTpjeT0iMzQuNDAzODU4IgogICAgIGlua3NjYXBlOndpbmRvdy14PSIxMzY5IgogICAgIGlua3NjYXBlOndpbmRvdy15PSIyOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIwIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzIiIC8+CiAgPHBhdGgKICAgICBkPSJNMCAwaDM4Ljk3NXYzOWgtMzguOTc1di0zOXoiCiAgICAgaWQ9InBhdGg0IgogICAgIGZpbGw9IiM4REM2M0YiIC8+CiAgPHRleHQKICAgICB4bWw6c3BhY2U9InByZXNlcnZlIgogICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0OjMwMDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTozMS4yODMzNjUyNXB4O2xpbmUtaGVpZ2h0OjEyNSU7Zm9udC1mYW1pbHk6SGVsdmV0aWNhOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J0hlbHZldGljYSwgTGlnaHQnO3RleHQtYWxpZ246c3RhcnQ7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7d3JpdGluZy1tb2RlOmxyLXRiO3RleHQtYW5jaG9yOnN0YXJ0O2ZpbGw6IzNkNDM1MTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgeD0iNC4yOTkyNzU0IgogICAgIHk9IjMyLjYzMTA1OCIKICAgICBpZD0idGV4dDMzNDIiCiAgICAgc29kaXBvZGk6bGluZXNwYWNpbmc9IjEyNSUiCiAgICAgdHJhbnNmb3JtPSJzY2FsZSgxLjA0Mjc3ODksMC45NTg5NzYwNikiPjx0c3BhbgogICAgICAgc29kaXBvZGk6cm9sZT0ibGluZSIKICAgICAgIGlkPSJ0c3BhbjMzNDQiCiAgICAgICB4PSI0LjI5OTI3NTQiCiAgICAgICB5PSIzMi42MzEwNTgiPkQ8L3RzcGFuPjwvdGV4dD4KICA8dGV4dAogICAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgICAgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOjIyLjVweDtsaW5lLWhlaWdodDoxMjUlO2ZvbnQtZmFtaWx5OkhlbHZldGljYTstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOidIZWx2ZXRpY2EsIE5vcm1hbCc7dGV4dC1hbGlnbjpzdGFydDtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDt3cml0aW5nLW1vZGU6bHItdGI7dGV4dC1hbmNob3I6c3RhcnQ7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxcHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICB4PSI2MS4zNzY4MzUiCiAgICAgeT0iMjguMjU1NTI0IgogICAgIGlkPSJ0ZXh0MzM1MSIKICAgICBzb2RpcG9kaTpsaW5lc3BhY2luZz0iMTI1JSI+PHRzcGFuCiAgICAgICBzb2RpcG9kaTpyb2xlPSJsaW5lIgogICAgICAgaWQ9InRzcGFuMzM1NSIKICAgICAgIHg9IjYxLjM3NjgzNSIKICAgICAgIHk9IjI4LjI1NTUyNCI+RFJBR09OQk9BUkQ8L3RzcGFuPjwvdGV4dD4KPC9zdmc+Cg" role="presentation"/> LIZARDBOARD</a>
          </li>
          <li className="home-nav-right">
            <ul className="home-nav-menu">
              <li><a href="#">product</a></li>
              <li><a href="#">PRICING</a></li>
              <li><a href="#">BLOG</a></li>
              <li className="nav-dropdown">MORE
                <label className="more-label"> ^
                </label>
                <ul className="sub-nav">
                  <li><a href="#">EXAMPLE 1</a></li>
                  <li><a href="#">EXAMPLE 2</a></li>
                  <li><a href="#">EXAMPLE 3</a></li>
                </ul>
              </li>
              <li><a className="login-nav" href="#">LOGIN</a></li>
              <li><a className="demo-button" href="#">BOOK A DEMO</a></li>
              <li>
                <input className="trial-input" type="text" placeholder="Email address"/>
                <a className="flat-button trial-button" href="#">Free Trial</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    )
  }
}

export default HomeNav
