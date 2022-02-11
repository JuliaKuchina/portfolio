import { scaleOrdinal, scaleSqrt } from "d3-scale";
import { drag } from "d3-drag";
import {
  forceSimulation,
  forceManyBody,
  forceX,
  forceY,
  forceCollide,
} from "d3-force";
import { max } from "d3-array";
import { select, Selection } from "d3-selection";
import { TECHNOLOGIES } from "./constants/projects";
import { useEffect } from "react";
import { makeGradients, printGradient } from "./helpers";

export const TechChart = () => {
  // bubbleChart creation function; instantiate new bubble chart given a DOM element to display it in and a dataset to visualise
  function bubbleChart() {
    const width = 600;
    const height = 500;

    // location to centre the bubbles
    const centre = { x: width / 2, y: height / 2 };

    // strength to apply to the position forces
    const forceStrength = 0.03;

    // these will be set in createNodes and chart functions
    let svg = null;
    let bubbles: Selection<SVGGElement, unknown, SVGSVGElement, unknown>;
    let labels: Selection<SVGGElement, unknown, SVGSVGElement, unknown>;
    let nodes = [];

    // charge is dependent on size of the bubble, so bigger towards the middle
    function charge(d: any) {
      return Math.pow(d.radius, 2.0) * 0.01;
    }

    // create a force simulation and add forces to it
    const simulation = forceSimulation()
      .force("charge", forceManyBody().strength(charge))
      .force("x", forceX().strength(forceStrength).x(centre.x))
      .force("y", forceY().strength(forceStrength).y(centre.y))
      .force(
        "collision",
        forceCollide().radius((d: any) => d.radius + 1)
      );

    // force simulation starts up automatically, which we don't want as there aren't any nodes yet
    // simulation.stop();

    // data manipulation function takes raw data from csv and converts it into an array of node objects
    // each node will store data and visualisation values to draw a bubble
    // rawData is expected to be an array of data objects, read in csv
    // function returns the new node array, with a node for each element in the rawData input
    function createNodes(rawData: any) {
      // use max size in the data as the max in the scale's domain
      // note we have to ensure that size is a number
      const maxSize = max(rawData, (d) => +(d as any).size) || 0;

      // size bubbles based on area
      const radiusScale = scaleSqrt().domain([0, maxSize]).range([0, 60]);

      // use map() to convert raw data into node data
      const myNodes = rawData.map((d: any) => ({
        ...d,
        radius: radiusScale(+d.size),
        size: +d.size,
        x: Math.random() * 200,
        y: Math.random() * 200,
      }));

      return myNodes;
    }

    // main entry point to bubble chart, returned by parent closure
    // prepares rawData for visualisation and adds an svg element to the provided selector and starts the visualisation process
    let chart = function chart(selector: any, rawData: any) {
      // convert raw data into nodes data
      nodes = createNodes(rawData);
      svg = select(selector).attr("width", width).attr("height", height);
      makeGradients(svg);

      // bind nodes data to circle elements
      const elements = svg
        .selectAll(".bubble-container")
        .remove()
        .data(nodes, (d: any) => d.id)
        .enter()
        .append("g")
        .attr("class", "bubble-container")
        .style("cursor", "pointer");

      elements.call(
        drag().on("drag", (event, d: any) => {
          d.x = event.x;
          d.y = event.y;
          simulation.alpha(1).restart();
        }) as any
      );

      // function update() {
      //   voronoi = d3.Delaunay.from(
      //     circles,
      //     (d) => d.x,
      //     (d) => d.y
      //   ).voronoi([0, 0, width, height]);
      //   circle.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
      //   cell.attr("d", (d, i) => voronoi.renderCell(i));
      //   mesh.attr("d", voronoi.render());
      // }

      bubbles = elements
        .append("circle")
        .classed("bubble", true)
        .attr("r", (d: any) => d.radius)
        // .attr("fill", (d: any) => fillColour(d.group) as any)
        .style("fill", (d: any) => printGradient(d.group, 7) as any)
        .attr("opacity", 1) as any;

      labels = elements
        .append("text")
        .attr("dy", ".3em")
        .style("text-anchor", "middle")
        .style("font-size", 14)
        .style("font-weight", 600)
        .style("white-space", "pre-line")
        .style("fill", "#333")
        .text((d: any) => d.text) as any;

      // set simulation's nodes to our newly created nodes array
      // simulation starts running automatically once nodes are set
      simulation.nodes(nodes).on("tick", ticked).restart();
    };

    // callback function called after every tick of the force simulation
    // here we do the actual repositioning of the circles based on current x and y value of their bound node data
    // x and y values are modified by the force simulation
    function ticked() {
      bubbles.attr("cx", (d: any) => d.x).attr("cy", (d: any) => d.y);

      labels.attr("x", (d: any) => d.x).attr("y", (d: any) => d.y);
    }

    // return chart function from closure
    return chart;
  }

  // new bubble chart instance
  let myBubbleChart = bubbleChart();

  useEffect(() => {
    // function called once promise is resolved and data is loaded from csv
    // calls bubble chart function to display inside #vis div
    myBubbleChart("#tech-chart", TECHNOLOGIES);
  }, [myBubbleChart]);
  return <svg id="tech-chart" />;
};
