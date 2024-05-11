import _ from "lodash";
import { useLocation, useParams, Link } from "react-router-dom";
import useAnswers from "../hooks/useAnswers";
import Analysis from "../components/Analysis";
import Summary from "../components/Summary";
import classes from "../styles/Result.module.css";
import Button from "../components/Button";

export default function Result() {
  const { id } = useParams();
  const location = useLocation();
  const { state } = location;
  const qna = state ? state.qna : null;
  const { loading, error, answers } = useAnswers(id);

  function calculate() {
    let score = 0;

    if (answers && qna) {
      answers.forEach((question, index1) => {
        let correctIndexes = [],
          checkedIndexes = [];

        question.options.forEach((option, index2) => {
          if (option.correct) correctIndexes.push(index2);
          if (qna[index1].options[index2].checked) {
            checkedIndexes.push(index2);
            option.checked = true;
          }
        });

        if (_.isEqual(correctIndexes, checkedIndexes)) {
          score = score + 5;
        }
      });
    }

    return score;
  }

  const userScore = calculate();

  return (
    <div className={classes.resultContainer}>
      {loading && <div>Loading...</div>}
      {error && <div>There was an error!</div>}

      {answers && answers.length > 0 && qna && (
        <>
          <Summary score={userScore} noq={answers.length} />
          <Analysis answers={answers} />
        </>
      )}
      <div className={classes.getBack}>
        <Link to="/">
          {/* window.scroll method lets you dictate where do in the viewport you want to be redirected to  */}
          <Button onClick={() => window.scrollTo(0, 0)}>
            Get back to home
          </Button>
        </Link>
      </div>
    </div>
  );
}
