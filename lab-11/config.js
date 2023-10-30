var config = {
    style: 'mapbox://styles/ssb245/clo4ipoic003v01qvb9fa07s7',
    accessToken: 'pk.eyJ1Ijoic3NiMjQ1IiwiYSI6ImNsbjM2OWcwNzBkcncya3A5cW1xcDVveHYifQ.xLMsLxb2C4-z2_aHTmPkyw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'NYC Housing Flood Risk',
    subtitle: 'Mapping Public Housing Flood Vulnerability',
    byline: 'Stephanie Belbeck // CRP 5850',
    para1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc neque ligula, ornare quis maximus egestas, maximus nec est. Vivamus vitae quam sem. Proin ut lacinia orci. Mauris id sapien sed felis venenatis iaculis eget eu metus. Nulla sed eros nibh. In ut lorem elit. Sed auctor dapibus lorem vel interdum. Sed dapibus aliquet ipsum efficitur commodo.',
    para2: 'Pellentesque luctus mi id lectus semper, sed congue lectus imperdiet. Nam arcu turpis, sollicitudin sit amet interdum eget, sagittis non nunc. Cras id lacinia lectus. Duis ut enim velit. Maecenas ultricies erat at sodales ultricies. Pellentesque at ex non dui venenatis efficitur sit amet at justo. Duis nec magna augue. In a viverra sem. In elementum gravida metus vitae fermentum.',
    footer: 'NYC Open Data, New York City Housing Developments (NYCHA), title image: U.S. Coast Guard via Getty Images <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Flood Risk in the City',
            image: 'images/hurricanesandy.jpg.webp',
            description: 'In the fall of 2012, New York City was hit with hurricane Sandy that left tens of thousands of public housing residents <a href= "https://www1.nyc.gov/site/nycha/about/press/pr-2012/nycha-has-restored-power-to-buildings-affected-by-hurricane-sandy.page">without power for days or even weeks</a>. New York City Housing Authority public housing developments were affected. <a href="https://furmancenter.org/files/publications/SandysEffectsOnHousingInNYC.pdf">24,000 government-subsidized apartments and 40,000 rent-stabilized apartments were also affected</a>. <p>With rising sea levels from climate change and the <a href= "https://www.nytimes.com/2017/04/18/magazine/when-rising-seas-transform-risk-into-certainty.html">promise</a> of more flooding, which areas and <i>who</i> will likely be most affected? How is affordable housing construction responding to this?</p> <p> <i> image source: Emile Wamsteker, The New Yorker, Bloomberg via Getty </i> </p>',
            location: {
                center: [-74.01351, 40.72576],
                zoom: 11.8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            //onChapterEnter: [],
            //onChapterExit: []
             onChapterEnter: [
                 {
                    layer: 'aff-hous-type',
                     opacity: 0
                 }
            //     // {
            //     //     layer: 'layer-name',
            //     //     opacity: 1,
            //     //     duration: 5000
            //     // }
            ],
            onChapterExit: [
                { layer: 'aff-hous-type',
                opacity: 1
            }
            //     // {
            //     //     layer: 'layer-name',
            //     //     opacity: 0
            //     // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Red Hook Houses',
            image: 'images/redhookhouses.jpg',
            description: 'The Red Hook Houses, located in the Red Hook neighborhood of Brooklyn, New York City, are a collection of public housing developments managed by New York City Housing Authority (NYCHA) and house thousands of residents. Red Hook is a low-lying waterfront neighborhood, making it particularly vulnerable to flooding during severe weather events. The proximity of the community to the water and its historically industrial character has made it susceptible to the impacts of rising sea levels and storm surges. Flooding has had a significant and detrimental effect on the Red Hook Houses residents and efforts have been made to address these issues, including infrastructure improvements and resiliency measures. However, the vulnerability to flooding remains a concern for both the Red Hook Houses and the broader community. <p><i>image source: American Galvanizers Association</i></p>',
            location: {
                center: [-74.00305, 40.67503],
                zoom: 15.8,
                pitch: 45,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        { 
            id: 'interlude',
            alignment: 'center',
            hidden: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
            video: 'images/902-1_902-2364-PD2_preview.mp4',
            location: {
            center: [-74.00305, 40.67503],
            zoom: 15.8,
            pitch: 45,
            bearing: 0,
            },
},
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'More Vulnerable Public Housing',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-73.98181, 40.71267],
                zoom: 15.64,
                pitch: 45.00,
                bearing: 0.00
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
