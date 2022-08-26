import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ContentCard from "../Components/Lend/ContentCard";
import LendCard from "../Components/Lend/LendCard";
import LendTop from "../Components/Lend/LendTop";
import { getLendData } from "../Redux/AppReducer/action";
import "../Styles/lendPage.scss";
import { Spinner } from "@chakra-ui/react";
import "../Styles/spin.scss";

const LendPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const lendData = useSelector((state) => state.AppReducer.lendData);
  const isLoading = useSelector((state) => state.AppReducer.isLoading);
  const initialState = searchParams.getAll("category");
  // console.log(lendData);
  // console.log(initialState)

  useEffect(() => {
    dispatch(getLendData());
  }, []);

  const mapAndSort = (data) => {
    return data?.map((i) => {
      console.log("item", i);
      return <ContentCard item={i} key={i.id} />;
    });
  };

  return (
    <div className="lendContainer">
      <LendTop />
      {isLoading ? (
        <div className="spin">
          <div>
            <Spinner color="red.700" size="xl" speed="0.6s" thickness="5px" />
          </div>
          <p>Please wait...</p>
        </div>
      ) : (
        <div className="mianContent">
          <LendCard />
          <div className="contentItems">
            <div className="sortPaginate">
              <div>Paginate</div>
              <div>Sort</div>
            </div>
            {initialState &&
              mapAndSort(
                lendData?.filter((i) => {
                  if (
                    initialState.includes(i.place) ||
                    initialState.includes(i.gender) ||
                    initialState.includes(i.for)
                  ) {
                    return true;
                  }
                  return false;
                })
              )}
            {initialState.length === 0 && mapAndSort(lendData)}
          </div>
        </div>
      )}
    </div>
  );
};

export default LendPage;
