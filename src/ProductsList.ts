import { Product } from './Product';
import bearingsAndBushings from './images/graphite_bearings_and_bushings.gif';
import graphiteRods from './images/graphite_rods.gif';
import graphiteCrucible from './images/graphite_crucible.gif';


const productsList: Array<Product> = [
  {
    name: "Bearings and Brushings",
    information: [
      'Axial and radial bearings available',
      'Self lubricating',
      'Resistant to thermal shock',
      'Won’t burn or oxidize below 700°F',
      'Good thermal conductivity',
      'Low thermal expansion',
      'Operates well in air or submersed',
      'Imparts a high temperature, solid lubricant to moving parts',
      'Can be used for electrically conductive bushings',
      'Available in any custom design'
    ],
    image: bearingsAndBushings
  },
  {
    name: "Bulk Rods & Material",
    information: [
      'Custom plates and rods made to order',
      'Available in a wide variety of sizes and lengths',
      'Available in any supplied grade of graphite',
      'Available in most required surface finishes',
      'Next day delivery available on standard sizes'
    ],
    image: graphiteRods
  }
  ,
  {
    name: "Continuous Casting Dies",
    information: [
      'Low surface wetting with most molten metals',
      'High thermal and chemical resistance',
      'Excellent resistance to thermal shock',
      'High thermal conductivity',
      'Strength increases as temperature increases',
      'Good lubrication and friction properties',
      'Custom manufactured to any shape and style'
    ],
    image: 'https://via.placeholder.com/150'
  }
  ,
  {
    name: "Crucibles",
    information: [
      'Minimal thermal expansion',
      'Resistant to thermal shock',
      'Non-wetting with most molten metals',
      'Used to melt alloys or hold molten materials',
      'Destruction moulding',
      'Assay analysis',
      'Metallurgical properties analysis',
      'Jewellery manufacturing',
      'Available in any custom size and capacity'
    ],
    image: graphiteCrucible
  }
  ,
  {
    name: "Electrical Contacts",
    information: [
      'Excellent electrical conductivity',
      'Resistant to thermal shock',
      'EDM electrodes',
      'Contact buttons',
      'Battery plates',
      'Jigs and fixtures or soldering and brazing',
      'Available in any custom design'
    ],
    image: 'https://via.placeholder.com/150'
  }
  ,
  {
    name: "Glass Moulds & Tools",
    information: [
      'Push moulds, marble moulds and custom moulds',
      'Custom made glass tools',
      'Probes, steady rests and tool rests',
      'Groove tools, shapers and paddles',
      'Unlike our competitors, no order is too small',
      'We also sell feed stock by the cubic inch for the do-it-yourselfer’s'
    ],
    image: 'https://via.placeholder.com/150'
  }
  ,
  {
    name: "Graphite Powder",
    information: [
      'High lubricity without the need for oil and grease',
      'Available in a wide variety of mesh sizes',
      'Die release aid for powdered metal moulding',
      'Top sheet insulator for molten metal holding',
      'Available in any quantity based on availability'
    ],
    image: 'https://via.placeholder.com/150'
  }
  ,
  {
    name: "Hobby Casting",
    information: [
      'Casting moulds for model trains, airplanes, cars and figurines',
      'Custom made casting tools',
      'Unlike our competitors, no order is too small',
      'We also sell feed stock by the cubic inch to make your own custom casting moulds'
    ],
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Impellers & Mixers',
    information: [
      'Available in oxidation retardant grades for high heat applications',
      'Resistant to thermal shock',
      'Low thermal expansion',
      'Standard grades won’t burn or oxidize below 700°F',
      'Strength of impeller increases as temperature increases',
      'Available in any custom shape, size or style'
    ],
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Jewellery Moulds & Tools',
    information: [
      'Brazing plates',
      'Casting moulds',
      'Paddles',
      'Custom made tooling',
      'Unlike our competitors, no order is too small',
      'We also sell feed stock by the cubic inch for the do-it-yourselfer’s'
    ],
    image: 'https://via.placeholder.com/150'
  },
  {
    name: "Moulds, Boats & Trays",
    information: [
      'Used to melt alloys or to hold and form molten metal',
      'Used for sintering trays or casting moulds',
      'High dimensional stability',
      'Low thermal expansion',
      'Non-wetting with most molten metals',
      'Available in any custom size and capacity'
    ],
    image: 'https://via.placeholder.com/150'
  },
  {
    name: "Oilless Bushings",
    information: [
      'Bronze bushing inset with graphite pins',
      'Self lubricating',
      'Used in applications where traditional lubrication can’t be used',
      'Reduce or eliminate need for other lubricants',
      'Long life',
      'High durability',
      'Available in custom sizes and custom alloys'
    ],
    image: 'https://via.placeholder.com/150'
  },
  {
    name: "Pump Vanes",
    information: [
      'Vanes for dry-running rotary compressors and wet running vane pumps',
      'Resistant to thermal shock',
      'Low thermal expansion',
      'Operate efficiently in air as well as submersed in liquid',
      'Available in any custom shape and size'
    ],
    image: 'https://via.placeholder.com/150'
  },
  {
    name: "Research and Development",
    information: [
      'Supporting research through Canadian Universities and Colleges',
      'Product and process development partner in several fields including solar, metallurgy, molten metals, pulp and paper and motion control',
      'Support joint research ventures between industry and post-secondary institutions'
    ],
    image: 'https://via.placeholder.com/150'
  },
  {
    name: "Seals",
    information: [
      'Ball Valve Seals',
      'Steam Joints',
      'Motion Control Rings',
      'Self lubricating',
      'Resistant to thermal shock',
      'Low thermal expansion',
      'Good thermal conductivity',
      'Operate well in air or submersed in fluids',
      'Imparts a high temperature, solid lubrication film to moving parts',
      'Won’t burn or oxidize below 700°F',
      'Available in any custom size and design'
    ],
    image: 'https://via.placeholder.com/150'
  },
  {
    name: "Segmented Seals",
    information: [
      'Segmented Piston and Guide Ring assemblies available',
      'Unlimited number of possible segments',
      'Lapped, tenon or butt joints available',
      'Self lubricating',
      'Low thermal expansion',
      'Imparts a high temperature, solid lubricating film to moving parts',
      'Available in any custom design'
    ],
    image: 'https://via.placeholder.com/150'
  }

]

export default productsList;