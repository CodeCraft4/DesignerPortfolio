import React, { useEffect, useState } from "react";
import { CardSlider } from "./Card";
import { Box, Button } from "@mui/material";
import "./Slider.css";
import { TESTIMONIALS } from "Constant/content";
import { ArrowLeftTwoTone, ArrowRightTwoTone } from "@mui/icons-material";

const TestimonailCard = () => {
  const [moveClass, setMoveClass] = useState("");
  const [carouselItems, setCarouselItems] = useState(TESTIMONIALS);

  useEffect(() => {
    document.documentElement.style.setProperty("--num", carouselItems.length);
  }, [carouselItems]);

  const handleAnimationEnd = () => {
    if (moveClass === "prev") {
      shiftNext([...carouselItems]);
    } else if (moveClass === "next") {
      shiftPrev([...carouselItems]);
    }
    setMoveClass("");
  };

  const shiftPrev = (copy) => {
    let lastcard = copy.pop();
    copy.splice(0, 1, lastcard);
    setCarouselItems(copy);
  };

  const shiftNext = (copy) => {
    let firstcard = copy.shift();
    copy.splice(copy.length, 0, firstcard);
    setCarouselItems(copy);
  };

  return (
    <div className="carouselwrapper">
      <ul
        onAnimationEnd={handleAnimationEnd}
        className={`${moveClass} carousel`}
      >
        {carouselItems.map((e) => (
          <CardSlider
            img={e.imgUrl}
            description={e.description}
            key={e.Title}
            person={e.person}
          />
        ))}
      </ul>
      <Box mt={4}>
        <Button
          variant="contained"
          sx={{
            p: "3px",
            borderRadius: "20px",
            m: 1,
            px: 2,
            bgcolor: "black",
            "&:hover": {
              bgcolor: "red",
            },
          }}
          onClick={() => setMoveClass("next")}
          className="prev"
        >
          <ArrowLeftTwoTone />
        </Button>
        <Button
          variant="contained"
          sx={{
            p: "3px",
            borderRadius: "20px",
            m: 1,
            px: 2,
            bgcolor: "black",
            "&:hover": {
              bgcolor: "red",
            },
          }}
          onClick={() => setMoveClass("prev")}
          className="next"
        >
          <ArrowRightTwoTone />
        </Button>
      </Box>
    </div>
  );
};

export default TestimonailCard;
