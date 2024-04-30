import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LandingPage.module.css";

const LandingPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/contact-form");
  }, [navigate]);

  return (
    <div className={styles.landingPage01}>
      <main className={styles.landingPage01Inner}>
        <section className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.copyWrapper} onClick={onFrameContainerClick}>
              <div className={styles.copy}>
                <h1 className={styles.customBerkeleyMeal}>
                  CUSTOM BERKELEY MEAL PLAN
                </h1>
                <h3 className={styles.createdByBerkeley}>
                  created by berkeley students for berkeley students
                </h3>
                <button className={styles.button}>
                  <div className={styles.generateMealPlan}>
                    GENERATE MEAL PLAN NOW!
                  </div>
                </button>
              </div>
            </div>
          </div>
          <img
            className={styles.image1Icon}
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
        </section>
      </main>
      <div className={styles.frameGroup}>
        <div className={styles.headingParent}>
          <h1 className={styles.heading}>Heading</h1>
          <h3 className={styles.subheadingToIntroduce}>
            Subheading to introduce testimonials
          </h3>
        </div>
        <div className={styles.cards}>
          <div className={styles.customerQuote}>
            <div className={styles.aTerrificPiece}>
              “A terrific piece of praise”
            </div>
            <div className={styles.avatar}>
              <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
              <div className={styles.avatar1}>
                <div className={styles.name}>Name</div>
                <div className={styles.description}>Description</div>
              </div>
            </div>
          </div>
          <div className={styles.customerQuote1}>
            <div className={styles.aFantasticBit}>
              “A fantastic bit of feedback”
            </div>
            <div className={styles.avatar2}>
              <img
                className={styles.avatarIcon1}
                alt=""
                src="/avatar-1@2x.png"
              />
              <div className={styles.form}>
                <div className={styles.name1}>Name</div>
                <div className={styles.description1}>Description</div>
              </div>
            </div>
          </div>
          <div className={styles.customerQuote2}>
            <div className={styles.aGenuinelyGlowing}>
              “A genuinely glowing review”
            </div>
            <div className={styles.avatar3}>
              <img
                className={styles.avatarIcon2}
                alt=""
                src="/avatar-2@2x.png"
              />
              <div className={styles.whyYouShouldWorkWithUs}>
                <div className={styles.name2}>Name</div>
                <div className={styles.description2}>Description</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.navigationFooter}>
        <div className={styles.divider} />
        <div className={styles.frameContainer}>
          <div className={styles.topicPageHeaderParent}>
            <div className={styles.topicPageHeader}>
              <h3 className={styles.siteName}>Site name</h3>
              <div className={styles.buttonsIconParent}>
                <img
                  className={styles.buttonsIcon}
                  alt=""
                  src="/buttons--icon@2x.png"
                />
                <img
                  className={styles.buttonsIcon1}
                  alt=""
                  src="/buttons--icon@2x.png"
                />
                <img
                  className={styles.buttonsIcon2}
                  alt=""
                  src="/buttons--icon@2x.png"
                />
              </div>
            </div>
            <img
              className={styles.buttonsIcon3}
              alt=""
              src="/buttons--icon@2x.png"
            />
          </div>
          <div className={styles.topicFooter}>
            <div className={styles.topics}>
              <div className={styles.topic}>Topic</div>
              <div className={styles.page}>Page</div>
              <div className={styles.page1}>Page</div>
              <div className={styles.page2}>Page</div>
            </div>
            <div className={styles.topics1}>
              <div className={styles.topic1}>Topic</div>
              <div className={styles.page3}>Page</div>
              <div className={styles.page4}>Page</div>
              <div className={styles.page5}>Page</div>
            </div>
            <div className={styles.topics2}>
              <div className={styles.topic2}>Topic</div>
              <div className={styles.page6}>Page</div>
              <div className={styles.page7}>Page</div>
              <div className={styles.page8}>Page</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
