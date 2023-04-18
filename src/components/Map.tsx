import React from 'react';
import {Annotation, ComposableMap, Geographies, Geography} from "react-simple-maps";

const Map = () => {
    return (
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                rotate: [-80.0, -42.0, 0],
                center: [-5, -3],
                scale: 1250
            }}
            style={{width: "100%", height: "100%"}}
        >
            <Geographies
                geography="/features.json"
                fill="transparent"
                stroke="#da4ea2"
                strokeWidth={0.7}
            >
                {({geographies}) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo}/>
                    ))
                }
            </Geographies>
            <Annotation
                subject={[70, 49]}
                dx={-90}
                dy={-30}
                connectorProps={{
                    stroke: "white",
                    strokeWidth: 2,
                    strokeLinecap: "round"
                }}
            >
                <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
                    {"Kazakhstan"}
                </text>
            </Annotation>
            <Annotation
                subject={[75, 42]}
                dx={-90}
                dy={-30}
                connectorProps={{
                    stroke: "white",
                    strokeWidth: 2,
                    strokeLinecap: "round"
                }}
            >
                <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
                    {"Kyrgyzstan"}
                </text>
            </Annotation>
        </ComposableMap>
    );
};

export default Map;