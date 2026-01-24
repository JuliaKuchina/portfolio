import { useEffect, useMemo, useRef } from "react";
import { scaleSqrt } from "d3-scale";
import { drag } from "d3-drag";
import { max } from "d3-array";
import { select, Selection } from "d3-selection";
import { TECHNOLOGIES } from "./helpers/projects";
import { makeGradients, printGradient, makeSimulation } from "./helpers";
import { useWindowSize } from "./helpers/hooks";

export const TechChart = () => {
  const windowWidth = useWindowSize();
  const width = useMemo(
    () => (windowWidth < 600 ? windowWidth : 600),
    [windowWidth],
  );
  const height = 500;
  const centre = { x: width / 2, y: height / 2 };
  const forceStrength = 0.03;

  // these will be set in createNodes and chart functions
  let svgRef = useRef(null);
  let bubbles =
    useRef<Selection<SVGGElement, unknown, SVGSVGElement, unknown>>();
  let labels =
    useRef<Selection<SVGGElement, unknown, SVGSVGElement, unknown>>();
  let nodes = useRef([]);

  // create a force simulation and add forces to it
  const simulation = makeSimulation(centre, forceStrength);

  // callback function called after every tick of the force simulation
  // here we do the actual repositioning of the circles based on current x and y value of their bound node data
  // x and y values are modified by the force simulation
  function ticked() {
    bubbles.current?.attr("cx", (d: any) => d.x).attr("cy", (d: any) => d.y);
    labels.current?.attr("x", (d: any) => d.x).attr("y", (d: any) => d.y);
  }

  const getRandomGroup = () => {
    const groups = [1, 3, 4, 7];
    return groups[Math.floor(Math.random() * groups.length)];
  };

  useEffect(() => {
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
        randomGroup: getRandomGroup(),
      }));

      return myNodes;
    }
    // main entry point to bubble chart, returned by parent closure
    // prepares rawData for visualisation and adds an svg element to the provided selector and starts the visualisation process
    const chart = () => {
      if (!svgRef.current) {
        return;
      }
      const svg = select(svgRef.current);
      // convert raw data into nodes data
      nodes.current = createNodes(TECHNOLOGIES);
      makeGradients(svg);

      // bind nodes data to circle elements
      const elements = (svg as any)
        .selectAll(".bubble-container")
        .remove()
        .data(nodes.current, (d: any) => d.id)
        .enter()
        .append("g")
        .attr("class", "bubble-container")
        .style("cursor", "pointer");

      elements.call(
        drag().on("drag", (event, d: any) => {
          d.x = event.x;
          d.y = event.y;
          simulation.alpha(1).restart();
        }) as any,
      );

      bubbles.current = elements
        .append("circle")
        .classed("bubble", true)
        .attr("r", (d: any) => d.radius)
        .style("fill", (d: any) => printGradient(d.randomGroup, 7) as any)
        .attr("opacity", 1) as any;

      labels.current = elements
        .append("text")
        .attr("dy", ".3em")
        .style("text-anchor", "middle")
        .style(
          "font-size",
          (d: any) => `${Math.max(10, Math.min(14, d.radius * 0.4))}px`,
        )
        .style("font-weight", 600)
        .style("white-space", "pre-line")
        .style("fill", "#333")
        .text((d: any) => d.text) as any;

      // set simulation's nodes to our newly created nodes array
      // simulation starts running automatically once nodes are set
      simulation.nodes(nodes.current).on("tick", ticked).restart();
    };
    // function called once promise is resolved and data is loaded from csv
    // calls bubble chart function to display inside #vis div
    chart();
  }, [simulation]);
  return <svg ref={svgRef} id="tech-chart" width={width} height={height} />;
};
