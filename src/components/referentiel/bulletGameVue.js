import React from "react"
import classes from "./BulletGame.module.scss"

const BulletGameVue = ({ coords, referentiel }) => (
  <svg version="1.1" viewBox="0 0 300 100" className={classes.svgImage}>
    <defs id="defs2">
      <marker
        style={{ overflow: "visible" }}
        id="TriangleY"
        refX="0.0"
        refY="0.0"
        orient="auto"
      >
        <path
          stroke="context-stroke"
          transform="scale(-0.4)"
          d="M 5.77,0.0 L -2.88,5.0 L -2.88,-5.0 L 5.77,0.0 z "
          id="path1357"
          fill="#0000fe"
        />
      </marker>
      <marker
        style={{ overflow: "visible" }}
        id="TriangleX"
        refX="0"
        refY="0"
        orient="auto"
      >
        <path
          transform="scale(0.4)"
          d="M 5.77,0 -2.88,5 V -5 Z"
          id="path1781-3"
          fill="#00f409"
        />
      </marker>
    </defs>
    <path
      className={`${classes.strockColor} ${classes.element}`}
      style={{
        fill: "none",
        strokeWidth: "0.264583px",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        transform: `translate(${coords["floor"]["x"] -
          coords[referentiel]["x"]}px, ${coords["floor"]["y"] -
          coords[referentiel]["y"]}px)`,
      }}
      d="M -66.145833,66.145833 H 500.02083"
      id="path12"
    />
    <g
      id="perso"
      className={classes.element}
      style={{
        visibility: coords["perso"]["x"] > 5 ? "hidden" : "visible",
        transform: `translate(${coords["perso"]["x"] -
          coords[referentiel]["x"]}px, ${coords["perso"]["y"] -
          coords[referentiel]["y"]}px)`,
      }}
    >
      <path
        className={classes.strockColor}
        style={{
          fill: "none",
          strokeWidth: "0.264583px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
        }}
        d="m 124.08958,60.324999 5.29167,-7.9375 5.29166,7.9375"
        id="path14"
      />
      <path
        className={classes.strockColor}
        style={{
          fill: "none",
          strokeWidth: "0.264583px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
        }}
        d="m 129.38125,52.387499 v 10.583334 l -2.64584,10.583333"
        id="path16"
      />
      <path
        className={classes.strockColor}
        style={{
          fill: "none",
          strokeWidth: "0.264583px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
        }}
        d="m 129.38125,62.970833 2.64583,10.583333"
        id="path18"
      />
      <circle
        className={classes.strockColor}
        style={{
          fill: "none",
          fillRule: "evenodd",
          strokeWidth: 0.264583,
        }}
        id="path22"
        cx="129.38124"
        cy="48.418751"
        r="3.96875"
      />
      <path
        className={classes.strockColor}
        style={{
          fill: "none",
          strokeWidth: "0.264583px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
        }}
        d="m 126.73541,47.095833 c 0,1.322916 0,1.322916 0,1.322916"
        id="path847"
      />
      <path
        className={classes.strockColor}
        style={{
          fill: "none",
          strokeWidth: "0.264583px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
        }}
        d="m 129.38125,47.095833 v 1.322916"
        id="path849"
      />
      <path
        className={classes.strockColor}
        style={{
          fill: "none",
          strokeWidth: "0.334674px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
        }}
        d="m 126.47083,50.535416 c 1.2493,0.351846 2.39042,0.454409 3.175,-0.264583"
        id="path851"
      />
    </g>
    <g
      id="perso_running"
      className={classes.element}
      style={{
        visibility: coords["perso"]["x"] > 5 ? "visible" : "hidden",
        transform: `translate(${coords["perso"]["x"] -
          coords[referentiel]["x"]}px, ${coords["perso"]["y"] -
          coords[referentiel]["y"]}px)`,
      }}
    >
      <path
        className={classes.strockColor}
        style={{
          fill: "none",
          strokeWidth: "0.264583px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
        }}
        d="m 137.58333,52.916666 c -2.64583,3.96875 -5.29166,3.96875 -8.20208,-0.529167 -7.67292,0.529167 -7.67292,5.820833 -5.02708,5.820833"
        id="path14-3"
      />
      <path
        className={classes.strockColor}
        style={{
          fill: "none",
          strokeWidth: "0.264583px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
        }}
        d="m 129.38125,52.387499 v 10.583334 c 4.33099,12.236484 -3.35148,5.852607 -5.02708,8.466666"
        id="path16-6"
      />
      <path
        className={classes.strockColor}
        style={{
          fill: "none",
          strokeWidth: "0.264583px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
        }}
        d="m 129.38125,62.970833 c 10.84792,-3.439584 5.55625,7.143749 6.87917,7.143749"
        id="path18-7"
      />
      <circle
        className={classes.strockColor}
        style={{
          fill: "none",
          fillRule: "evenodd",
          strokeWidth: 0.264583,
        }}
        id="path22-5"
        cx="129.38126"
        cy="48.418751"
        r="3.96875"
      />
      <path
        className={classes.strockColor}
        style={{
          fill: "none",
          strokeWidth: "0.264583px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
        }}
        d="m 130.43958,47.095832 c 0,1.322916 0,1.322916 0,1.322916"
        id="path847-3"
      />
      <path
        className={classes.strockColor}
        style={{
          fill: "none",
          strokeWidth: "0.264583px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
        }}
        d="m 132.29167,47.095833 v 1.322916"
        id="path849-5"
      />
      <ellipse
        className={classes.strockColor}
        style={{
          fill: "none",
          fillRule: "evenodd",
          strokeWidth: 0.264583,
        }}
        id="path895"
        cx="131.36563"
        cy="50.403122"
        rx="0.39687499"
        ry="0.92604166"
      />
    </g>
    <circle
      className={`${classes.strockColor} ${classes.element}`}
      style={{
        fill: "none",
        fillRule: "evenodd",
        strokeWidth: 0.264583,
        transform: `translate(${coords["bullet"]["x"] -
          coords[referentiel]["x"]}px, ${coords["bullet"]["y"] -
          coords[referentiel]["y"]}px)`,
      }}
      id="bullet"
      cx="48.706844"
      cy="54.249146"
      r="3.96875"
    />
    <g
      id="canon"
      className={classes.element}
      style={{
        transform: `translate(${coords["canon"]["x"] -
          coords[referentiel]["x"]}px, ${coords["canon"]["y"] -
          coords[referentiel]["y"]}px)`,
      }}
    >
      <g id="canonTop" style={{ opacity: 1 }}>
        <path
          id="path908"
          className={`${classes.strockColor} ${classes.fillColor}`}
          style={{
            fillOpacity: 1,
            fillRule: "evenodd",
            strokeWidth: 0.320135,
          }}
          d="m 47.402793,50.289957 -8.112167,5.282363 a 8.0697913,7.9374994 0 0 0 -7.672917,7.927682 8.0697913,7.9374994 0 0 0 8.069792,7.937499 8.0697913,7.9374994 0 0 0 8.069791,-7.937499 8.0697913,7.9374994 0 0 0 -0.01964,-0.549836 l 5.093745,-6.869351 z"
        />
        <rect
          className={`${classes.strockColor} ${classes.fillColor}`}
          style={{
            fillOpacity: 1,
            strokeWidth: 0.273869,
          }}
          id="rect949"
          width="3.9687474"
          height="9.921876"
          x="-0.71401614"
          y="67.932396"
          ry="2.1261137"
          transform="rotate(-43.053563)"
        />
      </g>
      <g id="canonBottom">
        <path
          className={classes.strockColor}
          style={{
            fill: "none",
            strokeWidth: "0.264583px",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
          }}
          d="M 39.6875,63.5 29.104167,72.760417 H 50.270834 L 39.6875,63.5"
          id="path959"
        />
        <circle
          className={classes.strockColor}
          style={{
            fill: "none",
            fillRule: "evenodd",
            strokeWidth: 0.264583,
          }}
          id="path963"
          cx="29.104168"
          cy="72.760414"
          r="2.6458333"
        />
        <circle
          className={classes.strockColor}
          style={{
            fill: "none",
            fillRule: "evenodd",
            strokeWidth: 0.264583,
          }}
          id="path963-9"
          cx="50.270836"
          cy="72.760414"
          r="2.6458333"
        />
      </g>
    </g>
    <g
      className={classes.element}
      id="cloud"
      style={{
        transform: `translate(${50 +
          coords["cloud"]["x"] -
          coords[referentiel]["x"]}px, ${coords["cloud"]["y"] -
          coords[referentiel]["y"]}px)`,
      }}
    >
      <path
        className={classes.strockColor}
        style={{ fill: "none", fillRule: "evenodd", strokeWidth: 0.264583 }}
        id="path991"
        d="m 83.660897,10.757287 c 4.500439,-4.7791963 12.220082,-4.6351193 16.880873,-0.173841 5.27256,5.046861 5.08863,13.630757 0.0854,18.789286 -5.592782,5.76636 -15.041792,5.542487 -20.697702,-0.0031 -0.750084,-0.735448 -1.423849,-1.548351 -2.008354,-2.421167"
        transform="matrix(0.71510807,0,0,0.63188189,31.28927,3.8958455)"
      />
      <path
        className={classes.strockColor}
        style={{ fill: "none", fillRule: "evenodd", strokeWidth: 0.264583 }}
        id="path991-1"
        transform="matrix(0.50192435,0,0,0.34122323,38.717602,11.530828)"
        d="M 99.573376,32.689687 C 95.174298,39.308746 85.941989,40.792927 79.440432,36.419758 72.78071,31.940202 70.808068,22.851978 74.565693,15.853961"
      />
      <path
        className={classes.strockColor}
        style={{ fill: "none", fillRule: "evenodd", strokeWidth: 0.264583 }}
        id="path991-1-2"
        transform="matrix(0.50192435,0,0,0.34122323,29.257318,13.202682)"
        d="M 99.573376,32.689687 C 95.174298,39.308746 85.941989,40.792927 79.440432,36.419758 72.78071,31.940202 70.808068,22.851978 74.565693,15.853961"
      />
      <path
        className={classes.strockColor}
        style={{ fill: "none", fillRule: "evenodd", strokeWidth: 0.264583 }}
        id="path991-1-2-7"
        transform="matrix(0.50192435,0,0,0.36533675,16.889949,12.068054)"
        d="M 99.573387,32.689669 C 95.17432,39.308734 85.942014,40.792929 79.440452,36.419771 72.236331,31.574049 70.634068,21.483213 75.450329,14.39415 79.234828,8.8237405 86.191665,6.0945278 92.771522,7.3763285"
      />
      <path
        className={classes.strockColor}
        style={{ fill: "none", fillRule: "evenodd", strokeWidth: 0.264583 }}
        id="path991-1-2-0"
        transform="matrix(0.57149992,0,0,0.38553585,15.704506,5.2347842)"
        d="M 72.935628,26.581142 C 71.178843,17.70589 77.402375,9.0658199 86.175368,7.3681779 93.724209,5.9074188 101.4672,9.7795529 105.07105,16.52131"
      />
      <path
        className={classes.strockColor}
        style={{ fill: "none", fillRule: "evenodd", strokeWidth: 0.264583 }}
        id="path991-1-2-0-9"
        transform="matrix(0.77289745,0,0,0.47255289,14.246294,2.7297697)"
        d="m 75.575407,14.212668 c 5.399376,-7.7229887 16.37854,-9.2979994 23.989,-3.932595 1.225063,0.863672 2.340093,1.882095 3.312623,3.022579"
      />
    </g>
    <g
      id="floor"
      className={`${classes.element} ${
        referentiel === "floor"
          ? classes.isReferentiel
          : classes.isNotReferentiel
      }`}
      style={{
        transform: `translate(${coords["floor"]["x"] -
          coords[referentiel]["x"]}px, ${coords["floor"]["y"] -
          coords[referentiel]["y"]}px)`,
      }}
    >
      <path
        style={{
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          markerStart: "url(#TriangleY)",
        }}
        d="M 75.40625,60.854166 V 71.4375"
        id="path1855"
        className={classes.firstArrow}
      />
      <path
        className={classes.secondArrow}
        style={{
          fill: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          markerEnd: "url(#TriangleX)",
        }}
        d="M 75.406249,71.437499 H 85.989582"
        id="path2783"
      />
      <circle
        style={{
          fillRule: "evenodd",
          strokeWidth: 0.264583,
        }}
        id="path1160"
        cx="75.40625"
        cy="71.4375"
        r="1.3229166"
      />
    </g>
    <g
      id="canon"
      className={`${classes.element} ${
        referentiel === "canon"
          ? classes.isReferentiel
          : classes.isNotReferentiel
      }`}
      style={{
        transform: `translate(${coords["canon"]["x"] -
          coords[referentiel]["x"]}px, ${coords["canon"]["y"] -
          coords[referentiel]["y"]}px)`,
      }}
    >
      <path
        style={{
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          markerStart: "url(#TriangleY)",
        }}
        d="M 39.687501,52.916667 V 63.500001"
        id="path1855-7"
        className={classes.firstArrow}
      />
      <path
        className={classes.secondArrow}
        style={{
          fill: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          markerEnd: "url(#TriangleX)",
        }}
        d="M 39.6875,63.5 H 50.270833"
        id="path2783-9"
      />
      <circle
        style={{
          fillRule: "evenodd",
          strokeWidth: 0.264583,
        }}
        id="path1160-2"
        cx="39.6875"
        cy="63.5"
        r="1.3229166"
      />
    </g>
    <g
      id="bullet"
      className={`${classes.element} ${
        referentiel === "bullet"
          ? classes.isReferentiel
          : classes.isNotReferentiel
      }`}
      style={{
        transform: `translate(${coords["bullet"]["x"] -
          coords[referentiel]["x"]}px, ${coords["bullet"]["y"] -
          coords[referentiel]["y"]}px)`,
      }}
    >
      <path
        style={{
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          markerStart: "url(#TriangleY)",
        }}
        d="M 48.947918,43.65625 V 54.239584"
        id="path1855-7-9"
        className={classes.firstArrow}
      />
      <path
        className={classes.secondArrow}
        style={{
          fill: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          markerEnd: "url(#TriangleX)",
        }}
        d="M 48.947917,54.239583 H 59.53125"
        id="path2783-9-2"
      />
      <circle
        style={{
          fillRule: "evenodd",
          strokeWidth: 0.264583,
        }}
        id="path1160-2-2"
        cx="48.947918"
        cy="54.239582"
        r="1.3229166"
      />
    </g>
    <g
      id="cloud"
      className={`${classes.element} ${
        referentiel === "cloud"
          ? classes.isReferentiel
          : classes.isNotReferentiel
      }`}
      style={{
        transform: `translate(${50 +
          coords["cloud"]["x"] -
          coords[referentiel]["x"]}px, ${coords["cloud"]["y"] -
          coords[referentiel]["y"]}px)`,
      }}
    >
      <path
        style={{
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          markerStart: "url(#TriangleY)",
        }}
        d="M 80.697917,5.291666 V 15.875"
        id="path1855-1"
        className={classes.firstArrow}
      />
      <path
        className={classes.secondArrow}
        style={{
          fill: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          markerEnd: "url(#TriangleX)",
        }}
        d="M 80.697916,15.874999 H 91.281249"
        id="path2783-2"
      />
      <circle
        style={{
          fillRule: "evenodd",
          strokeWidth: 0.264583,
        }}
        id="path1160-9"
        cx="80.697914"
        cy="15.875"
        r="1.3229166"
      />
    </g>
    <g
      id="perso"
      className={`${classes.element} ${
        referentiel === "perso"
          ? classes.isReferentiel
          : classes.isNotReferentiel
      }`}
      style={{
        transform: `translate(${coords["perso"]["x"] -
          coords[referentiel]["x"]}px, ${coords["perso"]["y"] -
          coords[referentiel]["y"]}px)`,
      }}
    >
      <path
        style={{
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          markerStart: "url(#TriangleY)",
        }}
        d="M 129.64583,52.916666 V 63.5"
        id="path1855-1-8"
        className={classes.firstArrow}
      />
      <path
        className={classes.secondArrow}
        style={{
          fill: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          markerEnd: "url(#TriangleX)",
        }}
        d="m 129.64583,63.499999 h 10.58333"
        id="path2783-2-4"
      />
      <circle
        style={{
          fillRule: "evenodd",
          strokeWidth: 0.264583,
        }}
        id="path1160-9-5"
        cx="129.64583"
        cy="63.5"
        r="1.3229166"
      />
    </g>
  </svg>
)
export default BulletGameVue
