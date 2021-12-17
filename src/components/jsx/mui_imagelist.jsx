// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import ImageListItem from "@material-ui/core/ImageListItem";
// import ListSubheader from "@material-ui/core/ListSubheader";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// import { PlayArrow } from "@material-ui/icons";
// import { Button } from "@material-ui/core";

// const imageWidth = 180,
//   imageheight = 280;
// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "grid",
//     justifyContent: "left",
//     backgroundColor: theme.palette.background.paper,
//   },
//   image: {
//     margin: 10,
//     width: imageWidth,
//     height: imageheight,
//   },
//   PlayButton: {
//     marginTop: 270,
//     marginLeft: 80,
//     height: "auto",
//     borderRadius: 20,
//     backgroundColor: "#12c990",
//     color: "#ffffff",
//   },
// }));

// const TitleBarImageList = (props) => {
//   const classes = useStyles();
//   const { moviesList, imagePath, getVideo } = props;
//   const count = moviesList.length;

//   return (
//     <div>
//       <ImageListItem
//         className={classes.root}
//         key="Subheader"
//         style={{ height: "auto" }}
//         sx={{ zIndex: "modal" }}
//       >
//         <ListSubheader component="div">{count} movies found.</ListSubheader>
//       </ImageListItem>

//       <ResponsiveMasonry
//         columnsCountBreakPoints={{
//           360: 2,
//           540: 3,
//           720: 4,
//           900: 5,
//           1080: 6,
//           1260: 7,
//           1440: 8,
//           1620: 9,
//         }}
//       >
//         <Masonry>
//           {moviesList.map((item) => (
//             <Masonry key={item.id}>
//               <img
//                 className={classes.image}
//                 src={imagePath + item.poster_path + `?w=162&auto=format`}
//                 srcSet={
//                   imagePath + item.poster_path + `?w=162&auto=format&dpr=2 2x`
//                 }
//                 alt={item.title}
//                 loading="lazy"
//               />

//               <Button
//                 style={{ maxWidth: "36px", minWidth: "36px" }}
//                 className={classes.PlayButton}
//                 variant="outlined"
//                 align="center"
//                 onClick={() => getVideo(item.id)}
//               >
//                 <PlayArrow />
//               </Button>
//             </Masonry>
//           ))}
//         </Masonry>
//       </ResponsiveMasonry>
//     </div>
//   );
// };

// export default TitleBarImageList;
