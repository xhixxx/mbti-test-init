import Taro from "@tarojs/taro";
import {Image, View} from "@tarojs/components";
import {AtButton} from "taro-ui";
import headerBg from "../../assets/headerBg.jpg";
import GlobalFooter from "../../components/GlobalFooter";
import questionResult from "../../data/question_results.json";
import questions from "../../data/questions.json";
import "./index.scss";
import {getBestQuestionResult} from "../../utils/bizUtils";

/**
 * 测试结果
 */
export default () => {
  const answerList = Taro.getStorageSync("answerList");
  if (!answerList || answerList.length < 1) {
    Taro.showToast({
      title: "答案为空",
      icon: "error",
      duration: 3000,
    });
  }

  const result = getBestQuestionResult(answerList, questions, questionResult);

  return (
    <View className="indexPage">
      <View className="at-article__h1 title">{result.resultName}</View>
      <View className="at-article__h2 subTitle">{result.resultDesc}</View>
      <AtButton
        type="primary"
        circle
        className="enterBtn"
        onClick={() => Taro.reLaunch({ url: "/pages/index/index" })}
      >
        返回主页
      </AtButton>
      <Image className="headerBg" src={headerBg} />
      <GlobalFooter />
    </View>
  );
};
