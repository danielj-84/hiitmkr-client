import React from "react";
import {
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Checkbox,
} from "@material-ui/core";
import "./SearchResults.scss";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';


const SearchResults = ({ results, onChange }) => {
  const [checked, setChecked] = React.useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      if (checked.length < 3) {
        newChecked.push(value);
      }
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    onChange(newChecked);
  };

  const resetArtists = () => {
    setChecked([]);
  };
  console.log(results)
  return (
    <>
      <button className="results__button" onClick={resetArtists}>
        Reset
      </button>
       <ImageList sx={{ width: "100%", height: "100%" }} cols={4}>
      {results.map((item) => (
        <ImageListItem key={item?.images?.[0]?.url} onClick={handleToggle(item.id)}>
          <img
            srcSet={`${item.img}?w=100&fit=crop&auto=format&dpr=2 2x`}
            src={`${item?.images?.[1]?.url || item?.images?.[1]?.url}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            style={checked.indexOf(item.id) !== -1 ? {height: "100px", width: "100%", borderRadius: 5    } : {height: "100px", width: "100%", filter: 'grayscale(100%)', borderRadius: 5 }}
          />
          <ImageListItemBar
            subtitle={item?.name}
          />
          {checked.indexOf(item.id) !== -1 && <InfoIcon color="error" style={{position: "absolute", top: 2, left: 2}}/>}
        </ImageListItem>
      ))}
    </ImageList>
    </>
  );
};

export default SearchResults;
