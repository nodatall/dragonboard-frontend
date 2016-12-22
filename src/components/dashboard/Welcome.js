import React, { Component } from "react"

import "../../styles/dashboard/welcome.css"

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <div className="build-dashboard">
          <img className="widget-placeholder" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEwcHgiIGhlaWdodD0iMTEwcHgiIHZpZXdCb3g9IjAgMCAxMTAgMTEwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MC4zICgzMzgzOSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+TGF5ZXJfMTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBcnRib2FyZC0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTUwNS4wMDAwMDAsIC04NzcuMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC00IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDg2LjAwMDAwMCwgNzg5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTMtQ29weS0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMDcuMDAwMDAwLCA4OC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0icHJpY2luZy1kYXRhLXZpeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEyLjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkxheWVyXzEiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTU1LDQuNTgzMzMzMzMgQzgyLjcyOTE2NjcsNC41ODMzMzMzMyAxMDUuNDE2NjY3LDI3LjI3MDgzMzMgMTA1LjQxNjY2Nyw1NSBDMTA1LjQxNjY2Nyw4Mi43MjkxNjY3IDgyLjcyOTE2NjcsMTA1LjQxNjY2NyA1NSwxMDUuNDE2NjY3IEMyNy4yNzA4MzMzLDEwNS40MTY2NjcgNC41ODMzMzMzMyw4Mi43MjkxNjY3IDQuNTgzMzMzMzMsNTUgQzQuNTgzMzMzMzMsMjcuMjcwODMzMyAyNy4yNzA4MzMzLDQuNTgzMzMzMzMgNTUsNC41ODMzMzMzMyBMNTUsNC41ODMzMzMzMyBaIE01NSwwIEMyNC41MjA4MzMzLDAgMCwyNC41MjA4MzMzIDAsNTUgQzAsODUuNDc5MTY2NyAyNC41MjA4MzMzLDExMCA1NSwxMTAgQzg1LjQ3OTE2NjcsMTEwIDExMCw4NS40NzkxNjY3IDExMCw1NSBDMTEwLDI0LjUyMDgzMzMgODUuNDc5MTY2NywwIDU1LDAgTDU1LDAgTDU1LDAgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1LjIwODMzMywgMjUuMjA4MzMzKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTUyLjQ3OTE2NjcsNC41ODMzMzMzMyBDNTMuODU0MTY2Nyw0LjU4MzMzMzMzIDU1LDUuNzI5MTY2NjcgNTUsNy4xMDQxNjY2NyBMNTUsNTIuNDc5MTY2NyBDNTUsNTMuODU0MTY2NyA1My44NTQxNjY3LDU1IDUyLjQ3OTE2NjcsNTUgTDcuMTA0MTY2NjcsNTUgQzUuNzI5MTY2NjcsNTUgNC41ODMzMzMzMyw1My44NTQxNjY3IDQuNTgzMzMzMzMsNTIuNDc5MTY2NyBMNC41ODMzMzMzMyw3LjEwNDE2NjY3IEM0LjU4MzMzMzMzLDUuNzI5MTY2NjcgNS43MjkxNjY2Nyw0LjU4MzMzMzMzIDcuMTA0MTY2NjcsNC41ODMzMzMzMyBMNTIuNDc5MTY2Nyw0LjU4MzMzMzMzIEw1Mi40NzkxNjY3LDQuNTgzMzMzMzMgWiBNNTIuNDc5MTY2NywwIEw3LjEwNDE2NjY3LDAgQzMuMjA4MzMzMzMsMCAwLDMuMjA4MzMzMzMgMCw3LjEwNDE2NjY3IEwwLDUyLjQ3OTE2NjcgQzAsNTYuMzc1IDMuMjA4MzMzMzMsNTkuNTgzMzMzMyA3LjEwNDE2NjY3LDU5LjU4MzMzMzMgTDUyLjQ3OTE2NjcsNTkuNTgzMzMzMyBDNTYuMzc1LDU5LjU4MzMzMzMgNTkuNTgzMzMzMyw1Ni4zNzUgNTkuNTgzMzMzMyw1Mi40NzkxNjY3IEw1OS41ODMzMzMzLDcuMTA0MTY2NjcgQzU5LjU4MzMzMzMsMy4yMDgzMzMzMyA1Ni4zNzUsMCA1Mi40NzkxNjY3LDAgTDUyLjQ3OTE2NjcsMCBMNTIuNDc5MTY2NywwIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNS4yMDgzMzMzLDI1LjIwODMzMzMgTDExLjQ1ODMzMzMsMjUuMjA4MzMzMyBMMTEuNDU4MzMzMywxMy41OTQyNTU3IEwyNS4yMDgzMzMzLDEzLjU5NDI1NTcgTDI1LjIwODMzMzMsMjUuMjA4MzMzMyBaIE0yNy41LDkuMTY2NjY2NjcgTDkuMTY2NjY2NjcsOS4xNjY2NjY2NyBMOS4xNjY2NjY2NywyNy41IEwyNy41LDI3LjUgTDI3LjUsOS4xNjY2NjY2NyBMMjcuNSw5LjE2NjY2NjY3IEwyNy41LDkuMTY2NjY2NjcgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQ4LjEyNSwyNS4yMDgzMzMzIEwzNC4zNzUsMjUuMjA4MzMzMyBMMzQuMzc1LDEzLjU5NDI1NTcgTDQ4LjEyNSwxMy41OTQyNTU3IEw0OC4xMjUsMjUuMjA4MzMzMyBaIE01MC40MTY2NjY3LDkuMTY2NjY2NjcgTDMyLjA4MzMzMzMsOS4xNjY2NjY2NyBMMzIuMDgzMzMzMywyNy41IEw1MC40MTY2NjY3LDI3LjUgTDUwLjQxNjY2NjcsOS4xNjY2NjY2NyBMNTAuNDE2NjY2Nyw5LjE2NjY2NjY3IEw1MC40MTY2NjY3LDkuMTY2NjY2NjcgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI1LjIwODMzMzMsNDguMTI1IEwxMS40NTgzMzMzLDQ4LjEyNSBMMTEuNDU4MzMzMywzNi41MTA5MjIzIEwyNS4yMDgzMzMzLDM2LjUxMDkyMjMgTDI1LjIwODMzMzMsNDguMTI1IFogTTI3LjUsMzIuMDgzMzMzMyBMOS4xNjY2NjY2NywzMi4wODMzMzMzIEw5LjE2NjY2NjY3LDUwLjQxNjY2NjcgTDI3LjUsNTAuNDE2NjY2NyBMMjcuNSwzMi4wODMzMzMzIEwyNy41LDMyLjA4MzMzMzMgTDI3LjUsMzIuMDgzMzMzMyBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNDguMTI1LDQ4LjEyNSBMMzQuMzc1LDQ4LjEyNSBMMzQuMzc1LDM2LjUxMDkyMjMgTDQ4LjEyNSwzNi41MTA5MjIzIEw0OC4xMjUsNDguMTI1IFogTTUwLjQxNjY2NjcsMzIuMDgzMzMzMyBMMzIuMDgzMzMzMywzMi4wODMzMzMzIEwzMi4wODMzMzMzLDUwLjQxNjY2NjcgTDUwLjQxNjY2NjcsNTAuNDE2NjY2NyBMNTAuNDE2NjY2NywzMi4wODMzMzMzIEw1MC40MTY2NjY3LDMyLjA4MzMzMzMgTDUwLjQxNjY2NjcsMzIuMDgzMzMzMyBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTaGFwZSIgcG9pbnRzPSI0MS4yNSA0Mi4zMTc5NjEyIDM4Ljk1ODMzMzMgNDIuMzE3OTYxMiAzOC45NTgzMzMzIDUxLjQ4NDYyNzggNDEuMjUgNTEuNDg0NjI3OCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlNoYXBlIiBwb2ludHM9IjQ1LjgzMzMzMzMgNDYuOTAxMjk0NSA0My41NDE2NjY3IDQ2LjkwMTI5NDUgNDMuNTQxNjY2NyA1MS40ODQ2Mjc4IDQ1LjgzMzMzMzMgNTEuNDg0NjI3OCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlNoYXBlIiBwb2ludHM9IjQ4LjEyNSA2Ni40NTgzMzMzIDQ4LjEyNSA2NC4xNjY2NjY3IDM4Ljk1ODMzMzMgNjQuMTY2NjY2NyAzOC45NTgzMzMzIDY2LjQ1ODMzMzMiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTaGFwZSIgcG9pbnRzPSI0OC4xMjUgNzEuMDQxNjY2NyA0OC4xMjUgNjguNzUgMzguOTU4MzMzMyA2OC43NSAzOC45NTgzMzMzIDcxLjA0MTY2NjciPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik02Ni40NTgzMzMzLDY4Ljk3OTE2NjcgQzY4LjA5OTc5MTYsNjguOTc5MTY2NyA2OC43NSw2OS41OTY4NjQ3IDY4Ljc1LDcxLjA0MTY2NjcgTDcxLjA0MTY2NjcsNzEuMDQxNjY2NyBDNzEuMDQxNjY2Nyw2OC4zMDQxNzcgNjkuMzM5OTAxNCw2Ni42ODc1IDY2LjQ1ODMzMzMsNjYuNjg3NSBDNjMuNDk1NTI2OCw2Ni42ODc1IDYxLjg3NSw2OC4xNDU5NzQxIDYxLjg3NSw3MS4wNDE2NjY3IEw2NC4xNjY2NjY3LDcxLjA0MTY2NjcgQzY0LjE2NjY2NjcsNjkuNDY4NjA5MiA2NC43MTA0OTE3LDY4Ljk3OTE2NjcgNjYuNDU4MzMzMyw2OC45NzkxNjY3IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlNoYXBlIiBwb2ludHM9IjcxLjA0MTY2NjcgNDguMTI1IDcxLjA0MTY2NjcgNDUuODMzMzMzMyA2MS44NzUgNDUuODMzMzMzMyA2MS44NzUgNDguMTI1Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iU2hhcGUiIHBvaW50cz0iNjYuNDU4MzMzMyA0My41NDE2NjY3IDY2LjQ1ODMzMzMgNDEuMjUgNjEuODc1IDQxLjI1IDYxLjg3NSA0My41NDE2NjY3Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" alt="presentation"></img>
          <a href="#" className="widget-button">Build Your Dashboard</a>
        </div>
      </div>
    )
  }
}
