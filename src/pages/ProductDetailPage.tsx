import { FunctionComponent } from "react";
import styles from "./ProductDetailPage.module.css";

const ProductDetailPage: FunctionComponent = () => {
  return (
    <div className={styles.productDetailPage}>
      <header className={styles.image9Parent}>
        <img className={styles.image9Icon} alt="" src="/image-9@2x.png" />
        <h1 className={styles.productName}>
          Your meal plan is ready for the week!
        </h1>
      </header>
      <main className={styles.frameParent}>
        <section className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.priceParent}>
                <div className={styles.price}>Thursday 4/25/2024</div>
                <div className={styles.frameDiv}>
                  <div className={styles.dropdownParent}>
                    <div className={styles.dropdown}>
                      <div className={styles.label}>Breakfast</div>
                      <img
                        className={styles.chevronDownIcon}
                        alt=""
                        src="/chevrondown.svg"
                      />
                    </div>
                    <div className={styles.dropdownWrapper}>
                      <div className={styles.dropdown1}>
                        <div className={styles.label1}>Cafe 3</div>
                        <img
                          className={styles.chevronDownIcon1}
                          alt=""
                          src="/chevrondown.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.frameParent1}>
                      <div className={styles.dropdownContainer}>
                        <div className={styles.dropdown2}>
                          <div className={styles.label2}>Crossroads</div>
                          <img
                            className={styles.chevronDownIcon2}
                            alt=""
                            src="/chevrondown.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.dropdownComponents}>
                        <div className={styles.foodItem1ServingSizeFooWrapper}>
                          <div className={styles.foodItem1Container}>
                            <ul className={styles.foodItem1ServingSizeFoo}>
                              <li className={styles.foodItem1}>
                                Food Item 1 (Serving Size)
                              </li>
                              <li>Food Item 2 (Serving Size)</li>
                            </ul>
                          </div>
                        </div>
                        <div className={styles.dropdownFrame}>
                          <div className={styles.dropdown3}>
                            <div className={styles.label3}>Clark Kerr</div>
                            <img
                              className={styles.chevronDownIcon3}
                              alt=""
                              src="/chevrondown.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.dropdown4}>
                          <div className={styles.label4}>Lunch</div>
                          <img
                            className={styles.chevronDownIcon4}
                            alt=""
                            src="/chevrondown-4.svg"
                          />
                        </div>
                        <div className={styles.dropdown5}>
                          <div className={styles.label5}>Dinner</div>
                          <img
                            className={styles.chevronDownIcon5}
                            alt=""
                            src="/chevrondown.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.image2Wrapper}>
                <img
                  className={styles.image2Icon}
                  loading="lazy"
                  alt=""
                  src="/image-2@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <button className={styles.button}>
              <div className={styles.download}>Download</div>
            </button>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.viewOtherDaysMealOptionsWrapper}>
              <h1 className={styles.viewOtherDays}>
                View other day’s meal options!
              </h1>
            </div>
            <div className={styles.cardList}>
              <div className={styles.card}>
                <img
                  className={styles.image3Icon}
                  loading="lazy"
                  alt=""
                  src="/image-3@2x.png"
                />
                <div className={styles.copy}>
                  <div className={styles.friday}>
                    <span>Friday</span>
                    <span className={styles.span}>{` `}</span>
                  </div>
                </div>
              </div>
              <div className={styles.card1}>
                <img
                  className={styles.image4Icon}
                  loading="lazy"
                  alt=""
                  src="/image-4@2x.png"
                />
                <div className={styles.copy1}>
                  <h3 className={styles.saturday}>{`Saturday `}</h3>
                </div>
              </div>
              <div className={styles.card2}>
                <img
                  className={styles.image5Icon}
                  loading="lazy"
                  alt=""
                  src="/image-5@2x.png"
                />
                <div className={styles.copy2}>
                  <div className={styles.sunday}>
                    <span>Sunday</span>
                    <span className={styles.span1}>{` `}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className={styles.buttonPanel}>
          <button className={styles.buttonPrimary}>
            <div className={styles.downloadTheRest}>
              Download the rest of the weeks meal plan here!
            </div>
          </button>
        </footer>
      </main>
    </div>
  );
};

export default ProductDetailPage;
