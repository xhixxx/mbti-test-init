import Taro from "@tarojs/taro";
import {Image, View} from "@tarojs/components";
import {AtButton} from "taro-ui";
import headerBg from "../../assets/headerBg.jpg";
import GlobalFooter from "../../components/GlobalFooter";
import "./index.scss";

/**
 * 主页
 */
export default () => {
  return (
    <View className="indexPage">
      <View className="at-article__h1 title">MBTI性格测试</View>
      <View className="at-article__h2 subTitle">快速确定你的性格特点</View>
      <AtButton
        type="primary"
        circle
        className="enterBtn"
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/doQuestion/index",
          });
          // 跳转到测试页面
        }}
      >
        开始测试
      </AtButton>
      <Image className="headerBg" src={headerBg} />
      <GlobalFooter />
    </View>
  );
};
