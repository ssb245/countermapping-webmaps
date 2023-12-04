var config = {
    style: 'mapbox://styles/ssb245/clp6zoor100wk01nwdsgu72jf',
    accessToken: 'pk.eyJ1Ijoic3NiMjQ1IiwiYSI6ImNsbjM2OWcwNzBkcncya3A5cW1xcDVveHYifQ.xLMsLxb2C4-z2_aHTmPkyw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'Stitching South Park',
    subtitle: 'Mapping the Impact of Highway-99 on Community Accessibility and Resilience in South Park, Seattle',
    byline: 'Stephanie Belbeck // CRP 5850 // Final Project // Fall 2023',
    para1: 'The highway system across the United States has been negatively synonymous with environmental and social justice. Highway infrastructure razed, split, and displaced many communities of color and the impacts from these targeted actions are still seen in modern days. Some communities who have faced this highway divide are more known, such as in Palo Alto and East Palo Alto, but this is a phenomenon seen across the States. A more unknown area affected by marginalization and interstate racism is South Park, a neighborhood in Seattle, Washington. The United States landscape is tattooed with discriminatory history that is spatial and social. These inequities feel so rooted and permanent in current cities, but what is done is not done. There is no way to make up for the marginalization these communities have faced but there are ways to begin to make a change. Highway 99, built in 1959, is an unhealed wound running through the middle of South Park. It is time to address equity and stitch the community together by analyzing the cause, current conditions, and potentials for fostering resilience and connectivity in this split neighborhood.',
    para2: 'Cities across the United States have started to address the social and environmental impacts of the highway system. The highway-removal movement includes many projects, such as in Rochester, New York in 2013 where the local officials replaced a section of the highway with a boulevard that has contributed to healthy community practices, as well as increased local business and sparked $200 Million of economic development.  The first round of the Biden Administration’s grant program, “Reconnecting Communities Pilot Program” was awarded in February of 2023 (Mathis 2023). The long-term cost-benefit analysis of these projects are continuously being assessed. It would be interesting to learn how this could potentially lead to gentrification and displacement due to the new desirability of the neighborhood. The reclamation of Highway 99 would give back 44 acres to the South Park community. Organizations, such as Reconnect South Park, have been trying to push this dream forward (Blow 2023). Counter-mapping research will contribute data to aid decision-makers and help spatially convey the environmental and social justice conditions of the area. Visualizing inequity is a way to activate change.',
    footer: 'Seattle GeoData, Google Earth, FEMA. title image: Ken Lambert / The Seattle Times <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'history-identifier',
            alignment: 'right',
            hidden: false,
            title: 'History of Redlining in Seattle',
            image: 'images/redhookhouses.jpg',
            description: 'Seattle was redlined in 1936. The Home Owners Loan Corporation identified South Park as a high risk area and the neighborhood was given a D rating. The effects of redlining are still persistent today in the demographic makeup of the area, as well as many environmental issues that have continued to affect health and community wellbeing. Disproportionate environmental impacts are experienced across the U.S. in previously redlined communities, showing that although redlining is outlawed, it continues to affect the present day.',
            location: {
                center: [-122.33753, 47.63142],
                zoom: 10,
                pitch: 0.00,
                bearing: 0.00,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'holc-all-0zassw',
                opacity: 1 },
                {layer: 'equity',
                opacity: 0},
                {layer: 'street',
                opacity: 0},
                {layer: 'superfund',
                opacity: 0},
                {layer: 'luse',
                opacity: 0},
                {layer: 'context',
                opacity: 0},
                {layer: 'trap',
                opacity: 0},
                {layer: 'flood',
                opacity: 0},
                {layer: 'parks',
                opacity: 0},
                {layer: 'parkgap',
                opacity: 0},
                {layer: 'crossings',
                opacity: 0},
                ],
            onChapterExit: [
                {layer: 'holc-all-0zassw',
                opacity: 0 }
                ],
        },
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Priority Equity Areas in Seattle',
            image: 'images/hurricanesandy.jpg.webp',
            description: 'This map shows the Highest Equity Priority group designated by the current Racial and Social Equity Index. This index compiles race, ethnicity, and other demographics with socioeconomic and health disadvantage indicators to identify areas of priority equity actions.',
            location: {
                center: [-122.33753, 47.63142],
                zoom: 10,
                pitch: 0.00,
                bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'equity',
                opacity: 1 },
                {layer: 'street',
                opacity: 0},
                ],
            onChapterExit: [
                {layer: 'equity',
                opacity: 0 }
                ],
            //  onChapterEnter: [
            //      {
            //         layer: 'aff-hous-type',
            //          opacity: 0
            //      }
            // //     // {
            // //     //     layer: 'layer-name',
            // //     //     opacity: 1,
            // //     //     duration: 5000
            // //     // }
            // ],
            // onChapterExit: [
            //     { layer: 'aff-hous-type',
            //     opacity: 1
            // }
            // //     // {
            // //     //     layer: 'layer-name',
            // //     //     opacity: 0
            // //     // }
            // ]
        },
         {
            id: 'ej-id',
            alignment: 'left',
            hidden: false,
            title: 'Environmental Justice in Seattle',
            image: 'images/hurricanesandy.jpg.webp',
            description: 'This map shows priority equity areas, flood risk, and gaps in walkable open space.',
            location: {
                center: [-122.33753, 47.63142],
                zoom: 10,
                pitch: 0.00,
                bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'equity',
                opacity: 1 },
                {layer: 'flood',
                opacity: 1},
                {layer: 'parkgap',
                opacity: 1},
                ],
            onChapterExit: [
                {layer: 'equity',
                opacity: 0 },
                {layer: 'flood',
                opacity: 0},
                {layer: 'parkgap',
                opacity: 0},
                ],
        },
        {
            id: 'highway-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Seattle Highway System',
            image: 'images/wsdot5.png',
            description: 'Interstate-5 is the main north - south highway in Seattle that connects from Canada to Oregon and beyond to San Diego shown in black on the right. In 1965, I-5 opened in Seattle. With the opening of I-5 in 1965, Highway-99, shown in red, became obsolete and was decomissioned from a federal highway to a state route in 1969. State Route 509 opened in 1964, and currently serves as the major southern access point from West Seattle to Burien and other cities to the south. Although Highway-99 is still a critical route in the downtown area, the highway leads into 509 just before South Park. Due to the capabilities of I-5 and 509, the segment of Highway-99 running through South Park is no longer crucial and serves as a barrier and as a polluter for the neighborhood. <p><i>image source: WSDOT Archive</i></p>',
            location: {
                center: [-122.33753, 47.63142],
                zoom: 10,
                pitch: 0.00,
                bearing: 0.00,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'street',
                opacity: 1},],
            onChapterExit: [
                {layer: 'street',
                opacity: 0},]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Major Polluters in South Park, Seattle',
            image: 'images/redhookhouses.jpg',
            description: 'South Park has a 13 year lower life expectancy than other neighborhoods in Seattle due to its location. <p> South Park is situated in a highly industrial area along the Duwamish River. The last five miles of the river was designated as a Superfund site in 2001 due to wastewater and industrial pollutants in the surrounding areas. This segment of the river was once one of the most polluted rivers in the country, although now the final phase of cleanup has been planned. The neighborhood is partially in the floodzone which faces disproportionate impacts due to the condition of the river.</p> <p>South Park is also located next to Boeing Field and is in the flight path for Seatac International Airport. Along with these pollutants, the surrounding highways produce a lot of traffic-related air pollution (TRAP) and almost the whole neighborhood is within the 500 meter TRAP buffer. The transformation of Highway-99 has the potential to eliminate a large portion of the TRAP area.</p>',
            location: {
                center: [-122.31371, 47.52266],
                zoom: 13,
                pitch: 0.0,
                bearing: 0.0,
                speed: 2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'flood',
                opacity: 1 },
                {layer: 'trap',
                opacity: 1 },
                {layer: 'street',
                opacity: 1 },
                {layer: 'superfund',
                opacity: 1 },
                ],
            onChapterExit: [
                {layer: 'flood',
                opacity: 0 },
                {layer: 'trap',
                opacity: 0 },
                {layer: 'street',
                opacity: 0 },
                {layer: 'superfund',
                opacity: 0 },
                {layer: 'street',
                opacity: 0 },
                ],
        },
