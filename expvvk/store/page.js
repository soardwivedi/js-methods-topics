"use client";
import React, { useState } from "react";
import SubHeader from "@/Components/Includes/SubHeader";
import {
  faBarsSort,
  faFilter,
  faSearch,
  faEdit,
  faHeart,
} from "@fortawesome/pro-light-svg-icons";
import { faHeart as faHeartsolid } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badges from "@/Components/Components/Badges";
import Iconsone from "@/public/kogoai/0.png";
import Iconstwo from "@/public/kogoai/1.png";
import Iconsthree from "@/public/kogoai/6.png";
import Iconsfourth from "@/public/kogoai/3.png";
import Iconsfive from "@/public/kogoai/6.png";
import Foodicons from "@/public/kogonaut_icons/Foodicons.png";
import Placesicons from "@/public/kogonaut_icons/Placesicons.png";
import Tripicons from "@/public/kogonaut_icons/Tripicons.png";
import Hotelicons from "@/public/kogonaut_icons/Hotelicons.png";
import Input from "@/Components/Components/Input";
// import Myfavourites from "@/avatar/page";
import Myfavourites from "@/app/(pages)/plan_mithilesh/kogoai/Components/avatar/page";

// import Storelist from "@/Storelist/page";
import Storelist from "@/app/(pages)/plan_mithilesh/kogoai/Components/Store/Storelist/page.js";
import IconsStore from "@/public/kogoai/2.png";
import IconsStore2 from "@/public/kogoai/4.png";
import Iconsimg from "@/public/assets/img/generic/image-thumbnail.png";
import Button from "@/Components/Components/Button";

