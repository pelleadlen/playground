import { RevealUp } from "../../hooks/animation";
import { QuoteLarge, Quotes } from "./styled/styledQuote";

const Quoted = () => {
  return (
    <>
      <Quotes>
        <RevealUp cascade={true}>
          <QuoteLarge>
            ”Increased circularity means less material. The goal is not to
            recycle but to reuse.”
            <span>
              Quote from interview with Emma Ingo @textile startup vividye
            </span>
          </QuoteLarge>
        </RevealUp>
      </Quotes>
    </>
  );
};

export default Quoted;