//         { 
//             id: 'interlude',
//             alignment: 'center',
//             hidden: false,
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
//             video: 'images/902-1_902-2364-PD2_preview.mp4',
//             location: {
//                 center: [-122.32617, 47.52343],
//                 zoom: 14.63,
//                 pitch: 53.26,
//                 bearing: 31.64,
//             },
// },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'South Park Seattle Context',
            image: 'images/source.png',
            description: 'In addition to addressing the environmental concerns in the area, converting Highway-99 has the potential to reconnect the two distinct sides of South Park. The main commercial areas, along with health and food resources are clustered in the eastern side of the highway. The local elementary school is on the western side, and no area is free of highways and industry. The separation and inaccessibility across the neighborhood is a large issue that needs to be addressed.',
            location: {
                center: [-122.32617, 47.52343],
                zoom: 14.33,
                pitch: 53.26,
                bearing: 31.64,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'luse',
                opacity: 1 },
                {layer: 'context',
                opacity: 1 },
                {layer: 'street',
                opacity: 1 },
                {layer: 'parks',
                opacity: 1},
                {layer: 'crossings',
                opacity: 1},
                ],
            onChapterExit: [
                {layer: 'luse',
                opacity: 0 },
                {layer: 'context',
                opacity: 0 },
                ]
        },
        {
            id: 'holden-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Current Physical Connections: S Holden Street Intersection',
            image: 'images/spstreet.png',
            description: 'There are three pedestrian crossings in the South Park neighborhood. The northern most pedestrian access point is across 200ft of Highway-99. This crossing is most likely least used by the community due to it being in the industrial zone, with the South Transfer Station - the major waste disposal facility in the area, located on the western side of the crossing.',
            location: {
                center: [-122.33178, 47.53337],
                zoom: 17.12,
                pitch: 42.46,
                bearing: 20.50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'Satellite imagery',
                opacity: 1 },
                ],
            onChapterExit: []
        },
         {
            id: 'fourth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Current Physical Connections: S Cloverdale Street Underpass',
            image: 'images/spunderpass1.png',
            description: 'The most central crossing connects the two sides of the community with a dark, poorly maintained, and not very well protected underpass beneath Highway-99. This is an important crossing, connecting the local elementary school and residential area to the community center and library.',
            location: {
                center: [-122.32402, 47.52680],
                zoom: 17.12,
                pitch: 42.46,
                bearing: 20.50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'ped-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Current Physical Connections: S Henderson Street Pedestrian Bridge',
            image: 'images/spbridge.png',
            description: 'This pedestrian bridge is the final and southern most crossing that connects the neighborhood. The bridge is 8ft wide and fairly steep as it crosses above Highway-99. It serves as a major connection between the elementary school, the health center, and the residential community.',
            location: {
                center: [-122.32114, 47.52326],
                zoom: 17.14,
                pitch: 42.46,
                bearing: 20.50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [
                {layer: 'crossings',
                opacity: 0},]
        },
         {
            id: 'sixth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Future... Speculative Areas of Intervention',
            image: 'images/source.png',
            description: 'These three connections and two sides of the neighborhood could be greated enhanced by a redesign of Highway-99. Retaking the corridor would give back 44 acres to the community. Adding open space, safe pedestrian connections, and potentially regridding the streets that were dead-ended will help unify and bring an amenity to the community. This community deserves equittable changes that will foster community accessibility and resilience.',
            location: {
                center: [-122.33205, 47.53090],
        zoom: 13.5,
        pitch: 0.0,
        bearing: 0.0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        // {
        //     id: 'fourth-chapter',
        //     alignment: 'fully',
        //     hidden: false,
        //     title: 'Third Title',
        //     image: 'images/source.png',
        //     description: 'Copy these sections to add to your story.',
        //     location: {
        //         center: [-58.54195, -34.71600],
        //         zoom: 4,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [],
        //     onChapterExit: []
        // }
    ]
};
