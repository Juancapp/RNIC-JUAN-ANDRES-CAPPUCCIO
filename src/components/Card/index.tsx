import {
  Container,
  Description,
  Title,
  ButtonsAndTitleContainer,
  Image,
  CustomFontBold,
  CustomFontRegular,
} from "./styles";
import { CardProps } from "../../types/types";
import NotChecked from "../../assets/icons/NotChecked.svg";
import Checked from "../../assets/icons/Checked.svg";
import Delete from "../../assets/icons/Delete.svg";
import Edit from "../../assets/icons/Edit.svg";
import { TouchableOpacity } from "react-native";

export default function Card(props: CardProps) {
  const { switchState, data } = props;
  const { title, description, isDone, id, img } = data;

  return (
    <Container
      activeOpacity={1}
      onPress={() => switchState && switchState(id)}
      hasImage={img}
    >
      <ButtonsAndTitleContainer>
        <CustomFontBold>
          <Title>{title}</Title>
        </CustomFontBold>
        <TouchableOpacity
          activeOpacity={1}
          onPress={(e) => e.stopPropagation()}
        >
          <Delete />
        </TouchableOpacity>
      </ButtonsAndTitleContainer>
      {img && <Image alt={title} source={img} />}
      <CustomFontRegular>
        <Description>{description}</Description>
      </CustomFontRegular>
      <ButtonsAndTitleContainer>
        <TouchableOpacity
          activeOpacity={1}
          onPress={(e) => e.stopPropagation()}
        >
          <Edit />
        </TouchableOpacity>
        {isDone ? <Checked stroke="green" /> : <NotChecked stroke="red" />}
      </ButtonsAndTitleContainer>
    </Container>
  );
}