export default function Store({ SubHeaderOnBack, myStoreData }) {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked(!liked);
  };
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const handleTabClick = (category) => {
    setActiveCategory(category);
  };
  const Categoriesmenu = [
    { Categorie: "All Categories", icons: Iconsone },
    { Categorie: "Travel", icons: Iconstwo },
    { Categorie: "Ask & Find", icons: Iconsthree },
    { Categorie: "Personal", icons: Iconsfourth },
    { Categorie: "News", icons: Iconsfive },
  ];
  const Favourites = [
    { Name: "Food", Image: Foodicons },
    { Name: "Places", Image: Placesicons },
    { Name: "New trip", Image: Tripicons },
    { Name: "Hotel", Image: Hotelicons },
  ];

  const Trendingdata = [];

  // const Trendingdata = [
  //   {
  //     Storename: "Translate",
  //     description:
  //       "The ultimate travel expert.Book flights, hotels, discover, places and experiences. Plan your trips.",
  //     UnlikeIcons: faHeart,
  //     LikeIcons: faHeartsolid,
  //     StoreIcons: IconsStore,
  //   },
  //   {
  //     Storename: "Shop",
  //     description:
  //       "The ultimate travel expert.Book flights, hotels, discover, places and experiences. Plan your trips.",
  //     UnlikeIcons: faHeart,
  //     LikeIcons: faHeartsolid,
  //     StoreIcons: IconsStore2,
  //   },
  //   {
  //     Storename: "Food Finder",
  //     description:
  //       "The ultimate travel expert.Book flights, hotels, discover, places and experiences. Plan your trips.",
  //     UnlikeIcons: faHeart,
  //     LikeIcons: faHeartsolid,
  //     StoreIcons: Foodicons,
  //   },
  //   {
  //     Storename: "Place Finder",
  //     description:
  //       "The ultimate travel expert.Book flights, hotels, discover, places and experiences. Plan your trips.",
  //     UnlikeIcons: faHeart,
  //     LikeIcons: faHeartsolid,
  //     StoreIcons: Placesicons,
  //   },
  // ];

  const Traveldata = [
    {
      Storename: "Flight",
      description:
        "The ultimate travel expert.Book flights, hotels, discover, places and experiences. Plan your trips.",
      Icons: faHeart,
      StoreIcons: IconsStore,
    },
    {
      Storename: "Navigate",
      description:
        "The ultimate travel expert.Book flights, hotels, discover, places and experiences. Plan your trips.",
      Icons: faHeart,
      StoreIcons: IconsStore2,
    },
    {
      Storename: "Things To Do",
      description:
        "The ultimate travel expert.Book flights, hotels, discover, places and experiences. Plan your trips.",
      Icons: faHeart,
      StoreIcons: Foodicons,
    },
    {
      Storename: "Audio Guides",
      description:
        "The ultimate travel expert.Book flights, hotels, discover, places and experiences. Plan your trips.",
      Icons: faHeart,
      StoreIcons: Placesicons,
    },
  ];

  console.log("myStoreDatamyStoreDetailData1", myStoreData);
  return (
    <>
      <SubHeader title="My Store" filterview="ture" onBack={SubHeaderOnBack}>
        <div className="row">
          {/* <div className="col point">
            <FontAwesomeIcon icon={faBarsSort} className="fa-lg text-active" />
          </div> */}
          {/* <div className="col point">
            <FontAwesomeIcon icon={faFilter} className="fa-lg text-active" />
          </div> */}
        </div>
      </SubHeader>
      <div style={{ maxWidth: "540px" }}>
        <div className="row">
          <div className="col-md-12 mb-4 mb-md-3">
            <div className="row overflow-auto flex-nowrap px-2 py-1 gx-2">
              {Categoriesmenu.map((item, index) => (
                <div className="col-auto" key={index}>
                  <Badges
                    title={item.Categorie}
                    image_icon={item.icons}
                    onClick={() => setActiveCategory(item.Categorie)}
                    active={item.Categorie === activeCategory}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-12 mb-4 mb-md-3">
            <div className="StoreListGroup">
              <Input
                preFixIcon={faSearch}
                type="text"
                placeholder="What are you looking for?"
              />
            </div>
          </div>
          {/* Content for All Categories tab */}
          {activeCategory === "All Categories" && (
            <>
              <div className="col-md-12">
                <div className="StoreListGroup">
                  <div className="row">
                    <div className="col-md-12 mb-3">
                      <h5 className="text-kogo-white button-label">Trending</h5>
                      <h6 className="ui-label text-white-gray">
                        Top picks from our Kogo user community.
                      </h6>
                    </div>
                    <div className="col-md-12">
                      {myStoreData.map((item, index) => (
                        <Storelist
                          Storeimg={item.icon}
                          title={item.name}
                          Caption={item.description}
                          Icons={faHeart}
                          key={index}
                        />
                      ))}
                    </div>
                    <div className="col-md-12 my-3 my-md-4">
                      <Button title="See More" opctity="ture" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="StoreListGroup">
                  <div className="row">
                    <div className="col-md-12 mb-3">
                      <h5 className="text-kogo-white button-label">Travel</h5>
                      <h6 className="ui-label text-white-gray">
                        Kogo for travellers and explorers.
                      </h6>
                    </div>
                    <div className="col-md-12">
                      {Traveldata.map((item, index) => (
                        <Storelist
                          Storeimg={item.StoreIcons}
                          title={item.Storename}
                          Caption={item.description}
                          Icons={faHeart}
                          key={index}
                        />
                      ))}
                    </div>
                    <div className="col-md-12 my-3 my-md-4">
                      <Button title="See More" opctity="ture" />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {/* Content for All Categories tab end */}
          {/* Content for Travel tab start */}
          {activeCategory === "Travel" && (
            <>
              <div className="col-md-12">
                <div className="StoreListGroup">
                  <div className="row mb-3">
                    <div className="col-auto flex-grow-1">
                      <h5 className="mb-0 text-kogo-white button-label">
                        My Favourites (4)
                      </h5>
                    </div>
                    <div className="col-auto point">
                      <FontAwesomeIcon icon={faEdit} className="text-active" />
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="row overflow-auto flex-nowrap px-2 py-1 gx-2 my-2">
                    {Favourites.map((item, index) => (
                      <div className="col-auto" key={index}>
                        <Myfavourites
                          title={item.Name}
                          pillimage={item.Image}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="StoreListGroup">
                    <div className="row">
                      <div className="col-md-12">
                        <h5 className="text-kogo-white button-label">
                          Trending
                        </h5>
                        <h6 className="ui-label text-white-gray">
                          Kogo for travellers and explorers.
                        </h6>
                      </div>
                      <div className="col-md-12">
                        {Trendingdata.map((item, index) => (
                          <Storelist
                            Storeimg={item.StoreIcons}
                            title={item.Storename}
                            Caption={item.description}
                            Icons={faHeart}
                            key={index}
                          />
                        ))}
                      </div>
                      <div className="col-md-12 my-3 my-md-4">
                        <Button title="See More" opctity="ture" />
                      </div>
                      <div className="col-md-12 mb-3">
                        <h5 className="text-kogo-white button-label">Travel</h5>
                        <h6 className="ui-label text-white-gray">
                          Kogo for travellers and explorers.
                        </h6>
                      </div>
                      <div className="col-md-12">
                        {Trendingdata.map((item, index) => (
                          <Storelist
                            Storeimg={item.StoreIcons}
                            title={item.Storename}
                            Caption={item.description}
                            Icons={faHeart}
                            key={index}
                          />
                        ))}
                      </div>
                      <div className="col-md-12 my-3 my-md-4">
                        <Button title="See More" opctity="ture" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {/* Content for Travel tab end */}
          {/* Content for Ask & Find tab start */}
          {activeCategory === "Ask & Find" && (
            <>
              <div className="col-md-12">
                <div className="StoreListGroup">
                  <div className="row mb-3">
                    <div className="col-auto flex-grow-1">
                      <h5 className="mb-0 text-kogo-white button-label">
                        My Favourites (4)
                      </h5>
                    </div>
                    <div className="col-auto point">
                      <FontAwesomeIcon icon={faEdit} className="text-active" />
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="row overflow-auto flex-nowrap px-2 py-1 gx-2 my-2">
                    {Favourites.map((item, index) => (
                      <div className="col-auto" key={index}>
                        <Myfavourites
                          title={item.Name}
                          pillimage={item.Image}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="StoreListGroup">
                    <div className="row">
                      <div className="col-md-12">
                        <h5 className="text-kogo-white button-label">
                          Ask & Find
                        </h5>
                        <h6 className="ui-label text-white-gray">
                          Kogo for curiosity seekers
                        </h6>
                      </div>
                      <div className="col-md-12">
                        {Trendingdata.map((item, index) => (
                          <Storelist
                            Storeimg={item.StoreIcons}
                            title={item.Storename}
                            Caption={item.description}
                            Icons={faHeart}
                            key={index}
                          />
                        ))}
                      </div>
                      <div className="col-md-12 my-3 my-md-4">
                        <Button title="See More" opctity="ture" />
                      </div>
                      <div className="col-md-12 mb-3">
                        <h5 className="text-kogo-white button-label">Travel</h5>
                        <h6 className="ui-label text-white-gray">
                          Kogo for travellers and explorers.
                        </h6>
                      </div>
                      <div className="col-md-12">
                        {Trendingdata.map((item, index) => (
                          <Storelist
                            Storeimg={item.StoreIcons}
                            title={item.Storename}
                            Caption={item.description}
                            Icons={faHeart}
                            key={index}
                          />
                        ))}
                      </div>
                      <div className="col-md-12 my-3 my-md-4">
                        <Button title="See More" opctity="ture" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {/* Content for Ask & Find tab end */}

          {/* Content for Personal tab start */}
          {activeCategory === "Personal" && (
            <>
              <div className="col-md-12">
                <div className="StoreListGroup">
                  <div className="row mb-3">
                    <div className="col-auto flex-grow-1">
                      <h5 className="mb-0 text-kogo-white button-label">
                        My Favourites (4)
                      </h5>
                    </div>
                    <div className="col-auto point">
                      <FontAwesomeIcon icon={faEdit} className="text-active" />
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="row overflow-auto flex-nowrap px-2 py-1 gx-2 my-2">
                    {Favourites.map((item, index) => (
                      <div className="col-auto" key={index}>
                        <Myfavourites
                          title={item.Name}
                          pillimage={item.Image}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="StoreListGroup">
                    <div className="row">
                      <div className="col-md-12">
                        <h5 className="text-kogo-white button-label">
                          Personal
                        </h5>
                        <h6 className="ui-label text-white-gray">
                          Kogo for personal management
                        </h6>
                      </div>
                      <div className="col-md-12">
                        {Trendingdata.map((item, index) => (
                          <Storelist
                            Storeimg={item.StoreIcons}
                            title={item.Storename}
                            Caption={item.description}
                            Icons={faHeart}
                            key={index}
                          />
                        ))}
                      </div>
                      <div className="col-md-12 my-3 my-md-4">
                        <Button title="See More" opctity="ture" />
                      </div>
                      <div className="col-md-12 mb-3">
                        <h5 className="text-kogo-white button-label">Travel</h5>
                        <h6 className="ui-label text-white-gray">
                          Kogo for travellers and explorers.
                        </h6>
                      </div>
                      <div className="col-md-12">
                        {Trendingdata.map((item, index) => (
                          <Storelist
                            Storeimg={item.StoreIcons}
                            title={item.Storename}
                            Caption={item.description}
                            Icons={faHeart}
                            key={index}
                          />
                        ))}
                      </div>
                      <div className="col-md-12 my-3 my-md-4">
                        <Button title="See More" opctity="ture" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {/* Content for Personal tab end */}

          {/* Content for News tab start */}
          {activeCategory === "News" && (
            <>
              <div className="col-md-12">
                <div className="StoreListGroup">
                  <div className="row mb-3">
                    <div className="col-auto flex-grow-1">
                      <h5 className="mb-0 text-kogo-white button-label">
                        My Favourites (4)
                      </h5>
                    </div>
                    <div className="col-auto point">
                      <FontAwesomeIcon icon={faEdit} className="text-active" />
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="row overflow-auto flex-nowrap px-2 py-1 gx-2 my-2">
                    {Favourites.map((item, index) => (
                      <div className="col-auto" key={index}>
                        <Myfavourites
                          title={item.Name}
                          pillimage={item.Image}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="StoreListGroup">
                    <div className="row">
                      <div className="col-md-12">
                        <h5 className="text-kogo-white button-label">News</h5>
                        <h6 className="ui-label text-white-gray">
                          Kogo for current affairs
                        </h6>
                      </div>
                      <div className="col-md-12">
                        {Trendingdata.map((item, index) => (
                          <Storelist
                            Storeimg={item.StoreIcons}
                            title={item.Storename}
                            Caption={item.description}
                            Icons={faHeart}
                            key={index}
                          />
                        ))}
                      </div>
                      <div className="col-md-12 my-3 my-md-4">
                        <Button title="See More" opctity="ture" />
                      </div>
                      <div className="col-md-12 mb-3">
                        <h5 className="text-kogo-white button-label">Travel</h5>
                        <h6 className="ui-label text-white-gray">
                          Kogo for travellers and explorers.
                        </h6>
                      </div>
                      <div className="col-md-12">
                        {Trendingdata.map((item, index) => (
                          <Storelist
                            Storeimg={item.StoreIcons}
                            title={item.Storename}
                            Caption={item.description}
                            Icons={faHeart}
                            key={index}
                          />
                        ))}
                      </div>
                      <div className="col-md-12 my-3 my-md-4">
                        <Button title="See More" opctity="ture" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {/* Content for News tab end */}
        </div>
      </div>
    </>
  );
}
